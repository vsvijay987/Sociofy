import React, { useState } from "react";
import {
  Segment,
  Image,
  Grid,
  Divider,
  Header,
  Button,
  List,
} from "semantic-ui-react";
import { followUser, unfollowUser } from "../../utils/profileActions";

const ProfileHeader = ({
  userProfile,
  ownAccount,
  loggedUserFollowStats,
  setUserFollowStats,
}) => {
  const [loading, setLoading] = useState(false);

  const isFollowing =
    loggedUserFollowStats.following.length > 0 &&
    loggedUserFollowStats.following.filter(
      (following) => following.user === userProfile._id
    ).length > 0;
  return (
    <>
      <Segment>
        <Grid stackable>
          <Grid.Column width={11}>
            <Grid.Row>
              <Header
                as="h2"
                content={userProfile.name}
                style={{ marginTop: "5px", fontFamily: "Josefin Sans",color: "#B23B79" }}
              />
            </Grid.Row>
            <br/>

            {userProfile.profession && (
              <Grid.Row stretched>
                <p style={{fontSize: "20px"}} className="post-font">{userProfile.profession}</p>

              </Grid.Row>
            )}
            {userProfile.location && (
              <Grid.Row stretched>
                <List>

                <List.Item>
                  {/* <List.Icon name="pin" style={{ color: "#B23B79" }} /> */}
                  <List.Content
                    style={{ fontFamily: "Dongle", fontSize: "20px" }}
                    content={userProfile.location}
                  />
                </List.Item>
                </List>

                <Divider hidden />
              </Grid.Row>
            )}

            <Grid.Row>
              {userProfile.social ? (
                <List>
                  {userProfile.social.linkedin && (
                    <List.Item>
                      <List.Icon name="linkedin" style={{ color: "#0077b5" }} />
                      <List.Content
                        style={{ color: "blue", fontFamily: "Josefin Sans" }}
                        content={userProfile.social.linkedin}
                      />
                    </List.Item>
                  )}

                  {userProfile.social.twitter && (
                    <List.Item>
                      <List.Icon name="twitter" style={{ color: "#55acee" }} />
                      <List.Content
                        style={{ color: "blue", fontFamily: "Josefin Sans" }}
                        content={userProfile.social.twitter}
                      />
                    </List.Item>
                  )}
                </List>
              ) : (
                <p style={{ fontFamily: "Josefin Sans" }}>No Social Media Links </p>
              )}
            </Grid.Row>
          </Grid.Column>

          <Grid.Column width={5} stretched style={{ textAlign: "center" }}>
            <Grid.Row>
              <Image size="medium" avatar src={userProfile.profilePicUrl} />
            </Grid.Row>
            <br />

            {!ownAccount && (
              <Button
                compact
                loading={loading}
                disabled={loading}
                content={isFollowing ? "Following" : "Follow"}
                icon={isFollowing ? "check circle" : "add user"}
                color={isFollowing ? "instagram" : "twitter"}
                onClick={async () => {
                  setLoading(true);
                  isFollowing
                    ? await unfollowUser(userProfile._id, setUserFollowStats)
                    : await followUser(userProfile._id, setUserFollowStats);
                  setLoading(false);
                }}
              />
            )}
          </Grid.Column>
        </Grid>
      </Segment>
    </>
  );
};

export default ProfileHeader;
