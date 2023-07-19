import { Fragment, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./sidebar.style.scss";
import { StatusContext } from "../../../contexts/LoginStatus.contexts";
import { useLocation } from "react-router-dom";


const SideBar = () => {
  const { loginStatus, setLoginStatus } = useContext(StatusContext);
  const currentURL = useLocation();


  useEffect(() => {
    if (currentURL.pathname === "/home") {

      console.log("red")
      document.getElementsByClassName("sidebar_signup")[0].style.display = "inline-block"
      document.getElementsByClassName("sidebar_signin")[0].style.display="inline-block"
      const sideInnerContainers = document.getElementsByClassName(
        "side-inner-container"
      );

      for (let i = 0; i < sideInnerContainers.length; i++) {
        const ulElements = sideInnerContainers[i].getElementsByTagName("ul");

        for (let j = 0; j < ulElements.length; j++) {
          const liElements = ulElements[j].getElementsByTagName("li");
          
          
          for (let k = 0; k < liElements.length; k++) {
            const aElements = liElements[k].getElementsByTagName("a");
            liElements[k].style.margin = "10px 0px"
            for (let l = 0; l < aElements.length; l++) {
              aElements[l].style.color = "#851c1c";
            }
          }
        }
      }
    } else if (currentURL.pathname === "/login") {
      console.log("white")

      const sideInnerContainers = document.getElementsByClassName(
        "side-inner-container"
      );

      for (let i = 0; i < sideInnerContainers.length; i++) {
        const ulElements = sideInnerContainers[i].getElementsByTagName("ul");

        for (let j = 0; j < ulElements.length; j++) {
          const liElements = ulElements[j].getElementsByTagName("li");

          for (let k = 0; k < liElements.length; k++) {
            const aElements = liElements[k].getElementsByTagName("a");

            for (let l = 0; l < aElements.length; l++) {
              aElements[l].style.color = "white";
            }
          }
        }
      }
    }
  }, [currentURL.pathname]);

  useEffect(() => {
    if (loginStatus === "signup") {
      document.getElementsByClassName("sidebar_signin")[0].style.display =
        "none";
      document.getElementsByClassName("sidebar_signup")[0].style.display =
        "inline-block";
    } else if (loginStatus === "signin") {
      document.getElementsByClassName("sidebar_signin")[0].style.display =
        "inline-block";
      document.getElementsByClassName("sidebar_signup")[0].style.display =
        "none";
    }
  }, [loginStatus]);
  const sidebar_signup = () => {
    setLoginStatus("signin");
    console.log(loginStatus);
  };
  const sidebar_signIn = () => {
    setLoginStatus("signup");
    console.log(loginStatus);
  };

  return (
    <Fragment>
      <div className="side-main-container">
        <div className="sidebar-temp">
          <div className="side-inner-container">
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/library">Library</Link>
              </li>
              <li>
                <Link to="/">Collaction</Link>
              </li>
              <li>
                <Link to="/">Collaction</Link>
              </li>
              <li className="sidebar_signin">
                <Link to="/login" onClick={sidebar_signIn}>
                  Sign In
                </Link>
              </li>
              <li className="sidebar_signup">
                <Link to="/login" onClick={sidebar_signup}>
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SideBar;
