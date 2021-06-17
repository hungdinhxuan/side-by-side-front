import React, { useState, useEffect, useCallback } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  NavLink,
  Redirect,
} from "react-router-dom";
import { useForm } from "react-hook-form";
import "../../Styles/Wallet.css";
import { Alert } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { patchWalletByNumber } from "../../actions/wallet";
import { getPaymentByNumber } from "../../actions/payment";
import Snackbar from "@material-ui/core/Snackbar";

export default function Wallet(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { paymentGet, isLoading } = useSelector((state) => state.paymentGet);
  // const {money, updateMoney} = useSelector((state) => state.wallet)
  // const { addMoney, error,updateMoney } = useSelector((state) => state.walletAddReducer);
  const [paymentId, setPaymentId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPaymentByNumber());
    
  }, [dispatch]);

  const { path, url } = useRouteMatch();
  const [next, setNext] = useState(false);

  const [amount, setAmount] = useState(null);
  const onSubmit = (values) => {
    setNext(true);
    setAmount(values.money);
  };
  console.log(amount);
  // Lấy phần tử từ api redux trả về payment number

  const handleCheck = (e) => {
    const { value } = e.target;
    if (value < 0) {
      console.log("lỗi");
    }
  };

  // Nap tien
  const [radioButton, setRadioButton] = useState(false);

  const handlePayment = () => {
    dispatch(patchWalletByNumber({ paymentId, amount }));
  };

  const [checkSuccess, setCheckSuccess] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // if (addMoney.success) {
  //   alert("Nạp tiền thành công");
  //   window.location.reload();
  // }

  return (
    <div className="wallet">
      <div className="container-wallet-form">
        <h1 className="text-center" style={{ color: "#ea7c69" }}>
          Ví điện tử
        </h1>
        <hr />
        <div className="selection-options row" style={{ margin: "10px" }}>
          <div
            className="col-md-3"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {paymentGet.payments &&
              paymentGet.payments.map((item) => (
                <Label check>
                  <Input
                    type="radio"
                    name="radio2"
                    value="1"
                    onChange={(e) => {
                      setRadioButton(!radioButton);
                      setPaymentId(item._id);
                    }}
                  />
                </Label>
              ))}
          </div>
          <div className="col-md-3">
            {paymentGet.payments &&
              paymentGet.payments.map((item) => (
                <p style={{ marginBottom: "0" }}>{item.cardNumber}</p>
              ))}
          </div>
          <div className="col-md-3 text-center">
            {paymentGet.payments &&
              paymentGet.payments.map((item) => (
                <p style={{ marginBottom: "0" }}>{item.name}</p>
              ))}
          </div>
          <div className="col-md-3 text-center">
            {paymentGet.payments &&
              paymentGet.payments.map((item) => (
                <p style={{ marginBottom: "0" }}>{item.expiresDate}</p>
              ))}
          </div>
        </div>
        <hr />
        <h3 style={{ color: "#ea7c69", padding: "15px 0" }}>Nạp tiền</h3>
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
            <button onClick={handlePayment}>
              <span
                className="payment-link text-center"
                style={{ color: "#ea7c69" }}
              >
                Continue
              </span>
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
}
