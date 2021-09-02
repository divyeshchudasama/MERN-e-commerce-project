import addUserData from "./user";
import addCartData from "./cart";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  addUserData: addUserData,
  addCartData: addCartData,
});

export default rootReducer;
