import {
    ADMIN_USERINFOR_REQUEST,
    ADMIN_USERINFOR_SUCCESS,
    ADMIN_USERINFOR_FAILURE,
    UPDATE_USERINFOR_REQUEST,
    UPDATE_USERINFOR_SUCCESS,
    UPDATE_USERINFOR_FAILURE,
    DELETE_USERINFOR_REQUEST,
    DELETE_USERINFOR_SUCCESS,
    DELETE_USERINFOR_FAILURE
  } from "../../constants/admin.js";
  
  const initialState = {
    userAccount: [],
    isLoading: false,
    error: null,
  };
  
export  function adminReducer(state = initialState, action) {
    switch (action.type) {
      case ADMIN_USERINFOR_REQUEST:
        return { ...state, isLoading: true, error: null };
      case ADMIN_USERINFOR_SUCCESS:
        return { ...state, isLoading: false, userAccount: action.payload.data };
      case ADMIN_USERINFOR_FAILURE:
        return { ...state, isLoading: false, error: action.payload.error };
      default:
        return state;
    }
  }

  export  function adminUpdateReducer(state = initialState, action) {
    switch (action.type) {
      case UPDATE_USERINFOR_REQUEST:
        return { ...state, isLoading: true, error: null };
      case UPDATE_USERINFOR_SUCCESS:
        return { ...state, isLoading: false, uploadedRenter: action.payload.data };
      case UPDATE_USERINFOR_FAILURE:
        return { ...state, isLoading: false, error: action.payload.error };
      default:
        return state;
    }
  }
  
  // export default adminReducer;
  