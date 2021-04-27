import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import React from "react";

export default function AdminRoute({ child, ...props }) {
  const { userInfo } = useSelector((state) => state.auth);
  if(!userInfo){
      return <Redirect to={`/login?redirectTo${props.path}`} />
  }

  //Login but not admin
  if(userInfo.maLoaiNguoiDung !== "GV"){
    return <Redirect to="/"/>
  }

  return <Redirect ></Redirect>
}
