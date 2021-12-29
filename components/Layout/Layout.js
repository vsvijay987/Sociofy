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
      <Container fluid style={{ paddingTop: "1rem" }}>
        {children}
      </Container>
    </>
  );
}

export default Layout;
