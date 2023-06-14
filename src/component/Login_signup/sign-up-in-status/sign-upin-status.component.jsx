import { Fragment ,useContext,useEffect} from "react";
import { Link } from "react-router-dom"
import './sign-upin-status.style.scss'
import {StatusContext} from "../../../contexts/LoginStatus.contexts"


const SignInOutStatus = (props) => {


  const {loginStatus, setLoginStatus}=useContext(StatusContext)

  useEffect(() => {
    if (loginStatus === "signup")
    {
      document.getElementsByClassName("sign-in-status")[0].style.display = "none"
      document.getElementsByClassName("sign-out-status")[0].style.display="inline-block"
    }
    else if (loginStatus === "signin") {
      document.getElementsByClassName("sign-in-status")[0].style.display = "inline-block";
      document.getElementsByClassName("sign-out-status")[0].style.display = "none"
    }
  }, [loginStatus])
  
  const SignInPage_open = () => {
    setLoginStatus("signup")
    document.getElementsByClassName("sign-in-status")[0].style.display = "none";
    document.getElementsByClassName("sign-out-status")[0].style.display = "inline-block"
  }

  const SignUpPage_open = () => {
    setLoginStatus("signin")
    document.getElementsByClassName("sign-in-status")[0].style.display = "inline-block";
    document.getElementsByClassName("sign-out-status")[0].style.display = "none"
 }
  return (
    <Fragment>
      <div className="status-parent">
        <div className="sign-in-status">
          Already have an account? <Link onClick={SignInPage_open}>Sign in</Link>
        </div>
        <div className="sign-out-status">
          Do not have an account? <Link onClick={SignUpPage_open}>Sign up</Link>
        </div>
      </div>
    </Fragment>
  );
};

export default SignInOutStatus
