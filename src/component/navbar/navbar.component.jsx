import "./navbar.style.scss";
import { Link } from "react-router-dom";
const { Fragment } = require("react");
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
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
