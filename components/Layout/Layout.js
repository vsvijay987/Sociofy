import React, { createRef } from "react";
import HeadTags from "./HeadTags";
import {
  Container,
  Visibility,
  Grid,
  Sticky,
  Ref,
  Divider,
  Segment,
  Card,
} from "semantic-ui-react";
import nprogress from "nprogress";
import Router, { useRouter } from "next/router";
import LeftSideMenu from "./LeftSideMenu";
import RightSideMenu from "./RightSideMenu";
import Navbar from "./Navbar";

const Layout = ({ children, user }) => {
  const contextRef = createRef();

  Router.onRouteChangeStart = () => nprogress.start();
  Router.onRouteChangeComplete = () => nprogress.done();
  Router.onRouteChangeError = () => nprogress.done();
  return (
    <>
      <HeadTags />
      {user ? (
        <>
          <div style={{ marginLeft: "1rem", marginRight: "1rem" }}>
            <Ref innerRef={contextRef}>
              <Grid>
                <Grid.Row style={{ height: "80px" }}>
                  <Grid.Column>
                    <Sticky context={contextRef}>
                      <Navbar user={user} />
                    </Sticky>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column floated="left" width={4} >
                    <div context={contextRef} style={{position: 'sticky', top: "80px"}}>
                      <LeftSideMenu user={user} />
                    </div>
                  </Grid.Column>

                  <Grid.Column width={7}>
                    <div context={contextRef}>{children}</div>
                  </Grid.Column>

                  <Grid.Column floated="left" width={5}>
                    <div context={contextRef} style={{position: 'sticky', top: "80px"}}>
                      <Segment basic>
                        <RightSideMenu />
                      </Segment>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Ref>
          </div>
        </>
      ) : (
        <>
          <Container fluid style={{ paddingTop: "1rem" }}>
            {children}
          </Container>
        </>
      )}
    </>
  );
};

export default Layout;
