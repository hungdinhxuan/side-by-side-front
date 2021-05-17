//Quán lý việc đăng nhập từ user hoặc admin
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_REQUEST,REGISTER_SUCCESS, REGISTER_FAILURE,LOGIN_GOOGLE_REQUEST,LOGIN_GOOGLE_SUCCESS,LOGIN_GOOGLE_FAILURE, CLEAR_STATE } from "../constants/auth";
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
        dispatch({ type: LOGIN_SUCCESS, payload: { data } }); 
      }
      dispatch({type: CLEAR_STATE});
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOGIN_FAILURE,
        payload: { error: error.response.data },
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
      dispatch({type: CLEAR_STATE});
    } catch (error) {
      console.log(error);
      dispatch({
        type: REGISTER_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}

export function LoginGoogle(values) {
  return async (dispatch) => {
    dispatch({ type: LOGIN_GOOGLE_REQUEST });
    try {
      const { data } = await authAPI.loginGoogle(values);
      if(data){
        setCookie("token", JSON.stringify(data.token), "30");
      }
      dispatch({ type: LOGIN_GOOGLE_SUCCESS, payload: { data } });
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOGIN_GOOGLE_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}