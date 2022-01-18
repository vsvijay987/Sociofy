import React from "react";
import { Menu,Grid } from "semantic-ui-react";

const ProfileMenuTabs = ({
  activeItem,
  handleItemClick,
  followersLength,
  followingLength,
  ownAccount,
  loggedUserFollowStats,
}) => {
  return (
    <>
      {ownAccount && (
        <>
        <Menu style={{ justifyContent: "center" }}  secondary>
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
        </>
      )}
    </>
  );
};

export default ProfileMenuTabs;
