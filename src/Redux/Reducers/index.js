import { combineReducers } from "redux";
import authReducer from './auth';
import streamerReducer from './streamer'

const rootReducer = combineReducers({
  //Chứa reducer child
  auth: authReducer,
  streamer: streamerReducer,
});

export default rootReducer;
