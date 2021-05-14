import React from "react";
import "../Styles/Loading.css";

export default function Loading() {
  return (
    <div className="loading">
      <div className="circle circle-red" />
      <div className="circle circle-blue" />
      <div className="circle circle-green" />
    </div>
  );
}
