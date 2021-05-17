import { combineReducers } from "redux";
import { authReducerGoogle, authReducerLogin, authReducerRegister } from './auth';
import streamerReducer from './streamer'

const rootReducer = combineReducers({
  //Chứa reducer child
  auth: authReducerLogin,
  streamer: streamerReducer,
  authRe: authReducerRegister,
  authGooogle: authReducerGoogle
});

export default rootReducer;
