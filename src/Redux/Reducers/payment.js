import React from "react";
import {
  PAYMENT_REQUEST,
  PAYMENT_FAILURE,
  PAYMENT_SUCCESS,
  LOAD_PAYMENT_REQUEST,
  LOAD_PAYMENT_FAILURE,
  LOAD_PAYMENT_SUCCESS,
} from "../../constants/payment";

const initialStatePost = {
  moneySend: [],
  isLoading: false,
  error: null,
};
const initialStateGet = {
  paymentGet: [],
  isLoading: false,
  error: null,
};
export function paymentPost(state = initialStatePost, action) {
  switch (action.type) {
    case PAYMENT_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case PAYMENT_SUCCESS: {
      return { ...state, isLoading: false, moneySend: action.payload.data };
    }
    case PAYMENT_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    default:
      return state;
  }
}

export function paymentGet(state = initialStateGet, action) {
  switch (action.type) {
    case LOAD_PAYMENT_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case LOAD_PAYMENT_SUCCESS: {
      return { ...state, isLoading: false, paymentGet: action.payload.data };
    }
    case LOAD_PAYMENT_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    default:
      return state;
  }
}
