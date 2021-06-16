import {
    ADMIN_USERINFOR_REQUEST,
    ADMIN_USERINFOR_SUCCESS,
    ADMIN_USERINFOR_FAILURE,
  } from "../../constants/admin.js";
  
  const initialState = {
    userAccount: [],
    isLoading: false,
    error: null,
  };
  
  function adminReducer(state = initialState, action) {
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
  
  export default adminReducer;
  