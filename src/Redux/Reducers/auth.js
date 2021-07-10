import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CLEAR_STATE
} from "../../constants/auth";
import { getCookie } from "../../Services/handleCookie";

import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "../../constants/auth";

import {LOGIN_GOOGLE_REQUEST,LOGIN_GOOGLE_SUCCESS,LOGIN_GOOGLE_FAILURE} from '../../constants/auth';

import Swal from "sweetalert2"

const userInfo = getCookie("token") ? getCookie("token") : null; //Chỉnh sửa

const initialState = {
  userInfo,
  isLoading: false,
  error: null,
};

//Xử lý login và register

export function authReducerLogin(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case LOGIN_SUCCESS: {
      return { ...state, isLoading: false, userInfo: action.payload.data };
    }
    case LOGIN_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    case CLEAR_STATE: {
      return {...state, error: null};
    }
    default:
      return state;
  }
}

export function authReducerRegister(state = initialState, action) {
  switch (action.type) {
    case REGISTER_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case REGISTER_SUCCESS: {
      Swal.fire({
        icon: 'success',
        title: action.payload.data.message,
      })
      return { ...state, isLoading: false, userInfo: action.payload.data };
    }
    case REGISTER_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    case CLEAR_STATE: {
      return state;
    }
    default:
      return state;
  }
}


export function authReducerGoogle(state = initialState, action) {
  switch (action.type) {
    case LOGIN_GOOGLE_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case LOGIN_GOOGLE_SUCCESS: {
      return { ...state, isLoading: false, userInfo: action.payload.data };
    }
    case LOGIN_GOOGLE_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    default:
      return state;
  }
}
