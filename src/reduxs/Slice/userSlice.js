import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userLogin: null,
    hasRegister: false,
    isLoading: false,
    userList: [],
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

    setLoading(state, action) {
      state.isLoading = action.payload;
    },

    setUserList(state, action) {
      state.userList = action.payload;
    },

    resetUserList(state) {
      state.userList = [];
    },

    logoutUser(state) {
      state.userLogin = null;
    },
  },
});

const { actions, reducer } = userSlice;
export const {
  insertUserLogin,
  registerSuccess,
  resetRegister,
  setLoading,
  setUserList,
  resetUserList,
  logoutUser,
} = actions;
export default reducer;
