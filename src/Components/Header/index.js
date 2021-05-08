import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import "../../Styles/header.css";
import PopupLogin from "../../Hooks/PopupLogin";
import PopupRegister from "../../Hooks/PopupRegister";
import { useSelector } from "react-redux";

//Test useSticky
import Navbar from "../Header/Navbar";

// import StickyHeader from "../Header/StickyHeader";

import { deleteCookie } from "../../Services/handleCookie";

export default function Header() {
  const { userInfo } = useSelector((state) => state.auth);
  const data = userInfo;
  const [logout, setLogout] = useState(null);

  const handleLocalStore = () => {
    deleteCookie("token");
    setLogout(false);
  };

  useEffect(() => {
    if (data && data !== "undefined") {
      setLogout(true);
    }
  }, [data]);

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
                <ul className="list-dang-nhap">
                  {logout ? (
                    <>
                      <Link path="/">
                        <button onClick={handleLocalStore}>Log out</button>
                      </Link>
                    </>
                  ) : (
                    <>
                      <li>
                        <PopupRegister>
                          <Redirect to="/" />
                        </PopupRegister>
                      </li>
                      <li className="or" style={{ color: "orange" }}>
                        or
                      </li>
                      <li>
                        <PopupLogin>
                          <Redirect to="/"></Redirect>
                        </PopupLogin>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar></Navbar>
    </div>
  );
}
