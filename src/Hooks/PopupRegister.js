import React, { useState } from "react";
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
import { Register } from "../actions/auth";
import { useLocation } from "react-router-dom";
import qs from "qs";

const PopupRegister = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const { userInfo, isLoading, error } = useSelector((state) => state.auth);
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
    reset
  } = useForm();

  const toggle = () => setModal(!modal);
  

  const handleSetRegister = () => {
    setModal(!modal);
  };


  const handleRegister = (values) => {
    console.log(values);
    dispatch(Register(values));
    handleSetRegister();
    reset();
  };

  if (userInfo) {
    const { redirectTo } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
  }

  // Kiểm tra mật khẩu
  const password = watch("password"); //Kiểm tra giá trị password
  const password_repeat = watch("password_repeat");

  return (
    <div>
      <Button
        color="danger"
        onClick={() => {
          toggle();
        }}
      >
        <i className="far fa-edit" /> Đăng ký
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="custom-register">
        <ModalHeader toggle={toggle}>
          <img src={logo1} alt="Anh logo" />
        </ModalHeader>
        <ModalBody className="custom-register-body">
          <form onSubmit={handleSubmit(handleRegister)}>
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
                  minLength: {
                    value: 5,
                    message: "Mật khẩu phải từ 5 ký tự trở lên",
                  },
                })}
              />
            </div>
            {errors.password && (
              <Alert color="danger">{errors.password.message}</Alert>
            )}
            <div className="form-group">
              <label>Nhập lại mật khẩu</label>
              <input
                type="password"
                className="form-control"
                placeholder="Nhập lại mật khẩu"
                defaultValue=""
                {...register("password_repeat", {
                  required: {
                    value: true,
                  },
                  validate: (value) =>
                    value === password || "Mật khẩu không trùng khớp",
                })}
              />
            </div>
            {errors.password_repeat && (
              <Alert color="danger">{errors.password_repeat.message}</Alert>
            )}
            {error && <Alert color="danger">{error}</Alert>}
            <button class="btn btn-primary">Đăng ký</button>
          </form>
        </ModalBody>
        <ModalFooter>
          <button class="btn btn-primary">Hủy bỏ</button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PopupRegister;
