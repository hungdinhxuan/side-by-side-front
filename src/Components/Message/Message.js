import "./message.css";
import moment from "moment";
import AnhTest from "../../img/Ha.jpg";
import React, { useState, useEffect, useRef } from "react";
import {format} from "timeago.js"

export default function Message({ message, own }) {
  const scroll = useRef();
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [own]);

  const handleRefresh = (e) => {
    if (e.keyCode === 116) {
      e.preventDefault();
    }
  }
  return (
    <div className={own ? "message own" : "message"} ref={scroll} >
      <div className="messageTop" onKeyDown={handleRefresh}>
        <img className="messageImg" src={message.avatar} alt="" />
        <p className="messageText" >{message.text}</p>
      </div>
      <div className="messageBottom">
        {moment(new Date()).format("DD MMM YYYY")}
        {/* {format(new Date())} */}
      </div>
    </div>
  );
}
