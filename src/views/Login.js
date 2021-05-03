import React from "react";
import { Col, Row } from "antd";
import "./../assets/Login.css";
import LoginForm from "../components/login/LoginForm";
import { IdcardTwoTone } from "@ant-design/icons";

function Login(props) {
  return (
    <Row className="container" justify="center">
      <Col className="loginContainer" xs={20} sm={16} md={16} lg={12} xl={8}>
        <div className="loginFormWrapper">
          <IdcardTwoTone className="loginIcon" />
          <LoginForm />
        </div>
      </Col>
    </Row>
  );
}

export default Login;
