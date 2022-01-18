import React, {useState} from "react";
import { List, Icon, Image, Divider } from "semantic-ui-react";
import Link from "next/link";
import { useRouter } from "next/router";

const LeftSideMenu = ({
  user: {
    unreadNotification,
    name,
    email,
    unreadMessage,
    profession,
    location,
    profilePicUrl,
  },pc=true
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
              {
                <List.Description
                  style={{ fontFamily: "Josefin Sans", fontSize: "1rem" }}
                  content={profession}
                />
              }
            </List.Content>
          )}

          {location && (
            <List.Content style={{ textAlign: "center" }}>
              {
                <List.Description
                  style={{ fontFamily: "Josefin Sans", fontSize: "1rem" }}
                  content={location}
                />
              }
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
              {pc&&
                <List.Header
                  style={{ color: isActive("/") ? "#B23B79" : "black" }}
                  content="Home"
                />
              }
            </List.Content>
          </List.Item>
        </Link>
        <br />

        <Link href="/messages">
          <List.Item active={isActive("/messages")}>
            <Icon
              name={unreadMessage ? "hand point right" : "mail outline"}
              size="large"
              style={{
                color:
                  (unreadMessage && "orange") ||
                  (isActive("/messages") ? "#B23B79" : "black"),
              }}
            />
            <List.Content>
              {pc &&
                <List.Header
                  style={{ color: isActive("/messages") ? "#B23B79" : "black" }}
                  content="Messages"
                />
              }
            </List.Content>
          </List.Item>
        </Link>
        <br />
        <Link href="/notifications">
          <List.Item active={isActive("/notifications")}>
            <Icon
              name={unreadNotification ? "hand point right" : "bell outline"}
              size="large"
              style={{
                color:
                  (unreadNotification && "orange") ||
                  (isActive("/notifications") ? "#B23B79" : "black"),
              }}
            />
            <List.Content>
              {pc &&
                <List.Header
                  style={{
                    color: isActive("/notifications") ? "#B23B79" : "black",
                  }}
                  content="Notifications"
                />
              }
            </List.Content>
          </List.Item>
        </Link>
        <br />
        <Link href={`/${email}`}>
          <List.Item active={router.query.email === email}>
            <Icon
              name="user"
              size="large"
              style={{
                color: router.query.email === email ? "#B23B79" : "black",
              }}
            />
            <List.Content>
              {pc &&
                <List.Header
                  style={{
                    color: router.query.email === email ? "#B23B79" : "black",
                  }}
                  content="Account"
                />
              }
            </List.Content>
          </List.Item>
        </Link>
      </List>
    </>
  );
};

export default LeftSideMenu;
