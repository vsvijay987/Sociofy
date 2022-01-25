import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Message,
  Segment,
  Grid,
  Divider,
} from "semantic-ui-react";
import baseUrl from "../../utils/baseUrl";
import catchErrors from "../../utils/catchErrors";
import axios from "axios";
import { createMedia } from "@artsy/fresnel";
const AppMedia = createMedia({
  breakpoints: { zero: 0, mobile: 549, tablet: 850, computer: 1080 }
});
const mediaStyles = AppMedia.createMediaStyle();
const { Media, MediaContextProvider } = AppMedia;
const ResetPage = () => {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  const [emailChecked, setEmailChecked] = useState(false);

  const [loading, setLoading] = useState(false);

  const resetPassword = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await axios.post(`${baseUrl}/api/reset`, { email });

      setEmailChecked(true);
    } catch (error) {
      setErrorMsg(catchErrors(error));
    }

    setLoading(false);
  };

  useEffect(() => {
    errorMsg !== null && setTimeout(() => setErrorMsg(null), 3000);
  }, [errorMsg]);

  return (
    <>
<style>{mediaStyles}</style>
<MediaContextProvider>
<Media greaterThanOrEqual="computer">
<div
        className="font-link"
        style={{ textAlign: "center", fontSize: "50px", paddingBottom: "20px" }}
      >
        <p>Sociofy</p>
      </div>
      <Grid centered>
        <Grid.Row columns={1}>
          <Grid.Column textAlign="center" width={6}>
            <Form
              loading={loading}
              onSubmit={resetPassword}
              error={errorMsg !== null}
            >
              <Message error header="Oops!" content={errorMsg} />

              <Segment>
                <div>
                  <img src="https://res.cloudinary.com/codeamphi/image/upload/v1640798021/sociofy_ylysdp.png" />
                </div>
                {emailChecked ? (
                  <div className="font-link" style={{ fontSize: "20px" }}>
                    <p>Please check your inbox for further instructions</p>
                  </div>
                ) : (
                  <div className="font-link" style={{ fontSize: "20px" }}>
                    <p>RESET PASSWORD</p>
                  </div>
                )}
                <Divider hidden />
                <Form.Input
                  fluid
                  icon="mail outline"
                  type="email"
                  iconPosition="left"
                  placeholder="Enter email address"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
                <Divider hidden />

                <Button
                  disabled={loading || email.length === 0}
                  icon="configure"
                  type="submit"
                  style={{ backgroundColor: "#B23B79", color: "white" }}
                  content="Submit"
                />
              </Segment>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div
        className="font-link"
        style={{ textAlign: "center", fontSize: "50px", padding: "20px" }}
      >
        <p>Be Social, Go Social</p>
      </div>
</Media>
<Media between={["tablet", "computer"]}>
<div
        className="font-link"
        style={{ textAlign: "center", fontSize: "50px", paddingBottom: "20px" }}
      >
        <p>Sociofy</p>
      </div>
      <Grid centered>
        <Grid.Row columns={1}>
          <Grid.Column textAlign="center" width={6}>
            <Form
              loading={loading}
              onSubmit={resetPassword}
              error={errorMsg !== null}
            >
              <Message error header="Oops!" content={errorMsg} />

              <Segment>
                <div>
                  <img src="https://res.cloudinary.com/codeamphi/image/upload/v1640798021/sociofy_ylysdp.png" />
                </div>
                {emailChecked ? (
                  <div className="font-link" style={{ fontSize: "20px" }}>
                    <p>Please check your inbox for further instructions</p>
                  </div>
                ) : (
                  <div className="font-link" style={{ fontSize: "20px" }}>
                    <p>RESET PASSWORD</p>
                  </div>
                )}
                <Divider hidden />
                <Form.Input
                  fluid
                  icon="mail outline"
                  type="email"
                  iconPosition="left"
                  placeholder="Enter email address"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
                <Divider hidden />

                <Button
                  disabled={loading || email.length === 0}
                  icon="configure"
                  type="submit"
                  style={{ backgroundColor: "#B23B79", color: "white" }}
                  content="Submit"
                />
              </Segment>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div
        className="font-link"
        style={{ textAlign: "center", fontSize: "50px", padding: "20px" }}
      >
        <p>Be Social, Go Social</p>
      </div>
     </Media>
<Media between={["zero", "tablet"]}>
<div
        className="font-link"
        style={{ textAlign: "center", fontSize: "50px", paddingBottom: "20px" }}
      >
        <p>Sociofy</p>
      </div>
      <Grid centered>
        <Grid.Row columns={1}>
          <Grid.Column textAlign="center" width={16}>
            <Form
              loading={loading}
              onSubmit={resetPassword}
              error={errorMsg !== null}
            >
              <Message error header="Oops!" content={errorMsg} />

              <Segment>
                <div>
                  <img src="https://res.cloudinary.com/codeamphi/image/upload/v1640798021/sociofy_ylysdp.png" />
                </div>
                {emailChecked ? (
                  <div className="font-link" style={{ fontSize: "20px" }}>
                    <p>Please check your inbox for further instructions</p>
                  </div>
                ) : (
                  <div className="font-link" style={{ fontSize: "20px" }}>
                    <p>RESET PASSWORD</p>
                  </div>
                )}
                <Divider hidden />
                <Form.Input
                  fluid
                  icon="mail outline"
                  type="email"
                  iconPosition="left"
                  placeholder="Enter email address"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
                <Divider hidden />

                <Button
                  disabled={loading || email.length === 0}
                  icon="configure"
                  type="submit"
                  style={{ backgroundColor: "#B23B79", color: "white" }}
                  content="Submit"
                />
              </Segment>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div
        className="font-link"
        style={{ textAlign: "center", fontSize: "50px", padding: "20px" }}
      >
        <p>Be Social, Go Social</p>
      </div>
     </Media>
</MediaContextProvider>
  
    </>
  );
};

export default ResetPage;
