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
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import {getPaymentByNumber} from '../../actions/payment'

export default function Wallet(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const {paymentGet,isLoading,error} = useSelector((state) => state.paymentGet)
  const [payment,setPayment] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Hello');
    dispatch(getPaymentByNumber());
    if(paymentGet){
      setPayment(paymentGet);
      console.log(payment);
    }
  },[])
  
  

  // useEffect(() => {
  //   setPayment(paymentGet);
  //   console.log(payment.payments[0]);
  // },[payment])

  const { path, url } = useRouteMatch();
  const [next, setNext] = useState(false);


  const onSubmit = (values) => {
    setNext(true);
  };

  

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

  }

  return (
    <div className="wallet">
      <div className="container-wallet-form">
        <h1 className="text-center" style={{ color: "#ea7c69" }}>
          Ví điện tử
        </h1>
        <div className="selection-options row" style={{ margin: "10px" }}>
          <div className="col-md-3" style={{display: "flex"}}>
            <Label check>
              <Input type="radio" name="radio2" value="1" onChange={(e) => {
                  setRadioButton(!radioButton);
              }} /> 
            </Label>
          </div>
          <div className="col-md-3">
            <p style={{marginBottom: "0"}}>1</p>
          </div>
          <div className="col-md-3">
            <p style={{marginBottom: "0"}}>1</p>
          </div>
          <div className="col-md-3">
            <p style={{marginBottom: "0"}}>1</p>
          </div>
        </div>
        <hr/>
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
            <button to="/">
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
    </div>
  );
}
