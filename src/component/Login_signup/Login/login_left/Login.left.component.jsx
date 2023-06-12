import { Fragment } from "react";
import { Link } from "react-router-dom";
import './login_left.style.scss'
const LoginLeft = (props) => {
  return (
    <Fragment>
      <div className="Login_left_content " id="left1_40">
        <div className="login_Welcome_back">Welcome Back!</div>
        <div className="login_welcome_back_content">
          To keep connect with ous please login with your personal info
        </div>
        <div className="login_signup_button">
          <Link to="" className="">
            <button type="submit" className="" onClick={props.SignIn_page}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginLeft;
