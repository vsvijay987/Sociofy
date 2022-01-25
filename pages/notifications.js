import React, { useEffect, useState } from "react";
import { Feed, Segment, Divider, Container } from "semantic-ui-react";
import axios from "axios";
import baseUrl from "../utils/baseUrl";
import { parseCookies } from "nookies";
import cookie from "js-cookie";
import { NoNotifications } from "../components/Layout/NoData";
import LikeNotification from "../components/Notifications/LikeNotification";
import CommentNotification from "../components/Notifications/CommentNotification";
import FollowerNotification from "../components/Notifications/FollowerNotification";

const Notifications = ({
  notifications,
  errorLoading,
  user,
  userFollowStats,
}) => {
  const [loggedUserFollowStats, setUserFollowStats] = useState(userFollowStats);

  useEffect(() => {
    const notificationRead = async () => {
      try {
        await axios.post(
          `${baseUrl}/api/notifications`,
          {},
          { headers: { Authorization: cookie.get("token") } }
        );
      } catch (error) {
        console.log(error);
      }
    };
    return () => {
      notificationRead();
    };
  }, []);

  return (
    <>
      <div>
        {notifications.length > 0 ? (
          <Segment className="posts-segment" style={{ height: "82vh" }} raised>
            <Feed size="small">
              {notifications.map((notification) => (
                <>
                  {notification.type === "newLike" &&
                    notification.post !== null && (
                      <LikeNotification
                        key={notification._id}
                        notification={notification}
                      />
                    )}

                  {notification.type === "newComment" &&
                    notification.post !== null && (
                      <CommentNotification
                        key={notification._id}
                        notification={notification}
                      />
                    )}

                  {notification.type === "newFollower" && (
                    <FollowerNotification
                      key={notification._id}
                      notification={notification}
                      loggedUserFollowStats={loggedUserFollowStats}
                      setUserFollowStats={setUserFollowStats}
                    />
                  )}
                </>
              ))}
            </Feed>
          </Segment>
        ) : (
          <NoNotifications />
        )}
        <Divider hidden />
      </div>
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  try {
    const { token } = parseCookies(ctx);

    const res = await axios.get(`${baseUrl}/api/notifications`, {
      headers: { Authorization: token },
    });
    return { props: { notifications: res.data } };
  } catch (error) {
    return { props: { errorLoading: true } };
  }
};

export default Notifications;
