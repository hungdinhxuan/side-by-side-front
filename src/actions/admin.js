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
} from "../constants/admin.js";

import adminAPI from "../Services/admin";

export default function getUserAccountByPage(pages) {
  return async (dispatch) => {
    dispatch({ type: ADMIN_USERINFOR_REQUEST });
    try {
      const { data } = await adminAPI.getUser(pages);
      return dispatch({ type: ADMIN_USERINFOR_SUCCESS, payload: { data } });
    } catch (error) {
      // Báo lỗi
      return dispatch({
        type: ADMIN_USERINFOR_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}

export function updateUserAccount(values) {
  return async (dispatch) => {
    dispatch({ type: UPDATE_USERINFOR_REQUEST });
    try {
      const { data } = await adminAPI.updateUser(values);
      return dispatch({ type: UPDATE_USERINFOR_SUCCESS, payload: { data } });
    } catch (error) {
      // Báo lỗi
      return dispatch({
        type: UPDATE_USERINFOR_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
export function deleteUserAccount(id) {
  return async (dispatch) => {
    dispatch({ type: DELETE_USERINFOR_REQUEST });
    try {
      const { data } = await adminAPI.deleteUser(id);
      return dispatch({ type: DELETE_USERINFOR_SUCCESS, payload: { data } });
    } catch (error) {
      // Báo lỗi
      return dispatch({
        type: DELETE_USERINFOR_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}

export function addUserAccount(values) {
  return async (dispatch) => {
    dispatch({ type: ADD_USERINFOR_REQUEST });
    try {
      const { data } = await adminAPI.addUser(values);
      console.log(data);
      return dispatch({ type: ADD_USERINFOR_SUCCESS, payload: { data } });
    } catch (error) {
      // Báo lỗi
      return dispatch({
        type: ADD_USERINFOR_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
