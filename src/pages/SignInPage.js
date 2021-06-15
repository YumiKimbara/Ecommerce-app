import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CreateAccount from "../components/CreateAccount";
import LogIn from "../components/LogIn";
import LogInAccountContainer from "../components/LogInAccountContainer";
import "../scss/SignIn.scss";

function SignInPage() {
  const [isLogInHovered, setLogInHovered] = useState(true);
  const [isSignUpHovered, setSignUpHovered] = useState(false);

  return (
    <Container className="SiginContainer">
      <Row>
        <Col>
          <LogInAccountContainer />
        </Col>
      </Row>
      <Row>
        <Col>
          {/* when onMouseOver change state of hovered */}
          <LogIn
            isHovered={isLogInHovered}
            onMouseOver={() => {
              setLogInHovered(true);
              setSignUpHovered(false);
            }}
          />
        </Col>
        <Col>
          <CreateAccount
            isHovered={isSignUpHovered}
            onMouseOver={() => {
              setLogInHovered(false);
              setSignUpHovered(true);
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default SignInPage;
