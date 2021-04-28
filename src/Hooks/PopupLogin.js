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
import login  from "../actions/auth";
import { Redirect, useLocation } from "react-router-dom";
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
  } = useForm();

  const toggle = () => setModal(!modal);
  const [loginState, setLogin] = useState(false);
  const handleSetLogin = () => {
    setLogin(true);
  };

  const handleLogin = (values) => {
    // console.log(values);
    dispatch(login(values));
  };

  if (userInfo) {
    const { redirectTo } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    // if (redirectTo) {
    //   return <Redirect to={redirectTo} />;
    // }
    return <Redirect to="/streamer" />;
  }

  return (
    <div>
      <Button
        color="danger"
        onClick={() => {
          toggle();
          handleSetLogin();
        }}
      >
        <i className="far fa-edit" /> Sign in
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
                {...register("taiKhoan", {
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
            {errors.taiKhoan && (
              <Alert color="danger">{errors.taiKhoan.message}</Alert>
            )}
            <div className="form-group">
              <label>Mật khẩu</label>
              <input
                type="password"
                className="form-control"
                placeholder="Mật khẩu"
                defaultValue=""
                {...register("matKhau", {
                  required: {
                    value: true,
                    message: "Mật khẩu không được để trống",
                  },
                })}
              />
            </div>
            {errors.matKhau && (
              <Alert color="danger">{errors.matKhau.message}</Alert>
            )}
            {error && <Alert color="danger">{error}</Alert>}
            <button class="btn btn-primary">Đăng Nhập</button>
          </form>
        </ModalBody>
        <ModalFooter>
          <button class="btn btn-primary">Hủy bỏ</button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PopupLogin;
