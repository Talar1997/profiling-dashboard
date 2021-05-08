import React from "react";
import { Col, Row } from "antd";
import "./../assets/Login.css";
import LoginForm from "../components/login/LoginForm";

function Login(props) {
  return (
    <Row className="container" justify="center">
      <Col className="loginContainer" xs={20} sm={16} md={16} lg={12} xl={8}>
        <div className="loginFormWrapper">
          <h2>Log in</h2>
          <LoginForm />
        </div>
      </Col>
    </Row>
  );
}

export default Login;
