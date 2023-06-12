import { Fragment } from "react";
import { Link } from "react-router-dom";
import './SignupRight.style.scss'
const SignupRight = (props) => {
  return (
    <Fragment>
      <div className="signup_Right_content " id="right2_60">
        <div className="signup_right_unityworks">Bookish Bliss</div>
        <div className="Signup_right_welcome">Hello, Friend!</div>
        <div className="Signup_right_welcome_back_content">
          Sign up and contribute yourself to society to help create a better and
          more inclusive community for all.
        </div>
        <div className="signup_right_button">
          <Link to="">
            <button type=""  onClick={props.Signup_page}>Sign In</button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default SignupRight;
