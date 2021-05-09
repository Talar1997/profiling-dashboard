import React, {useEffect} from "react";
import "./../assets/Login.css";
import LoginForm from "../components/login/LoginForm";
import {ToolbarDivider} from "carbon-components-react"
import {connect} from 'react-redux'

//TODO:
// 0. map dispatch to proporties
// 1. function to POST to /auth api
// 2. function to set user when logged in
// 3. during login, use reduct to set state on login-request
const Login = (props) => {
  useEffect(() => {
    console.log('Component attached.')
    console.log('Stored user: ', props.user)
  })

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

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, {})(Login)