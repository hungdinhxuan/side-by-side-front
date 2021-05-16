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
import Loading from "../Components/Loading";

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
    reset,
  } = useForm();

  const toggle = () => setModal(!modal);

  const handleSetRegister = () => {
    setModal(!modal);
  };

  const handleRegister = (values) => {
    console.log(values);
    dispatch(Register(values));
    reset();
    if(userInfo){
      alert('Đăng ký thành côgn');
      handleSetRegister();
    }
  };
  


  // Kiểm tra mật khẩu
  const password = watch("password"); //Kiểm tra giá trị password

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
          {isLoading ? (
            <Loading />
          ) : (
            <>
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
                      required: true,
                      validate: (value) => value === password,
                    })}
                  />
                </div>
                {errors.password_repeat &&
                  errors.password_repeat?.type === "validate" && (
                    <Alert color="danger">Mật khẩu không trùng khớp</Alert>
                  )}

                <label>Email</label>
                <input
                  type="email"
                  placeholder="Vui lòng nhập email"
                  className="form-control"
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Email không đúng định dạng",
                    },
                  })}
                />
                {errors.email?.message && (
                  <Alert color="danger">{errors.email?.message}</Alert>
                )}

                <select
                  style={{ display: "block", marginTop: "20px" }}
                  {...register("gender")}
                >
                  <option value="female">female</option>
                  <option value="male">male</option>
                  <option value="other">other</option>
                </select>
                {error && <Alert color="danger">{error}</Alert>}
                <button
                  className="btn btn-primary"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "0",
                  }}
                >
                  Đăng ký
                </button>
              </form>
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={toggle}>
            Hủy bỏ
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PopupRegister;
