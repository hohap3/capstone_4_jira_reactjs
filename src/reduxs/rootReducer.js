import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./Slice/userSlice";
import categoryProjectReducer from "./Slice/projectCategorySlice";
import projectReducer from "./Slice/projectSlice";

const rootReducer = combineReducers({
  user: userReducer,
  projectCategory: categoryProjectReducer,
  project: projectReducer,
});

export default rootReducer;
