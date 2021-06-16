import {
    ADMIN_USERINFOR_REQUEST,
    ADMIN_USERINFOR_SUCCESS,
    ADMIN_USERINFOR_FAILURE,
    UPDATE_USERINFOR_REQUEST,
    UPDATE_USERINFOR_SUCCESS,
    UPDATE_USERINFOR_FAILURE
  } from "../constants/admin.js";

import adminAPI from '../Services/admin';

export default function getUserAccountByPage(pages) {
    return async (dispatch) => {
        dispatch({type: ADMIN_USERINFOR_REQUEST});
        try {
            const {data} = await adminAPI.getUser(pages);
            return dispatch({type: ADMIN_USERINFOR_SUCCESS, payload: {data}})
        } catch (error) {
            // Báo lỗi
            return dispatch({type: ADMIN_USERINFOR_FAILURE, payload: {error: error.response.data}})
        }
    }
}

export  function updateUserAccount(values) {
    return async (dispatch) => {
        dispatch({type: UPDATE_USERINFOR_REQUEST});
        try {
            const {data} = await adminAPI.updateUser(values);
            return dispatch({type: UPDATE_USERINFOR_SUCCESS, payload: {data}})
           
        } catch (error) {
            // Báo lỗi
            return dispatch({type: UPDATE_USERINFOR_FAILURE, payload: {error: error.response.data}})
        }
    }
}