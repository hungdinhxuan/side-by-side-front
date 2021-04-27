//Quán lý việc đăng nhập từ user hoặc admin
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../constants/auth";
import authAPI from "../Services/authAPI";

import React from "react";

export default function login(values) {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const { data } = await authAPI.login(values);
      localStorage.setItem("userInfo", JSON.stringify(data));
      dispatch({ type: LOGIN_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
