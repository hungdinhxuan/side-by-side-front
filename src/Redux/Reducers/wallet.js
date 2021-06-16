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
  };

  const initialStateAddMoney = {
    addMoney: [],
    isLoading: false,
    error: null,
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
      default:
        return state;
    }
  }

  //Xử lý NẠP TIỀN
  export function walletAddReducer(state = initialStateAddMoney, action) {
    switch (action.type) {
      case ADD_MONEY_REQUEST: {
        return { ...state, isLoading: true, error: null };
      }
      case ADD_MONEY_SUCCESS: {
        return { ...state, isLoading: false, addMoney: action.payload.data };
      }
      case ADD_MONEY_FAILURE: {
        return { ...state, isLoading: false, error: action.payload.error };
      }
      default:
        return state;
    }
  }