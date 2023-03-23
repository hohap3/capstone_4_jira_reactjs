import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userLogin: null,
    hasRegister: false,
  },

  reducers: {
    insertUserLogin(state, action) {
      state.userLogin = action.payload;
    },

    registerSuccess(state) {
      state.hasRegister = true;
    },

    resetRegister(state) {
      state.hasRegister = false;
    },
  },
});

const { actions, reducer } = userSlice;
export const { insertUserLogin, registerSuccess, resetRegister } = actions;
export default reducer;
