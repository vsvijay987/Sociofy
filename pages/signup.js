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
import Router from "next/router";
import { registerUser } from "../utils/authUser";
import { createMedia } from "@artsy/fresnel";
const AppMedia = createMedia({
  breakpoints: { zero: 0, mobile: 549, tablet: 850, computer: 1080 },
});

const mediaStyles = AppMedia.createMediaStyle();
const { Media, MediaContextProvider } = AppMedia;

const signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = user;
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  useEffect(() => {
    const isUser = Object.values({
      name,
      email,
      password,
      confirmPassword,
    }).every((item) => Boolean(item));
    isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    let res = await registerUser(user, setErrorMsg, setFormLoading);
   
    if (res && res.status === 200) {
      setRegisterSuccess(true);
      setTimeout(() => {
        Router.push("/login");
      }, 2000);
    }
    console.log("register response ", res);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <style>{mediaStyles}</style>
      <MediaContextProvider>
        <Media greaterThanOrEqual="computer">
          <div
            className="font-link"
            style={{
              textAlign: "center",
              fontSize: "50px",
              paddingBottom: "20px",
            }}
          >
            <p>Sociofy</p>
          </div>
          <Grid centered>
            <Grid.Row columns={2}>
              <Grid.Column width={6}>
                <Image src="https://res.cloudinary.com/codeamphi/image/upload/v1640797702/signup_vb3brx.png" />
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
                      <p>CREATE NEW ACCOUNT</p>
                    </div>
                    <Form.Input
                      required
                      placeholder="Name"
                      name="name"
                      value={name}
                      onChange={handleChange}
                      fluid
                      icon="user"
                      iconPosition="left"
                    />

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
                    <Form.Input
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={handleChange}
                      fluid
                      icon={{
                        name: "eye",
                        circular: true,
                        link: true,
                        onClick: () =>
                          setShowConfirmPassword(!showConfirmPassword),
                      }}
                      iconPosition="left"
                      type={showConfirmPassword ? "text" : "password"}
                      required
                    />
                    <Divider hidden />
                    <Button
                      icon="signup"
                      content="Signup"
                      type="submit"
                      style={{
                        backgroundColor: "#B23B79",
                        color: "white",
                        fontFamily: "Josefin Sans",
                      }}
                      disabled={submitDisabled}
                    />
                    <Divider hidden />
                    <div className="font-link" style={{ fontSize: "15px" }}>
                      <p>
                        Already have an account,{" "}
                        <Link href="/login">Login here</Link>
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
        </Media>
        <Media between={["tablet", "computer"]}>
          <div
            className="font-link"
            style={{
              textAlign: "center",
              fontSize: "50px",
              paddingBottom: "20px",
            }}
          >
            <p>Sociofy</p>
          </div>
          <Grid centered>
            <Grid.Row columns={2}>
              <Grid.Column width={6}>
                <Image src="https://res.cloudinary.com/codeamphi/image/upload/v1640797702/signup_vb3brx.png" />
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
                      <p>CREATE NEW ACCOUNT</p>
                    </div>
                    <Form.Input
                      required
                      placeholder="Name"
                      name="name"
                      value={name}
                      onChange={handleChange}
                      fluid
                      icon="user"
                      iconPosition="left"
                    />

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
                    <Form.Input
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={handleChange}
                      fluid
                      icon={{
                        name: "eye",
                        circular: true,
                        link: true,
                        onClick: () =>
                          setShowConfirmPassword(!showConfirmPassword),
                      }}
                      iconPosition="left"
                      type={showConfirmPassword ? "text" : "password"}
                      required
                    />
                    <Divider hidden />
                    <Button
                      icon="signup"
                      content="Signup"
                      type="submit"
                      style={{
                        backgroundColor: "#B23B79",
                        color: "white",
                        fontFamily: "Josefin Sans",
                      }}
                      disabled={submitDisabled}
                    />
                    <Divider hidden />
                    <div className="font-link" style={{ fontSize: "15px" }}>
                      <p>
                        Already have an account,{" "}
                        <Link href="/login">Login here</Link>
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
        </Media>
        <Media between={["zero", "tablet"]}>
          <Grid centered>
            <Grid.Row>
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
                      <p>CREATE NEW ACCOUNT</p>
                    </div>
                    <Form.Input
                      required
                      placeholder="Name"
                      name="name"
                      value={name}
                      onChange={handleChange}
                      fluid
                      icon="user"
                      iconPosition="left"
                    />

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
                    <Form.Input
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={handleChange}
                      fluid
                      icon={{
                        name: "eye",
                        circular: true,
                        link: true,
                        onClick: () =>
                          setShowConfirmPassword(!showConfirmPassword),
                      }}
                      iconPosition="left"
                      type={showConfirmPassword ? "text" : "password"}
                      required
                    />
                    <Divider hidden />
                    <Button
                      icon="signup"
                      content="Signup"
                      type="submit"
                      style={{
                        backgroundColor: "#B23B79",
                        color: "white",
                        fontFamily: "Josefin Sans",
                      }}
                      disabled={submitDisabled}
                    />
                    <Divider hidden />
                    <div className="font-link" style={{ fontSize: "15px" }}>
                      <p>
                        Already have an account,{" "}
                        <Link href="/login">Login here</Link>
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
        </Media>
      </MediaContextProvider>
    </>
  );
};

export default signup;
