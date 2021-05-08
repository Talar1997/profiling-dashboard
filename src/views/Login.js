import React from "react";
import "./../assets/Login.css";
import LoginForm from "../components/login/LoginForm";
import {ToolbarDivider} from "carbon-components-react"

function Login(props) {
  return (
    <div className="bx--row container">
      <div className="bx--col"/>
      <div className="bx--col loginContainer">
        <div className="loginFormWrapper">
          <h2>Log in</h2>
          <p>Don't have an account? <a href="mailto:talar1997@outlook.com">Contact with administrator</a></p>
          <ToolbarDivider/>
          <LoginForm/>
        </div>
      </div>
      <div className="bx--col"/>
    </div>
  );
}

export default Login;
