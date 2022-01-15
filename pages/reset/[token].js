import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
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

const TokenPage = () => {
  const router = useRouter();

  const [newPassword, setNewPassword] = useState({ field1: "", field2: "" });

  const { field1, field2 } = newPassword;

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewPassword((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    errorMsg !== null && setTimeout(() => setErrorMsg(null), 5000);
  }, [errorMsg]);

  const resetPassword = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      if (field1 !== field2) {
        return setErrorMsg("Passwords do not match");
      }

      await axios.post(`${baseUrl}/api/reset/token`, {
        password: field1,
        token: router.query.token,
      });

      setSuccess(true);
    } catch (error) {
      setErrorMsg(catchErrors(error));
    }

    setLoading(false);
  };

  return (
    <>
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

                {success ? (
                  <>
                    <div className="font-link" style={{ fontSize: "20px" }}>
                      <p>Password reset successful</p>
                    </div>

                    <div
                      onClick={() => router.push("/login")}
                      className="font-link"
                      
                    >
                      <Button
                        content="Login Again"
                        type="submit"
                        style={{ backgroundColor: "#B23B79", color: "white" }}
                      />
                    </div>
                  </>
                ) : (
                  <div className="font-link" style={{ fontSize: "20px" }}>
                    <p>RESET PASSWORD</p>
                  </div>
                )}
                <Divider hidden />

                {!success && (
                  <>
                    {" "}
                    <Form.Input
                      fluid
                      icon="eye"
                      type="password"
                      iconPosition="left"
                      placeholder="Enter new Password"
                      name="field1"
                      onChange={handleChange}
                      value={field1}
                      required
                    />
                    <Form.Input
                      fluid
                      icon="eye"
                      type="password"
                      iconPosition="left"
                      placeholder="Confirm new Password"
                      name="field2"
                      onChange={handleChange}
                      value={field2}
                      required
                    />
                    <Divider hidden />
                    <Button
                      disabled={field1 === "" || field2 === "" || loading}
                      icon="configure"
                      type="submit"
                      style={{ backgroundColor: "#B23B79", color: "white" }}
                      content="Reset"
                    />
                  </>
                )}
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
  );
};

export default TokenPage;
