import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./Slice/userSlice";
import categoryProjectReducer from "./Slice/projectCategorySlice";

const rootReducer = combineReducers({
  user: userReducer,
  projectCategory: categoryProjectReducer,
});

export default rootReducer;
