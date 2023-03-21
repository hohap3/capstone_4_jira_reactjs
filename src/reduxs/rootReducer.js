import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./Slice/userSlice";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
