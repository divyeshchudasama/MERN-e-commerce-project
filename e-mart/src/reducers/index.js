import addUserData from "./user";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  addUserData: addUserData,
});

export default rootReducer;
