import {
  WALLET_REQUEST,
  WALLET_SUCCESS,
  WALLET_FAILURE,
  ADD_MONEY_REQUEST,
  ADD_MONEY_SUCCESS,
  ADD_MONEY_FAILURE,
} from "../constants/wallet";
import walletAPI from "../Services/wallet";

export function getWalletByNumber() {
  return async (dispatch) => {
    dispatch({ type: WALLET_REQUEST });
    try {
      const { data } = await walletAPI.getWallet();
        console.log(data);
      dispatch({ type: WALLET_SUCCESS, payload: { data } });
    } catch (error) {
      // Báo lỗi
      dispatch({
        type: WALLET_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}

export function patchWalletByNumber(values) {
  return async (dispatch) => {
    dispatch({ type: ADD_MONEY_REQUEST });
    try {
      const { data } = await walletAPI.patchWallet(values);
      // console.log(data);
      dispatch({ type: ADD_MONEY_SUCCESS, payload: { data } });
    } catch (error) {
      // Báo lỗi
      dispatch({
        type: ADD_MONEY_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
