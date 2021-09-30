import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import logo from "../img/avatar49.png";
import '../Styles/Navbar.css'

function UserMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { check } = props;

  return (
    <div style={{ marginLeft: "55px" }}>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <img
          src={logo}
          alt="Ảnh mặc định"
          style={{ width: "80%", height: "100%", borderRadius: "50%" }}
        />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/setting/general">
          <MenuItem>Profile</MenuItem>
        </Link>
        <Link to="/setting/security">
          <MenuItem>Cài đặt tài khoản</MenuItem>
        </Link>
        <Link to="/">
          <MenuItem onClick={check}>Đăng xuất</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default UserMenu;
