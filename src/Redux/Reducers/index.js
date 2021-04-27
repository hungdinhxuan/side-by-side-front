import { combineReducers } from "redux";
import authReducer from './auth';

const rootReducer = combineReducers({
  //Chứa reducer child
  auth: authReducer,
});

export default rootReducer;
