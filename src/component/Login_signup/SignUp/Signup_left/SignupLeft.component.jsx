import { Link } from "react-router-dom";
import email from "../../../../assests/icons/email.png";
import password from "../../../../assests/icons/password.png";
import './SignupLeft.style.scss'

import { Fragment } from "react";

const SignupLeft = () => {
  return (
    <Fragment>
      <div className="signup_left_content " id="left2_40">
        <div className="signup_into_unityworks">Create Account</div>
        <div className="signup_left_G_F" >
          <button>G</button>
          <button>f</button>
        </div>
        <div className="signup_left_or_use">or use your email account</div>
        <div className="Signup_left_email_password">
          <div className="signup_left_email">
            <img src={email} alt="" />
            <input type="textbox" placeholder="Email" />
          </div>
          <div className="signup_left_password">
            <img src={password} alt="" />
            <input type="password" placeholder="Password" />
          </div>
          <div className="signup_left_password">
            <img src={password} alt="" />
            <input type="password" placeholder="Password" />
          </div>
        </div>

        <div className=" signup_left_button">
          <Link to="/" className="">
            <button type="submit" className="">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default SignupLeft;
