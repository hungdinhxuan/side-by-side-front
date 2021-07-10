import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Alert,
} from "reactstrap";

import logo1 from "../img/player-dou-a.jpg";
import "../Styles/Login.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Register } from "../actions/auth";
import Loading from "../Components/Loading";
import "../Styles/Navbar.css";

const PopupRegister = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const { userInfo, isLoading, error } = useSelector((state) => state.authRe);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const toggle = () => {
    setModal(!modal);
    reset();
    if (error) {
      dispatch("CLEAR_STATE");
    }
  };

  const handleSetRegister = () => {
    setModal(!modal);
  };

  const handleRegister = (values) => {
    console.log(values);
    dispatch(Register(values));
    reset();
    if (userInfo) {
      handleSetRegister();
    }
    
  };

  // Kiểm tra mật khẩu
  const password = watch("password"); //Kiểm tra giá trị password

  return (
    <div className={isLoading ? "noClick" : ""}>
      <Button
        onClick={() => {
          toggle();
        }}
        style={{ backgroundColor: "#ea7c69", width: "115%" }}
        className="header-top-login"
      >
        Đăng ký
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="custom-register">
        <ModalHeader toggle={toggle}>
          <img src={logo1} alt="Anh logo" />
        </ModalHeader>
        <ModalBody className="custom-register-body">
          {isLoading ? (
            <Loading />
          ) : (
            <div style={{ marginLeft: "30px", marginRight: "30px" }}>
              <form onSubmit={handleSubmit(handleRegister)}>
                <div className="form-group">
                  {/* <label>Tài khoản</label> */}
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
                        value: 6,
                        message: "Tài khoản phải từ 6 đến 32 kí tự",
                      },
                      maxLength: {
                        value: 32,
                        message: "Tài khoản phải từ 6 đến 32 kí tự",
                      },
                    })}
                  />
                </div>
                {errors.username && (
                  <Alert color="danger" className="alert-confirm">{errors.username.message}</Alert>
                )}
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Vui lòng nhập email"
                    className="form-control"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email không được để trống",
                      },
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Email không đúng định dạng",
                      },
                    })}
                  />
                  {errors.email && (
                    <Alert color="danger">{errors.email.message}</Alert>
                  )}
                </div>

                <div className="form-group">
                  {/* <label>Họ và tên</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Họ và tên"
                    defaultValue=""
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Tên không được để trống",
                      },
                      maxLength: {
                        value: 30,
                        message: "Tên không được dài quá 30 ký tự",
                      },
                      pattern: {
                        value:
                          /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u,
                        message: "Tên không đúng định dạng",
                      },
                    })}
                  />
                </div>
                {errors.name && (
                  <Alert
                    color="danger"
                  >
                    {errors.name.message}
                  </Alert>
                )}

                <div className="form-group">
                  {/* <label>Mật khẩu</label> */}
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
                  <Alert
                    color="danger"
                    
                  >
                    {errors.password.message}
                  </Alert>
                )}
                <div className="form-group">
                  {/* <label>Nhập lại mật khẩu</label> */}
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
                    <Alert color="danger" style={{ fontSize: "10px" }}>
                      Mật khẩu không trùng khớp
                    </Alert>
                  )}

                {/* <label>Email</label> */}
                <div className="form-group">
                  <select
                    style={{ display: "block", marginTop: "20px" }}
                    {...register("gender")}
                  >
                    <option value="none">Giới Tính</option>
                    <option value="Nam">Nam</option>
                    <option value="Nữ">Nữ</option>
                    <option value="Khác">Khác</option>
                  </select>

                  {error && <Alert color="danger">{error.message}</Alert>}
                </div>
                <div>
                  <button
                    className="btn btn-primary"
                    style={{
                      float: "left",
                      backgroundColor: "rgb(244, 119, 34)",
                      borderRadius: "14px",
                      width: "48%",
                    }}
                  >
                    Đăng ký
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={toggle}
                    style={{
                      backgroundColor: "rgb(39, 26, 36)",
                      borderRadius: "14px",
                      float: "right",
                      width: "48%",
                    }}
                  >
                    Hủy bỏ
                  </button>
                </div>
              </form>
            </div>
          )}
          <ModalFooter></ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default PopupRegister;
