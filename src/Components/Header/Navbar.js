import React from "react";
import "../../Styles/Navbar.css";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";

const Navbar = ({ sticky }) => (
  <div
    id="sticky-header"
    // styleclassName={sticky ? "navbar navbar-sticky" : "navbar"} 
  >
    <div className="container">
      <div className="row menu-wrap">
        <div className="col-sm-8">
          <Link to="/" className="logo" style={{ textDecoration: "none" }}>
            <a>
              <img src={logo} alt="Anh logo"></img>
            </a>
            <div className="menu-text">
              <p>
                <span>
                  Rent me <br />
                </span>
                Rent happy
              </p>
            </div>
          </Link>
          <ul className="menu-list-items">
            <li className="menu-items">
              <Link to="/streamhub">
                <a>Stream Hub</a>
              </Link>
            </li>
            <li className="menu-items">
              <Link to="/newsfeed">
                <a>News Feed</a>
              </Link>
            </li>
            <li className="menu-items">
              <Link to="/streamer">
                <a>Thuê người chơi</a>
              </Link>
            </li>
            <li className="menu-items">
              <Link>
                <a>BXH</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
  </div>
);
export default Navbar;
