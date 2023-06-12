import { Fragment } from "react";
import "./LoginSignup.style.scss";
import LoginLeft from "./Login/login_left/Login.left.component";
import LoginRight from "./Login/login_right/login.right.component";
const LoginSignup = () => {
  return (
    <Fragment>
      <div className="login-main-container">
        <div className="login-inner-container">
          <LoginLeft />
          <LoginRight />
        </div>
      </div>
    </Fragment>
  );
};

export default LoginSignup;
