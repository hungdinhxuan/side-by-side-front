import {
  PAYMENT_REQUEST,
  PAYMENT_FAILURE,
  PAYMENT_SUCCESS,
  LOAD_PAYMENT_REQUEST,
  LOAD_PAYMENT_FAILURE,
  LOAD_PAYMENT_SUCCESS,
} from "../constants/payment";

import paymentAPI from "../Services/payment";

export function postPaymentByNumber(card_number) {
  return async (dispatch) => {
    dispatch({ type: PAYMENT_REQUEST });
    try {
      const { data } = await paymentAPI.postPayment(card_number);
      //   console.log(data.profile);
      dispatch({ type: PAYMENT_SUCCESS, payload: { data } });
    } catch (error) {
      // Báo lỗi
      dispatch({
        type: PAYMENT_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}

export function getPaymentByNumber() {
  return async (dispatch) => {
    dispatch({ type: LOAD_PAYMENT_REQUEST });
    try {
      const { data } = await paymentAPI.getPayment();
        console.log(data);
      dispatch({ type: LOAD_PAYMENT_SUCCESS, payload: { data } });
    } catch (error) {
      // Báo lỗi
      dispatch({
        type: LOAD_PAYMENT_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
