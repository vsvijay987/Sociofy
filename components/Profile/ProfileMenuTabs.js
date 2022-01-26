import React from "react";
import { Menu } from "semantic-ui-react";
import { createMedia } from "@artsy/fresnel";

const AppMedia = createMedia({
  breakpoints: { zero: 0, mobile: 700, tablet: 750, computer: 1080 },
});

const mediaStyles = AppMedia.createMediaStyle();
const { Media, MediaContextProvider } = AppMedia;

const ProfileMenuTabs = ({
  activeItem,
  handleItemClick,
  ownAccount,
  loggedUserFollowStats,
}) => {
  return (
    <>
      {ownAccount && (
        <>
          <style>{mediaStyles}</style>
          <MediaContextProvider>
            <Media greaterThanOrEqual="computer">
              <Menu style={{ justifyContent: "center" }} secondary>
                <Menu.Item
                  name="profile"
                  active={activeItem === "profile"}
                  onClick={() => handleItemClick("profile")}
                  className="font-link"
                  style={{
                    color: activeItem === "profile" && "#B23B79",
                    fontWeight: activeItem === "profile" && "bold",
                  }}
                />
                <Menu.Item
                  name={`${
                    loggedUserFollowStats.followers.length > 0
                      ? loggedUserFollowStats.followers.length
                      : 0
                  } followers`}
                  active={activeItem === "followers"}
                  onClick={() => handleItemClick("followers")}
                  className="font-link"
                  style={{
                    color: activeItem === "followers" && "#B23B79",
                    fontWeight: activeItem === "followers" && "bold",
                  }}
                />
                <Menu.Item
                  name={`${
                    loggedUserFollowStats.following.length > 0
                      ? loggedUserFollowStats.following.length
                      : 0
                  } following`}
                  active={activeItem === "following"}
                  onClick={() => handleItemClick("following")}
                  className="font-link"
                  style={{
                    color: activeItem === "following" && "#B23B79",
                    fontWeight: activeItem === "following" && "bold",
                  }}
                />
                <Menu.Item
                  name="Update Profile"
                  active={activeItem === "updateProfile"}
                  onClick={() => handleItemClick("updateProfile")}
                  className="font-link"
                  style={{
                    color: activeItem === "updateProfile" && "#B23B79",
                    fontWeight: activeItem === "updateProfile" && "bold",
                  }}
                />

                <Menu.Item
                  name="settings"
                  active={activeItem === "settings"}
                  onClick={() => handleItemClick("settings")}
                  className="font-link"
                  style={{
                    color: activeItem === "settings" && "#B23B79",
                    fontWeight: activeItem === "settings" && "bold",
                  }}
                />
              </Menu>
            </Media>
            <Media between={["tablet", "computer"]}>
              <Menu style={{ justifyContent: "center" }} secondary>
                <Menu.Item
                  name="profile"
                  active={activeItem === "profile"}
                  onClick={() => handleItemClick("profile")}
                  className="font-link"
                  style={{
                    color: activeItem === "profile" && "#B23B79",
                    fontWeight: activeItem === "profile" && "bold",
                  }}
                />
                <Menu.Item
                  name={`${
                    loggedUserFollowStats.followers.length > 0
                      ? loggedUserFollowStats.followers.length
                      : 0
                  } followers`}
                  active={activeItem === "followers"}
                  onClick={() => handleItemClick("followers")}
                  className="font-link"
                  style={{
                    color: activeItem === "followers" && "#B23B79",
                    fontWeight: activeItem === "followers" && "bold",
                  }}
                />
                <Menu.Item
                  name={`${
                    loggedUserFollowStats.following.length > 0
                      ? loggedUserFollowStats.following.length
                      : 0
                  } following`}
                  active={activeItem === "following"}
                  onClick={() => handleItemClick("following")}
                  className="font-link"
                  style={{
                    color: activeItem === "following" && "#B23B79",
                    fontWeight: activeItem === "following" && "bold",
                  }}
                />
                <Menu.Item
                  name="Update Profile"
                  active={activeItem === "updateProfile"}
                  onClick={() => handleItemClick("updateProfile")}
                  className="font-link"
                  style={{
                    color: activeItem === "updateProfile" && "#B23B79",
                    fontWeight: activeItem === "updateProfile" && "bold",
                  }}
                />

                <Menu.Item
                  name="settings"
                  active={activeItem === "settings"}
                  onClick={() => handleItemClick("settings")}
                  className="font-link"
                  style={{
                    color: activeItem === "settings" && "#B23B79",
                    fontWeight: activeItem === "settings" && "bold",
                  }}
                />
              </Menu>
            </Media>
            <Media between={["zero", "tablet"]}>
              <Menu style={{ justifyContent: "center" }} secondary>
                <Menu.Item
                  name="profile"
                  active={activeItem === "profile"}
                  onClick={() => handleItemClick("profile")}
                  className="font-link"
                  style={{
                    color: activeItem === "profile" && "#B23B79",
                    fontWeight: activeItem === "profile" && "bold",
                  }}
                />
                <Menu.Item
                  name={`${
                    loggedUserFollowStats.followers.length > 0
                      ? loggedUserFollowStats.followers.length
                      : 0
                  } followers`}
                  active={activeItem === "followers"}
                  onClick={() => handleItemClick("followers")}
                  className="font-link"
                  style={{
                    color: activeItem === "followers" && "#B23B79",
                    fontWeight: activeItem === "followers" && "bold",
                  }}
                />
                <Menu.Item
                  name={`${
                    loggedUserFollowStats.following.length > 0
                      ? loggedUserFollowStats.following.length
                      : 0
                  } following`}
                  active={activeItem === "following"}
                  onClick={() => handleItemClick("following")}
                  className="font-link"
                  style={{
                    color: activeItem === "following" && "#B23B79",
                    fontWeight: activeItem === "following" && "bold",
                  }}
                />
              </Menu>
              <Menu style={{ justifyContent: "center" }} secondary>
                <Menu.Item
                  name="Update Profile"
                  active={activeItem === "updateProfile"}
                  onClick={() => handleItemClick("updateProfile")}
                  className="font-link"
                  style={{
                    color: activeItem === "updateProfile" && "#B23B79",
                    fontWeight: activeItem === "updateProfile" && "bold",
                  }}
                />

                <Menu.Item
                  name="settings"
                  active={activeItem === "settings"}
                  onClick={() => handleItemClick("settings")}
                  className="font-link"
                  style={{
                    color: activeItem === "settings" && "#B23B79",
                    fontWeight: activeItem === "settings" && "bold",
                  }}
                />
              </Menu>
            </Media>
          </MediaContextProvider>
        </>
      )}
    </>
  );
};

export default ProfileMenuTabs;
