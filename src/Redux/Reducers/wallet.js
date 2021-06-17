import {
    WALLET_REQUEST,
    WALLET_SUCCESS,
    WALLET_FAILURE,
    ADD_MONEY_REQUEST,
    ADD_MONEY_SUCCESS,
    ADD_MONEY_FAILURE
  } from "../../constants/wallet";

  const initialState = {
    money: [],
    isLoading: false,
    error: null,
    updateMoney: []
  };





  
  //Xử lý LÂY TIÊN
  
  export function walletReducer(state = initialState, action) {
    switch (action.type) {
      case WALLET_REQUEST: {
        return { ...state, isLoading: true, error: null };
      }
      case WALLET_SUCCESS: {
        return { ...state, isLoading: false, money: action.payload.data };
      }
      case WALLET_FAILURE: {
        return { ...state, isLoading: false, error: action.payload.error };
      }
      case ADD_MONEY_REQUEST: {
        return { ...state, isLoading: true, error: null };
      }
      case ADD_MONEY_SUCCESS: {
        return { ...state, isLoading: false, updateMoney: action.payload.data };
      }
      case ADD_MONEY_FAILURE: {
        return { ...state, isLoading: false, updateMoney: action.payload.error };
      }
      default:
        return state;
    }
  }