import { combineReducers } from "redux";
import { authReducerGoogle, authReducerLogin, authReducerRegister } from './auth';
import playerReducer from "./player";
import streamerReducer from './streamer'

const rootReducer = combineReducers({
  //Chứa reducer child
  auth: authReducerLogin,
  streamer: streamerReducer,
  authRe: authReducerRegister,
  authGooogle: authReducerGoogle,
  player: playerReducer
});

export default rootReducer;
