import React from "react";
import { Redirect,Route } from "react-router-dom";
import { useSelector } from "react-redux";


export default function AdminRoute({ child, ...props }) {
  const { userInfo } = useSelector((state) => state.auth);
  if(!userInfo){
      return <Redirect to="/streamer" />
  }
  if(userInfo){
    return <Redirect to="/admin/dashboard"/>
  }
  return <Route  {...props}>{child}</Route>
}
