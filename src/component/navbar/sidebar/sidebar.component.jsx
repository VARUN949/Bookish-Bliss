import { Fragment } from "react";
import { Link } from 'react-router-dom'
import "./sidebar.style.scss";
const SideBar = () => {
  return (
    <Fragment>
          <div className="side-main-container">
              <div className="sidebar-temp">
                  <div className="side-inner-container">
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
        </div>
    </Fragment>
  );
};

export default SideBar;
