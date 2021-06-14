import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  NavLink,
} from "react-router-dom";
import { useForm } from "react-hook-form";
import "../../Styles/Wallet.css";
import { Alert } from "reactstrap";

export default function Wallet(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { path, url } = useRouteMatch();
  const [next, setNext] = useState(false);
  const onSubmit = (values) => {
    console.log(values);
    console.log(url);
    setNext(true);
  };

  const handleCheck = (e) => {
    const { value } = e.target;
    if (value < 0) {
      console.log("lỗi");
    }
  };

  return (
    <div className="wallet">
      <div className="container-wallet-form">
        <h1 className="text-center" style={{ color: "#ea7c69" }}>
          Ví điện tử
        </h1>
        <h3 style={{ color: "#ea7c69" }}>Nạp tiền</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            style={{ width: "100%" }}
            placeholder="Nhap gia tien mong muon"
            {...register("money", {
              required: {
                value: true,
                message: "Số tiền không được để trống",
              },
              minLength: {
                value: 5,
                message: "Phải nạp ít nhất là 10.000vnđ",
              },
              maxLength: {
                value: 7,
                message: "Chỉ được nạp tối đa 1M vnđ",
              },
              pattern: {
                value: /^[0-9\b]+$/,
                message: "Nhập không đúng định dạng tiền",
              },
            })}
            onChange={handleCheck}
          />
          {errors.money && <Alert color="danger">{errors.money.message}</Alert>}

          <button
            type="submit"
            className="btn btn-secondary"
            style={{ marginTop: "15px" }}
          >
            Xác nhận số tiền nạp
          </button>
        </form>
        {next ? (
          <div className="link-to-payment">
            <Link to="/" >
              <span className="payment-link text-center" style={{ color: "#ea7c69"}}>Continue</span>
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
