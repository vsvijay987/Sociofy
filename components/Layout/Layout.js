import React from "react";
import HeadTags from "./HeadTags";
import { Container } from "semantic-ui-react";
import nprogress from "nprogress";
import Router, { useRouter } from "next/router";

function Layout({ children }) {
  Router.onRouteChangeStart = () => nprogress.start();
  Router.onRouteChangeComplete = () => nprogress.done();
  Router.onRouteChangeError = () => nprogress.done();
  return (
    <>
      <HeadTags />
      <Container style={{ paddingTop: "1rem" }} text>
        {children}
      </Container>
    </>
  );
}

export default Layout;
