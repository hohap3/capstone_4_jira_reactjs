import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userLogin: null,
    hasRegister: false,
    isLoading: false,
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
  },
});

const { actions, reducer } = userSlice;
export const { insertUserLogin, registerSuccess, resetRegister, setLoading } = actions;
export default reducer;
