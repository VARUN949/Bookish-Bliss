import { Fragment } from "react";
import "./LoginSignup.style.scss";
import LoginLeft from "./Login/login_left/Login.left.component";
import LoginRight from "./Login/login_right/login.right.component";
import SignupLeft from "./SignUp/Signup_left/SignupLeft.component"
import SignupRight from "./SignUp/Signup_right/SignupRight.component";
import Slider from "../../component/Login_signup/Slider/Slider.component"


const Signup_page = () => {
  console.log("entered");
  document.getElementsByClassName("LoginLeft")[0].style.animationName = "op_incre";
    document.getElementsByClassName("LoginRight")[0].style.animationName = "op_incre";
    document.getElementsByClassName("SignupLeft")[0].style.animationName = "op_decre";
  document.getElementsByClassName("SignupRight")[0].style.animationName = "op_decre";

  document.getElementsByClassName("slider")[0].style.animationName = "slider_return";

  document.getElementsByClassName("SignupRight")[0].style.display = "none"
  document.getElementsByClassName("SignupLeft")[0].style.display = "none";
  document.getElementsByClassName("LoginLeft")[0].style.display = "inline-block";
  document.getElementsByClassName("LoginRight")[0].style.display = "inline-block";



};
const SignIn_page = () => {
  console.log("entered2");
    document.getElementsByClassName("LoginLeft")[0].style.animationName = "op_decre";
    document.getElementsByClassName("LoginRight")[0].style.animationName = "op_decre";
    document.getElementsByClassName("SignupLeft")[0].style.animationName = "op_incre";
    document.getElementsByClassName("SignupRight")[0].style.animationName = "op_incre";
    document.getElementsByClassName("slider")[0].style.animationName = "slider";

  document.getElementsByClassName("LoginLeft")[0].style.display = "none";
  document.getElementsByClassName("LoginRight")[0].style.display = "none";
  document.getElementsByClassName("SignupLeft")[0].style.display = "inline-block";
  document.getElementsByClassName("SignupRight")[0].style.display = "inline-block";

};


const LoginSignup = () => {

  return (
    <Fragment>
      <div className="login-main-container">
        
        <div className="login-inner-container">

          <div className="LoginLeft">
              <LoginLeft  SignIn_page={SignIn_page} Signup_page={Signup_page} />
          </div>

          <div className="LoginRight">
              <LoginRight  SignIn_page={SignIn_page} Signup_page={Signup_page} />
          </div>

          <div className="SignupLeft">
              <SignupLeft  SignIn_page={SignIn_page} Signup_page={Signup_page}/>
          </div>

          <div className="SignupRight">
              <SignupRight  SignIn_page={SignIn_page} Signup_page={Signup_page}/>
          </div>

          <div className="slider">
            <Slider SignIn_page={SignIn_page} Signup_page={Signup_page}/>
          </div>
          
        </div>
          
      </div>
    </Fragment>
  );
};

export default LoginSignup;
