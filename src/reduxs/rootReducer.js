import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./Slice/userSlice";
import categoryProjectReducer from "./Slice/projectCategorySlice";
import projectReducer from "./Slice/projectSlice";
import taskReducer from "./Slice/taskSlice";
import priorityReducer from "./Slice/PrioritySlice";

const rootReducer = combineReducers({
  user: userReducer,
  projectCategory: categoryProjectReducer,
  project: projectReducer,
  task: taskReducer,
  priority: priorityReducer,
});

export default rootReducer;
