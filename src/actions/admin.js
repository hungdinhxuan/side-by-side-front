import {
    ADMIN_USERINFOR_REQUEST,
    ADMIN_USERINFOR_SUCCESS,
    ADMIN_USERINFOR_FAILURE,
  } from "../constants/admin.js";

import adminAPI from '../Services/admin';

export default function getUserAccountByPage(pages) {
    return async (dispatch) => {
        dispatch({type: ADMIN_USERINFOR_REQUEST});
        try {
            const {data} = await adminAPI.getUser(pages);
            dispatch({type: ADMIN_USERINFOR_SUCCESS, payload: {data}})
        } catch (error) {
            // Báo lỗi
            dispatch({type: ADMIN_USERINFOR_FAILURE, payload: {error: error.response.data}})
        }
    }
}