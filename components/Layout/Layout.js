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
import MobileHeader  from "./MobileHeader";
import { createMedia } from "@artsy/fresnel";
const AppMedia = createMedia({
  breakpoints: { zero: 0, mobile: 700, tablet: 750, computer: 1080 }
});

const mediaStyles = AppMedia.createMediaStyle();
const { Media, MediaContextProvider } = AppMedia;

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
         <style>{mediaStyles}</style>
         <MediaContextProvider>
          <div style={{ marginLeft: "1rem", marginRight: "1rem" }}>
          <Media greaterThanOrEqual="computer">
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
                      <LeftSideMenu user={user} pc/>
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
            </Media>
          <Media between={["tablet", "computer"]}>
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
                      <LeftSideMenu user={user} pc/>
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
            </Media>
            <Media between={["mobile", "tablet"]}>
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
                      <LeftSideMenu user={user} pc={false}/>
                    </div>
                  </Grid.Column>

                  <Grid.Column width={12}>
                    <div context={contextRef}>{children}</div>
                  </Grid.Column>

                  
                </Grid.Row>
              </Grid>
            </Ref>
            </Media>
            <Media between={["zero", "computer"]}>
            <Ref innerRef={contextRef}>
              <Grid>
                <Grid.Row style={{ height: "80px" }}>
                  <Grid.Column>
                    <Sticky context={contextRef}>
                      <MobileHeader user={user} />
                    </Sticky>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Column width={16}>
                    <div context={contextRef}>{children}</div>
                  </Grid.Column>

              </Grid>
            </Ref>
            </Media>
          </div>
          </MediaContextProvider>
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
