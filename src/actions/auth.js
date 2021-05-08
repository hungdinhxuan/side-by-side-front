//Quán lý việc đăng nhập từ user hoặc admin
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_REQUEST,REGISTER_SUCCESS, REGISTER_FAILURE } from "../constants/auth";
import authAPI from "../Services/authAPI";
import {setCookie} from "../Services/handleCookie"

export function login(values) {
  
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const { data } = await authAPI.login(values);
      if(data) {
        // localStorage.setItem("token", JSON.stringify(data.token));
        setCookie('token', JSON.stringify(data.token), 90)
      }
      
      dispatch({ type: LOGIN_SUCCESS, payload: { data } });
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOGIN_FAILURE,
        payload: { error: error.response.error },
      });
    }
  };
}


export function Register(values) {
  return async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
      const { data } = await authAPI.register(values);
      dispatch({ type: REGISTER_SUCCESS, payload: { data } });
    } catch (error) {
      console.log(error);
      dispatch({
        type: REGISTER_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}

