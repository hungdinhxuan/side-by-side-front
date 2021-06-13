import React from "react";
import Messenger from "../../Components/Messenger/Messenger";
import { Redirect } from "react-router-dom";
import { getCookie } from "../../Services/handleCookie";

export default function ChatClient() {
  if (!getCookie("token")) {
    <Redirect to="/" exact/>;
  }
  else{
    <Redirect to="/streamer" exact/>;
  }
  return (
    <div>
      <Messenger />
    </div>
  );
}
