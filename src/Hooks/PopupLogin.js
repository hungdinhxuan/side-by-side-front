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
import { login, LoginGoogle } from "../actions/auth";
import { Redirect, useLocation, Link } from "react-router-dom";
import qs from "qs";
import { GoogleLogin } from "react-google-login";
import loadingGif from "../img/Infinity-1s-200px.gif";
import axios from "axios";
import { serverHost, googleClientId } from "../config";
import { getCookie, setCookie } from "../Services/handleCookie";
import FacebookLogin from "react-facebook-login";
import '../Styles/Navbar.css';

import Loading from "../Components/Loading";



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
    reset
  } = useForm();

  const toggle = () => {
    setModal(!modal)
    
  };
  const [loginState, setLogin] = useState(false);
  const handleSetLogin = () => {
    setLogin(true);
  };

  const handleLogin = (values) => {
    console.log(values);  
    dispatch(login(values));
    reset();
  };

  const handleLoginGoogle = (values) => {
    dispatch(LoginGoogle(values));
    
  }

  //REACT HOOK FORM xung đột dữ liệu khi sử dụng <Redirect/> hoặc <Route/>

  if (userInfo) {
    const { redirectTo } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
  }

  // Check kiểm tra status online hoặc offline
  // if(navigator.onLine){
  //   console.log('online');
  // }
  // else{
  //   console.log('offline');
  // }

  // const responseSuccessGoogle = async (response) => {
  //   try {
  //     const { data } = await axios.post(`${serverHost}/auth/google`, {
  //       tokenId: response.tokenId,
  //     });
  //     console.log(data);
  //     setCookie("token", data.token, "30");
  //     return <Redirect path="/" exact />
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  

  
  

  const responseErrorGoogle = (response) => {
    console.log(response);
  };

 
  return (
    <div className={isLoading ? "noClick" : ""}>
      <Button
        onClick={() => {
          toggle();
          handleSetLogin();
        }}
        style={{backgroundColor: "#ea7c69"}}
        className="header-top-login"
      > Đăng nhập
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="custom-login">
        <ModalHeader toggle={toggle} className={isLoading ? "noClick" : ""}>
          <img src={logo1} alt="Anh logo" />
        </ModalHeader>
        <ModalBody className="custom-login-body">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <form onSubmit={handleSubmit(handleLogin)} >
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
                        value: 6,
                        message: "Tài khoản phải có độ dài từ 6 đến 32 kí tự",
                      },
                      maxLength: {
                        value: 32,
                        message: "Tài khoản phải có độ dài từ 6 đến 32 kí tự",
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


                {error && <Alert color="danger">{error.message}</Alert>}
                <button class="btn btn-primary">Đăng Nhập</button>
              </form>
            </>
          )}
        </ModalBody>
        <ModalFooter className={isLoading ? "noClick" : ""}>
          <GoogleLogin
            clientId={googleClientId}
            buttonText="Đăng nhập với google"
            onSuccess={handleLoginGoogle}
            onFailure={responseErrorGoogle}
            cookiePolicy={"single_host_origin"}
          />
          <button class="btn btn-primary" onClick={toggle}>Hủy bỏ</button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PopupLogin;
