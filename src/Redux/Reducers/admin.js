import {
  ADMIN_USERINFOR_REQUEST,
  ADMIN_USERINFOR_SUCCESS,
  ADMIN_USERINFOR_FAILURE,
  UPDATE_USERINFOR_REQUEST,
  UPDATE_USERINFOR_SUCCESS,
  UPDATE_USERINFOR_FAILURE,
  DELETE_USERINFOR_REQUEST,
  DELETE_USERINFOR_SUCCESS,
  DELETE_USERINFOR_FAILURE,
  ADD_USERINFOR_REQUEST,
  ADD_USERINFOR_SUCCESS,
  ADD_USERINFOR_FAILURE,
} from "../../constants/admin.js";

const initialState = {
  userAccount: [],
  isLoading: false,
  error: null,
  updateUserAccount: [],
};

export function adminReducer(state = initialState, action) {
  switch (action.type) {
    case ADMIN_USERINFOR_REQUEST:
      return { ...state, isLoading: true, error: null };
    case ADMIN_USERINFOR_SUCCESS:
      return { ...state, isLoading: false, userAccount: action.payload.data };
    case ADMIN_USERINFOR_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };
    case UPDATE_USERINFOR_REQUEST:
      return { ...state, isLoading: true, error: null };
    case UPDATE_USERINFOR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        updateUserAccount: action.payload.data,
      };
    case UPDATE_USERINFOR_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };
    case DELETE_USERINFOR_REQUEST:
      return { ...state, isLoading: true, error: null };
    case DELETE_USERINFOR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        updateUserAccount: action.payload.data,
      };
    case DELETE_USERINFOR_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };
    case ADD_USERINFOR_REQUEST:
      return { ...state, isLoading: true, error: null };
    case ADD_USERINFOR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        updateUserAccount: action.payload.data,
      };
    case ADD_USERINFOR_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };
    default:
      return state;
  }
}
