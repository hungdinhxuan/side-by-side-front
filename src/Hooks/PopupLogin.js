import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Alert,
  FormGroup,
} from "reactstrap";
import logo1 from "../img/player-dou-a.jpg";
import "../Styles/Login.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import login from "../actions/auth";
import { Redirect, useLocation, Link } from "react-router-dom";
import qs from "qs";

const PopupLogin = (props) => {
  const { buttonLabel, className } = props;
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const { userInfo, isLoading, error } = useSelector((state) => state.auth);
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({shouldUnregister: false});

  const toggle = () => setModal(!modal);
  const [loginState, setLogin] = useState(false);
  const handleSetLogin = () => {
    setLogin(true);
  };

  const handleLogin = (values) => {
    // console.log(values);
    dispatch(login(values));
  };

  //REACT HOOK FORM xung đột dữ liệu khi sử dụng <Redirect/> hoặc <Route/> 

    // if (userInfo) {
    //   const { redirectTo } = qs.parse(location.search, {
    //     ignoreQueryPrefix: true,
    //   });
    //   if (redirectTo) {
    //     return <Redirect to={redirectTo} />;
    //   }
    //   return <Redirect to="/streamer" />;
    // } else {
    //   return <Redirect to=
    // }
    

  return (
    <div>
      <Button
        color="danger"
        onClick={() => {
          toggle();
          handleSetLogin();
        }}
      >
        <i className="far fa-edit" /> Đăng nhập
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="custom-login">
        <ModalHeader toggle={toggle}>
          <img src={logo1} alt="Anh logo" />
        </ModalHeader>
        <ModalBody className="custom-login-body">
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-group">
              <label>Tài khoản</label>
              <input
                type="text"
                className="form-control"
                placeholder="Tài khoản"
                defaultValue=""
                {...register("username", {
                  required: {
                    value: true,
                    message: "Tài khoản không được để trống",
                  },
                  minLength: {
                    value: 5,
                    message: "Tài khoản phải từ 5 đến 20 kí tự",
                  },
                  maxLength: {
                    value: 20,
                    message: "Tài khoản phải từ 5 đến 20 kí tự",
                  },
                })}
              />
            </div>
            {errors.username && (
              <Alert color="danger">{errors.username.message}</Alert>
            )}
            <div className="form-group">
              <label>Mật khẩu</label>
              <input
                type="password"
                className="form-control"
                placeholder="Mật khẩu"
                defaultValue=""
                {...register("password", {
                  required: {
                    value: true,
                    message: "Mật khẩu không được để trống",
                  },
                })}
              />
            </div>
            {errors.password && (
              <Alert color="danger">{errors.password.message}</Alert>
            )}
            {error && <Alert color="danger">{error}</Alert>}
            <button class="btn btn-primary">Đăng Nhập</button>
          </form>
        </ModalBody>
        <ModalFooter>
          <a href="https://side-by-side-back.vercel.app/auth/google">
            <button class="btn btn-primary mt-2" style={{ display: "block" }}>
              Đăng nhập GMAIL{" "}
            </button>
          </a>
          <a href="https://side-by-side-back.vercel.app/auth/facebook">
            <button class="btn btn-primary mt-2" style={{ display: "block" }}>
              Đăng nhập FB{" "}
            </button>
          </a>
          <button class="btn btn-primary">Hủy bỏ</button>
          
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PopupLogin;