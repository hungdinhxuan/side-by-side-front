import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/header.css";

//Test useSticky
import Navbar from "../Header/Navbar";
import StickyHeader from "../Header/StickyHeader";

export default function Header() {
  const { isSticky, element } = StickyHeader();
  return (
    <div className="header-bg">
      <div className="header-top-wrap">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="header-top-social">
                <ul>
                  <li>
                    <Link>
                      <a href="twitter.com">
                        <i className="fab fa-twitter" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <a href="#">
                        <i className="fab fa-vimeo-v" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="header-top-login">
                <ul>
                  <li>
                    <Link to="/register">
                      <a>
                        <i className="far fa-edit" />
                        Register
                      </a>
                    </Link>
                  </li>
                  <li className="or">or</li>
                  <li>
                    <Link to="/login">
                      <a>
                        <i className="far fa-edit" />
                        sign in
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar sticky={isSticky}></Navbar>
    </div>
  );
}
