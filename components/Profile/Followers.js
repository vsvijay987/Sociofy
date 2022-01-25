import React, { useState, useEffect } from "react";
import { Button, Image, List } from "semantic-ui-react";
import cookie from "js-cookie";
import axios from "axios";

import Spinner from "../Layout/Spinner";
import { NoFollowData } from "../Layout/NoData";
import { followUser, unfollowUser } from "../../utils/profileActions";
import baseUrl from "../../utils/baseUrl";

const Followers = ({
  user,
  loggedUserFollowStats,
  setUserFollowStats,
  userProfileId,
}) => {
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [followLoading, setFollowLoading] = useState(false);

  useEffect(() => {
    const getFollowers = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${baseUrl}/api/profile/followers/${userProfileId}`,
          {
            headers: { Authorization: cookie.get("token") },
          }
        );

        setFollowers(res.data);
      } catch (error) {
        alert("Error Loading Followers");
      }
      setLoading(false);
    };

    getFollowers();
  }, []);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : followers.length > 0 ? (
        followers.map((profileFollower) => {
          const isFollowing =
            loggedUserFollowStats.following.length > 0 &&
            loggedUserFollowStats.following.filter(
              (following) => following.user === profileFollower.user._id
            ).length > 0;

          return (
            <List key={profileFollower.user._id} divided verticalAlign="middle">
              <List.Item>
                <List.Content floated="right">
                  {profileFollower.user._id !== user._id && (
                    <Button
                      style={{ fontFamily: "Josefin Sans" }}
                      color={isFollowing ? "instagram" : "twitter"}
                      icon={isFollowing ? "check" : "add user"}
                      content={isFollowing ? "Following" : "Follow"}
                      disabled={followLoading}
                      onClick={async () => {
                        setFollowLoading(true);

                        isFollowing
                          ? await unfollowUser(
                              profileFollower.user._id,
                              setUserFollowStats
                            )
                          : await followUser(
                              profileFollower.user._id,
                              setUserFollowStats
                            );

                        setFollowLoading(false);
                      }}
                    />
                  )}
                </List.Content>
                <Image avatar src={profileFollower.user.profilePicUrl} />
                <List.Content
                  as="a"
                  href={`/${profileFollower.user._id}`}
                  style={{ fontFamily: "Josefin Sans" }}
                >
                  {profileFollower.user.name}
                </List.Content>
              </List.Item>
            </List>
          );
        })
      ) : (
        <NoFollowData followersComponent={true} />
      )}
    </>
  );
};

export default Followers;
