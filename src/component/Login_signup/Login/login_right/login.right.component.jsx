import email from "../../../../assests/icons/email.png";
import password from "../../../../assests/icons/password.png";
import { Link } from "react-router-dom"
import './login_right.style.scss'

const LoginRight = () => {
    return (
        <div className="Login_right_content " id="right1_60">
            <div className="login_right_unityworks">Bookish Bliss</div>
            <div className="Login_sign_into_unityworks">
              Sign in to Bookish Bliss
            </div>
            <div className="Login_G_F">
              <div className="Login_circle">G</div>
              <div className="Login_circle">f</div>
            </div>
            <div className="Login_or_use">
              or use your email for registration
            </div>
            <div className="Login_email_password">
              <div className="Login_email">
                <img src={email} alt="" />
                <input type="textbox" placeholder="Email" />
              </div>
              <div className="Login_password">
                <img src={password} alt="" />
                <input type="password" placeholder="Password" />
              </div>
            </div>

            <div className="Login_Forgot_password">Forgot your password?</div>
            <div className="login_signup_button_right">
              <Link to="/" className="">
                <button type="submit" className="">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
    )
}

export default LoginRight