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
import { Alert } from "@material-ui/lab";

export default function Wallet() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  const {path, url} = useRouteMatch();
  const [next, setNext] = useState(false);
  const onSubmit = (values) => {
    console.log(values);
    console.log(url);
    setNext(true);
  };

  return (
    <div className="wallet">
      <div className="container-wallet-form">
        <h1>Digital Wallet</h1>
        <h3>Add money</h3>
        <p style={{ margin: "12px 0 12px" }}>Wallet balance: 0đ</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            style={{ width: "100%" }}
            placeholder="Nhap gia tien mong muon"
            {...register("money", { required: true, maxLength: 20000 })}
          />
          <button type="submit" >click</button>
        </form>
      </div>
    </div>
  );
}
