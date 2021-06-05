import React, { useEffect, useState } from "react";
import "../../Styles/Navbar.css";
import logo from "../../img/logo.png";
import { Link, Redirect } from "react-router-dom";
import PopupRegister from "../../Hooks/PopupRegister";
import PopupLogin from "../../Hooks/PopupLogin";
import { useDispatch, useSelector } from "react-redux";
import { deleteCookie } from "../../Services/handleCookie";
import  UserMenu  from "../../Components/UserMenu";

export default function Navbar() {
  const { userInfo, isLoading, error } = useSelector((state) => state.auth);

  const dataGoogle = useSelector((state) => state.authGooogle.userInfo);
  const data = userInfo ? userInfo : dataGoogle;

  const [logout, setLogout] = useState(false);
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
          <div className="col-sm-4 menu-right">
            {logout ? (
              <>
                <Link path="/">
                        <button onClick={handleLocalStore} className="log-out">Log out</button>
                </Link>
                <UserMenu />                
              </>
            ) : (
              <>
                <div className="menu-right-items">
                  <ul className="menu-right__items">
                    <li>
                      <PopupRegister></PopupRegister>
                    </li>
                    <li>
                      <PopupLogin></PopupLogin>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
