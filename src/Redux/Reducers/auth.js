import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../../constants/auth";
import { getCookie } from "../../Services/handleCookie";


// const userInfo = getCookie('token') ? getCookie('token') : null;

const userInfo = localStorage.getItem('token') ? localStorage.getItem('token') : null;


const initialState = {
  userInfo,
  isLoading: false,
  error: null,
};

//Xử lý login và register

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case LOGIN_SUCCESS: {
      return { ...state, isLoading: false, userInfo: action.payload.data };
    }
    case LOGIN_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error};
    }
    default:
      return state;
  }
}

export default authReducer;
