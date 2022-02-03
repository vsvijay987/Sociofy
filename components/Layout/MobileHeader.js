import React from "react";
import { Menu, Container, Icon, Dropdown, Grid } from "semantic-ui-react";
import { useRouter } from "next/router";
import Link from "next/link";
import { logoutUser } from "../../utils/authUser";

function MobileHeader({
  user: { unreadNotification, email, _id, unreadMessage },
}) {
  const router = useRouter();
  const isActive = (route) => router.pathname === route;
  return (
    <>
      <Menu borderless fluid secondary style={{ boxShadow: "0 1px 1px rgb(0 0 0 / 0.2)" }}>
        <Container text>
          <Dropdown item icon="bars">
            <Dropdown.Menu>
              <Link href={`/${_id}`}>
                <Dropdown.Item active={isActive(`/${_id}`)}>
                  <Icon name="user" size="large" />
                  Account
                </Dropdown.Item>
              </Link>

              <Link href="/searchpage">
                <Dropdown.Item active={isActive("/searchpage")}>
                  <Icon name="search" size="large" />
                  Search
                </Dropdown.Item>
              </Link>

              <Dropdown.Item onClick={() => logoutUser(email)}>
                <Icon name="sign out alternate" size="large" />
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <div className="right floated six wide column">
            <div>
              <Grid>
                <Grid.Row>
                  <Link href="/notifications">
                    <Menu.Item
                      header
                      active={isActive("/notifications") || unreadNotification}
                    >
                      <Icon
                        name="bell outline"
                        size="large"
                        style={{
                          color: isActive("/notifications")
                            ? "#B23B79"
                            : "black",
                        }}
                      />
                    </Menu.Item>
                  </Link>
                  <Link href="/messages">
                    <Menu.Item
                      header
                      active={isActive("/messages") || unreadMessage}
                    >
                      <Icon
                        name="mail outline"
                        size="large"
                        style={{
                          color: isActive("/messages") ? "#B23B79" : "black",
                        }}
                      />
                    </Menu.Item>
                  </Link>

                  <Link href="/">
                    <Menu.Item>
                      <Icon
                        name="home"
                        size="large"
                        style={{ color: isActive("/") ? "#B23B79" : "black" }}
                      />
                    </Menu.Item>
                  </Link>
                </Grid.Row>
              </Grid>
            </div>
          </div>
        </Container>
      </Menu>
    </>
  );
}

export default MobileHeader;
