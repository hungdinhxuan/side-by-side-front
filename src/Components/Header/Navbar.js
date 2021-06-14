import React, { useEffect, useState, useContext } from "react";
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
import { socketContext } from "../../Components/socket";
import "antd/dist/antd.css";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

export default function Navbar({ children }) {
  const { userInfo, isLoading, error } = useSelector((state) => state.auth);

  const dataGoogle = useSelector((state) => state.authGooogle.userInfo);
  const data = userInfo ? userInfo : dataGoogle;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
    console.log(isModalVisible);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
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

  // Socket nhận thông báo
  const socket = useContext(socketContext);
  const [notifications, setNotifications] = useState("");
  const [sender, setSender] = useState("");
  const [room, setRoom] = useState("");
  const [time, setTime] = useState(null);
  const [price, setPrice] = useState(null);
  useEffect(() => {
    socket.emit("GET_USERS");

    socket.on("SENDER_NOTIFICATION", (data) => {
      // Người thuê hiện thông báo
      // console.log(data);
      alert(data.response); 
    });
    socket.on("RECEIVER_NOTIFICATION", (data) => {
      // Người đc thuê hiển thị thông báo
      // alert(data.response);
      setNotifications(data.response);
      setSender(data.sender)
      setTime(data.time)
      setPrice(data.price)
    });
    socket.on("CONFIRM_RENT_REQUEST", data => {
      console.log(data);
      setRoom(data.room)
     
    })
  }, [socket]);

  const [openNotifi, setNotifi] = useState(false);
  const handleCheckNotifications = () => {
    setNotifi(true);
    console.log(notifications);
  };

  // Matterial UI thông báo thuê player
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [requestChat, setRequestChat] = useState(false);

  const handleAccept = () => {
    if (notifications !== "") {
      setRequestChat(true);
      socket.emit("CONFIRM_RENT_REQUEST", {sender, time, price});
    }
    setOpen(false);
    console.log(requestChat);
  };

  

  // Dropdown thông báo giữa 2 client
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  if (requestChat) {
    console.log(sender)
    

  }
 
  if(room !== ""){
    return <Redirect to={`/room/${room}`} />;
  }

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
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={handleClickOpen}
                        >
                          Open alert dialog
                        </Button>
                        <Dialog
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >
                          <DialogTitle id="alert-dialog-title">
                            {"Use Google's location service?"}
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                              {notifications}
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleClose} color="primary">
                              Disagree
                            </Button>
                            <Button
                              onClick={handleAccept}
                              color="primary"
                              autoFocus
                            >
                              Agree
                            </Button>
                          </DialogActions>
                        </Dialog>
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
