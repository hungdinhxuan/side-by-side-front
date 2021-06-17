import { combineReducers } from "redux";
import {
  authReducerGoogle,
  authReducerLogin,
  authReducerRegister,
} from "./auth";
import { paymentPost, paymentGet } from "./payment";
import playerReducer from "./player";
import streamerReducer from "./streamer";
import {walletReducer,walletAddReducer}  from './wallet'
import adminReducer from './admin'

const rootReducer = combineReducers({
  //Chứa reducer child
  auth: authReducerLogin,
  streamer: streamerReducer,
  authRe: authReducerRegister,
  authGooogle: authReducerGoogle,
  player: playerReducer,
  paymentGet,
  paymentPost,
  wallet: walletReducer,
  // walletAddReducer,
  admin: adminReducer
});

export default rootReducer;
