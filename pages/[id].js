import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import cookie from "js-cookie";
import { parseCookies } from "nookies";
import { Segment, Divider } from "semantic-ui-react";

import baseUrl from "../utils/baseUrl";
import { Grid } from "semantic-ui-react";
import { NoProfilePosts, NoProfile } from "../components/Layout/NoData";
import ProfileMenuTabs from "../components/Profile/ProfileMenuTabs";
import ProfileHeader from "../components/Profile/ProfileHeader";
import CardPost from "../components/Post/CardPost";
import Followers from "../components/Profile/Followers";
import Following from "../components/Profile/Following";
import UpdateProfile from "../components/Profile/UpdateProfile";
import Settings from "../components/Profile/Settings";
import { PlaceHolderPosts } from "../components/Layout/PlaceHolderGroup";
import { PostDeleteToastr } from "../components/Layout/Toastr";

const ProfilePage = ({
  errorLoading,
  followersLength,
  followingLength,
  user,
  userFollowStats,
  userProfile,
}) => {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showToastr, setShowToastr] = useState(false);
  const [activeItem, setActiveItem] = useState("profile");

  const handleItemClick = (clickedTab) => setActiveItem(clickedTab);
  const [loggedUserFollowStats, setUserFollowStats] = useState(userFollowStats);
  const ownAccount = userProfile._id === user._id;

  if (errorLoading) return <NoProfile />;

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);

      try {
        const { id } = router.query;
        const res = await axios.get(`${baseUrl}/api/profile/posts/${id}`, {
          headers: { Authorization: cookie.get("token") },
        });

        setPosts(res.data);
      } catch (error) {
        alert("Error Loading Posts");
      }

      setLoading(false);
    };
    getPosts();
  }, [router.query.id]);

  useEffect(() => {
    showToastr && setTimeout(() => setShowToastr(false), 3000);
  }, [showToastr]);

  return (
    <>
      {showToastr && <PostDeleteToastr />}
      <ProfileMenuTabs
        activeItem={activeItem}
        handleItemClick={handleItemClick}
        followersLength={followersLength}
        followingLength={followingLength}
        ownAccount={ownAccount}
        loggedUserFollowStats={loggedUserFollowStats}
      />

      <Segment className="posts-segment" style ={{height:!ownAccount && "85vh" }}>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column>
              {activeItem === "profile" && (
                <>
                  <ProfileHeader
                    userProfile={userProfile}
                    ownAccount={ownAccount}
                    loggedUserFollowStats={loggedUserFollowStats}
                    setUserFollowStats={setUserFollowStats}
                  />

                  {loading ? (
                    <PlaceHolderPosts />
                  ) : posts.length > 0 ? (
                    posts.map((post) => (
                      <CardPost
                        key={post._id}
                        post={post}
                        user={user}
                        setPosts={setPosts}
                        setShowToastr={setShowToastr}
                      />
                    ))
                  ) : (
                    <NoProfilePosts />
                  )}
                </>
              )}

              {activeItem === "followers" && (
                <Followers
                  user={user}
                  loggedUserFollowStats={loggedUserFollowStats}
                  setUserFollowStats={setUserFollowStats}
                  userProfileId={userProfile._id}
                />
              )}

              {activeItem === "following" && (
                <Following
                  user={user}
                  loggedUserFollowStats={loggedUserFollowStats}
                  setUserFollowStats={setUserFollowStats}
                  userProfileId={userProfile._id}
                />
              )}

              {activeItem === "updateProfile" && (
                <UpdateProfile UserProfile={userProfile} />
              )}

              {activeItem === "settings" && (
                <Settings newMessagePopup={user.newMessagePopup} />
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
};

ProfilePage.getInitialProps = async (ctx) => {
  try {
    const { id } = ctx.query;
    const { token } = parseCookies(ctx);

    const res = await axios.get(`${baseUrl}/api/profile/${id}`, {
      headers: { Authorization: token },
    });

    const { userProfile, followersLength, followingLength } = res.data;

    return { userProfile, followersLength, followingLength };
  } catch (error) {
    return { errorLoading: true };
  }
};

export default ProfilePage;
