import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Message,
  Segment,
  Divider,
  Grid,
  Image,
} from "semantic-ui-react";
import Link from "next/link";
import { loginUser } from "../utils/authUser";
import cookie from "js-cookie";

import { createMedia } from "@artsy/fresnel";
const AppMedia = createMedia({
  breakpoints: { zero: 0, mobile: 549, tablet: 850, computer: 1080 }
});

const mediaStyles = AppMedia.createMediaStyle();
const { Media, MediaContextProvider } = AppMedia;


const login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const isUser = Object.values({ email, password }).every((item) =>
      Boolean(item)
    );
    isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await loginUser(user, setErrorMsg, setFormLoading);
  };
  
  useEffect(() => {
    document.title = "Welcome Back";
    const userEmail = cookie.get("userEmail");
    if (userEmail) setUser((prev) => ({ ...prev, email: userEmail }));
  }, []);

  return (
    <>
         <style>{mediaStyles}</style>
         <MediaContextProvider>
          <div style={{ marginLeft: "1rem", marginRight: "1rem" }}>
          <Media greaterThanOrEqual="computer">
          <>
      <div
        className="font-link"
        style={{ textAlign: "center", fontSize: "50px", paddingBottom: "20px" }}
      >
        <p>Sociofy</p>
      </div>
      <Grid centered>
        <Grid.Row columns={2}>
          <Grid.Column width={6}>
            <Image src="https://res.cloudinary.com/codeamphi/image/upload/v1640797704/login_wmtbem.png" />
          </Grid.Column>
          <Grid.Column textAlign="center" width={6}>
            <Form
              loading={formLoading}
              error={errorMsg !== null}
              onSubmit={handleSubmit}
            >
              <Message
                error
                header="Oops!"
                content={errorMsg}
                onDismiss={() => setErrorMsg(null)}
              />
              <Segment>
                <div>
                  <img src="https://res.cloudinary.com/codeamphi/image/upload/v1640798021/sociofy_ylysdp.png" />
                </div>
                <div className="font-link" style={{ fontSize: "20px" }}>
                  <p>WELCOME BACK</p>
                </div>
                <div className="font-link" style={{ fontSize: "15px" }}>
                  <p>Login</p>
                </div>

                <Form.Input
                  required
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  fluid
                  icon="envelope"
                  iconPosition="left"
                  type="email"
                />

                <Form.Input
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  fluid
                  icon={{
                    name: "eye",
                    circular: true,
                    link: true,
                    onClick: () => setShowPassword(!showPassword),
                  }}
                  iconPosition="left"
                  type={showPassword ? "text" : "password"}
                  required
                />

                <Divider hidden />
                <Button
                  icon="signup"
                  content="Login"
                  type="submit"
                  style={{ backgroundColor: "#B23B79", color: "white", fontFamily: 'Josefin Sans' }}
                  disabled={submitDisabled}
                />
                <Divider hidden />
                <div className="font-link" style={{ fontSize: "15px" }}>
                  <p>
                    Don't remember password ?{" "}
                    <Link href="/reset">Forget Password</Link>
                  </p>
                </div>
                <Divider hidden />
                <div className="font-link" style={{ fontSize: "15px" }}>
                  <p>
                    Not a member ? <Link href="/signup">Sign Up here</Link>
                  </p>
                </div>
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
    </>
            </Media>
          <Media between={["zero", "computer"]}>
          <>
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
              loading={formLoading}
              error={errorMsg !== null}
              onSubmit={handleSubmit}
            >
              <Message
                error
                header="Oops!"
                content={errorMsg}
                onDismiss={() => setErrorMsg(null)}
              />
              <Segment>
                <div>
                  <img src="https://res.cloudinary.com/codeamphi/image/upload/v1640798021/sociofy_ylysdp.png" />
                </div>
                <div className="font-link" style={{ fontSize: "20px" }}>
                  <p>WELCOME BACK</p>
                </div>
                <div className="font-link" style={{ fontSize: "15px" }}>
                  <p>Login</p>
                </div>

                <Form.Input
                  required
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  fluid
                  icon="envelope"
                  iconPosition="left"
                  type="email"
                />

                <Form.Input
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  fluid
                  icon={{
                    name: "eye",
                    circular: true,
                    link: true,
                    onClick: () => setShowPassword(!showPassword),
                  }}
                  iconPosition="left"
                  type={showPassword ? "text" : "password"}
                  required
                />

                <Divider hidden />
                <Button
                  icon="signup"
                  content="Login"
                  type="submit"
                  style={{ backgroundColor: "#B23B79", color: "white", fontFamily: 'Josefin Sans' }}
                  disabled={submitDisabled}
                />
                <Divider hidden />
                <div className="font-link" style={{ fontSize: "15px" }}>
                  <p>
                    Don't remember password ?{" "}
                    <Link href="/reset">Forget Password</Link>
                  </p>
                </div>
                <Divider hidden />
                <div className="font-link" style={{ fontSize: "15px" }}>
                  <p>
                    Not a member ? <Link href="/signup">Sign Up here</Link>
                  </p>
                </div>
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
    </>
           
         
            </Media>
          
          </div>
          </MediaContextProvider>
        </>
    
  );
};

export default login;
