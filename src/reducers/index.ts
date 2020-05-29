import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import expertReducer from "./expert";
import userReducer from "./user";

const appReducer = combineReducers({
  auth: authReducer,
  expert: expertReducer,
  user: userReducer,
});

export default appReducer;
