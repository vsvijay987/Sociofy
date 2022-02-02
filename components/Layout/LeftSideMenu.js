import React, { useState } from "react";
import { List, Icon, Image, Divider } from "semantic-ui-react";
import Link from "next/link";
import { useRouter } from "next/router";

const LeftSideMenu = ({
  user: {
    unreadNotification,
    name,
    _id,
    unreadMessage,
    profession,
    location,
    profilePicUrl,
  },
  pc = true,
}) => {
  const router = useRouter();
  const isActive = (route) => router.pathname === route;
  return (
    <>
      <List
        style={{ paddingTop: "1rem" }}
        size="big"
        verticalAlign="middle"
        selection
        style={{ width: "70%", margin: "auto" }}
      >
        <List.Item active style={{ textAlign: "center" }}>
          <Image src={profilePicUrl} size="small" circular />
          <Divider hidden />
          <List.Content>
            {
              <List.Header
                style={{ fontFamily: "Josefin Sans" }}
                content={name}
              />
            }
          </List.Content>
          <br />
          {profession && (
            <List.Content style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "Dongle", fontSize: "20px" }}>
                <Icon name="briefcase" size="small" />
                {profession}
              </div>
            </List.Content>
          )}

          {location && (
            <List.Content style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "Dongle", fontSize: "20px" }}>
                <Icon name="map marker alternate" size="small" />
                {location}
              </div>
            </List.Content>
          )}
        </List.Item>
        <br />
        <Link href="/">
          <List.Item active={isActive("/")}>
            <Icon
              name="home"
              size="large"
              style={{ color: isActive("/") ? "#B23B79" : "black" }}
            />
            <List.Content>
              {pc && (
                <List.Header
                  style={{ color: isActive("/") ? "#B23B79" : "black" }}
                  content="Home"
                />
              )}
            </List.Content>
          </List.Item>
        </Link>
        <br />

        <Link href="/messages">
          <List.Item
            active={isActive("/messages")}
            style={{
              position: "relative",
              display: "block",
            }}
          >
            {unreadMessage && (
              <span
                style={{
                  position: "absolute",
                  padding: "20px",

                  width: "30px",
                  textAlign: "center",

                  margin: "2px 2px",
                  borderRadius: "50%",
                  height: "10px",
                  width: "10px",
                  fontSize: "12px",
                  padding: "2px",
                  left: "22px",
                  top: "2px",
                  backgroundColor: "#B23B79",
                  color: "white",
                }}
              ></span>
            )}
            <Icon
              name="mail outline"
              size="large"
              style={{
                color:
                  (unreadMessage && "orange") ||
                  (isActive("/messages") ? "#B23B79" : "black"),
              }}
            />
            <List.Content>
              {pc && (
                <List.Header
                  style={{ color: isActive("/messages") ? "#B23B79" : "black" }}
                  content="Messages"
                />
              )}
            </List.Content>
          </List.Item>
        </Link>
        <br />
        <Link href="/notifications">
          <List.Item
            active={isActive("/notifications")}
            style={{
              position: "relative",
              display: "block",
            }}
          >
            {unreadNotification && (
              <span
                style={{
                  position: "absolute",
                  padding: "20px",

                  width: "30px",
                  textAlign: "center",

                  margin: "2px 2px",
                  borderRadius: "50%",
                  height: "10px",
                  width: "10px",
                  fontSize: "12px",
                  padding: "2px",
                  left: "22px",
                  top: "2px",
                  backgroundColor: "#B23B79",
                  color: "white",
                }}
              ></span>
            )}

            <Icon
              name="bell outline"
              size="large"
              style={{
                color: isActive("/notifications") ? "#B23B79" : "black",
              }}
            />
            <List.Content>
              {pc && (
                <List.Header
                  style={{
                    color: isActive("/notifications") ? "#B23B79" : "black",
                  }}
                  content="Notifications"
                />
              )}
            </List.Content>
          </List.Item>
        </Link>
        <br />
        <Link href={`/${_id}`}>
          <List.Item active={router.query.id === _id}>
            <Icon
              name="user"
              size="large"
              style={{
                color: router.query.id === _id ? "#B23B79" : "black",
              }}
            />
            <List.Content>
              {pc && (
                <List.Header
                  style={{
                    color: router.query.id === _id ? "#B23B79" : "black",
                  }}
                  content="Account"
                />
              )}
            </List.Content>
          </List.Item>
        </Link>
      </List>
    </>
  );
};

export default LeftSideMenu;
