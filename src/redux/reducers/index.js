import { combineReducers } from "redux";
import authReducer from "./auth";
import bagReducer from "./bag";

const allReducers = combineReducers({
  auth: authReducer,
  bag: bagReducer,
});

export default allReducers;
