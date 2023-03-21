import { compose, configureStore } from "@reduxjs/toolkit";
import rootReducer from "reduxs/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
  reducer: rootReducer,
  composeEnhancers,
});

export default store;
