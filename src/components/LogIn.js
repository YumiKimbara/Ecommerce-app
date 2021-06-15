import axios from "axios";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../scss/SignIn.scss";

const LogIn = (props) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    resetForm();

    const url = "https://e-commerce-api.belzaondrej.com/users/login";

    const loginFormData = {
      email: loginEmail,
      password: loginPassword,
    };

    try {
      var response = await axios.post(url, loginFormData);
      var response2 = await axios.get(
        "https://e-commerce-api.belzaondrej.com/users/me"
      );
      console.log(response2.data);
      alert("Hi, you were logged in.");
    } catch (error) {
      console.error(error);
      alert("Sorry, wrong password or email.");
    }
  };

  const resetForm = () => {
    setLoginEmail("");
    setLoginPassword("");
  };

  const content = (
    <>
      <form onSubmit={login}>
        <Row>
          <Col>
            <input
              className="forms"
              type="email"
              name="loginEmail"
              placeholder="Email Address"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            ></input>
          </Col>
        </Row>
        <Row>
          <Col>
            <input
              className="forms"
              type="password"
              name="loginPassword"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            ></input>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className="forms" variant="dark" type="submit">
              LOG IN
            </Button>
          </Col>
        </Row>
      </form>
      <div>
        <p className="forgotPw">Forgot your password?</p>
      </div>
      <div>
        <p className="or">or</p>
      </div>
      <div>
        <img
          className="googleBtn"
          src="image/btn_google_signin_dark_normal_web@2x.png"
          alt="sign-in-with-google"
        />
      </div>
    </>
  );
  return (
    <>
      <div onMouseOver={props.onMouseOver}>
        <Container>
          <div
            className={`signInWrapper ${
              props.isHovered ? "bgStyleHovered" : "bgStyle"
            }`}
          >
            {content}
          </div>
        </Container>
      </div>
    </>
  );
};

export default LogIn;
