import React from "react";
import "../Styles/Loading.css";
import { Spinner } from 'reactstrap';
export default function Loading() {
  return (
    // <div className="loading">
    //   <div className="circle circle-red" />
    //   <div className="circle circle-blue" />
    //   <div className="circle circle-green" />
    // </div>
    <div>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Spinner type="grow" color="primary" />
        <Spinner type="grow" color="secondary" />
        <Spinner type="grow" color="success" />
        <Spinner type="grow" color="danger" />
        <Spinner type="grow" color="warning" />
        <Spinner type="grow" color="info" />
        <Spinner type="grow" color="light" />
        <Spinner type="grow" color="dark" />
      </div>
    </div>
  );
}
