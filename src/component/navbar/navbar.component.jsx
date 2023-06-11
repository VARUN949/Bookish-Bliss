import "./navbar.style.scss";
import { Link } from "react-router-dom";
import { Fragment }  from "react";
import menuBar from "../../assests/menu.png";
import close from "../../assests/close.png";

const menuBar_open = () => {
  document.getElementsByClassName("navbar-menu-bar")[0].style.display = "none";
  document.getElementsByClassName("navbar-cross-div")[0].style.display = "block";
};

const menuBar_close = () => {
  document.getElementsByClassName("navbar-menu-bar")[0].style.display = "block";
  document.getElementsByClassName("navbar-cross-div")[0].style.display = "none"; 
};

const Navbar = () => {
  return (
    <Fragment>
      <div className="main-container">
        <div className="inner-container">
          <div className="first-part ">
            <div className="logo">Bookish Bliss</div>
          </div>
          <div className="middle-part">
            <div className="middle-part-list">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">Library</Link>
                </li>
                <li>
                  <Link to="/">Collaction</Link>
                </li>
                <li>
                  <Link to="/">Collaction</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="last-part">
                      <div><button>Login</button></div>
            <div><button>Sign Up</button></div>
            <div className="side-bar">
            
            <div className="navbar-cross-div">
              <Link onClick={menuBar_close} className="navbar-cross">
                <img src={close} alt="" />
              </Link>
            </div>
            <div className="navbar-menu-bar">
              <Link onClick={menuBar_open}>
                <img src={menuBar} alt="" />
              </Link>
              </div>
              </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
