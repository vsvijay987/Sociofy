import React from 'react'
import {Menu,Container,Icon,Dropdown} from 'semantic-ui-react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import {logoutUser} from '../../utils/authUser'

function MobileHeader({  user: {
    unreadNotification,
    name,
    email,
    unreadMessage,
    profession,
    location,
    profilePicUrl,
  },}  
){

     const router=useRouter()
     const isActive = (route) => router.pathname === route;
    return (
    
        <>
      <Menu fluid borderless>
        <Container text>
          <Link href="/">
            <Menu.Item header active={isActive("/")}>
              <Icon name="home" size="large" />
            </Menu.Item>
          </Link>

          <Link href="/messages">
            <Menu.Item header active={isActive("/messages") || unreadMessage}>
              <Icon
                name={unreadMessage ? "hand point right" : "mail outline"}
                size="large"
              />
            </Menu.Item>
          </Link>

          <Link href="/notifications">
            <Menu.Item header active={isActive("/notifications") || unreadNotification}>
              <Icon
                name={unreadNotification ? "hand point right" : "bell outline"}
                size="large"
              />
            </Menu.Item>
          </Link>

          <Dropdown item icon="bars" direction="left">
            <Dropdown.Menu>
              <Link href={`/${email}`}>
                <Dropdown.Item active={isActive(`/${name}`)}>
                  <Icon name="user" size="large" />
                  Account
                </Dropdown.Item>
              </Link>

              <Link href="/searchpage">
                <Dropdown.Item active={isActive("/search")}>
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
        </Container>
      </Menu>
    </>
    
    )
};

export default MobileHeader