import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userLogin: null,
  },

  reducers: {
    insertUserLogin(state, action) {
      state.userLogin = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const { insertUserLogin } = actions;
export default reducer;
