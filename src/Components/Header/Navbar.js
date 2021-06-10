import React, { useEffect, useState } from "react";
import "../../Styles/Navbar.css";
import logo from "../../img/player-dou-a.jpg";
import { Link, Redirect } from "react-router-dom";
import PopupRegister from "../../Hooks/PopupRegister";
import PopupLogin from "../../Hooks/PopupLogin";
import { useDispatch, useSelector } from "react-redux";
import { deleteCookie } from "../../Services/handleCookie";
import UserMenu from "../../Components/UserMenu";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default function Navbar() {
  const { userInfo, isLoading, error } = useSelector((state) => state.auth);

  const dataGoogle = useSelector((state) => state.authGooogle.userInfo);
  const data = userInfo ? userInfo : dataGoogle;

  const [logout, setLogout] = useState(false);
  const handleLocalStore = () => {
    deleteCookie("token");
    window.location.reload();
    setLogout(false);
  };
  useEffect(() => {
    if (data && data !== "undefined") {
      setLogout(true);
    }
    
  }, [data]);
  

  // Dropdown thông báo giữa 2 client
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div
      id="sticky-header"
      // styleclassName={sticky ? "navbar navbar-sticky" : "navbar"}
    >
      <div className="container">
        <div className="row menu-wrap">
          <div className="col-sm-7">
            <div className="row">
              <Link to="/" className="logo" style={{ textDecoration: "none" }}>
                <a>
                  <img
                    src={logo}
                    alt="Anh logo"
                    style={{ width: "64px", height: "55px" }}
                  ></img>
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
                  <Link to="/BXH">BXH</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-5 menu-right row">
            {logout ? (
              <>
                <div className="col-md-4">
                  <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret>
                      0 <i className="fas fa-bell"></i>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>Header</DropdownItem>
                      <DropdownItem>
                        Người chơi: ... đã chấp nhận yêu cầu thuê của bạn
                      </DropdownItem>
                      <DropdownItem text></DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <div className="col-md-4">
                  <div className="money">
                    <Link className="btn btn-secondary" to="/wallet">
                      <i className="fa fa-wallet"></i> + 10,000,000 đ
                    </Link>
                  </div>
                </div>
                <div className="col-md-4">
                  <Link path="/">
                    <UserMenu check={handleLocalStore} />
                  </Link>
                </div>
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
