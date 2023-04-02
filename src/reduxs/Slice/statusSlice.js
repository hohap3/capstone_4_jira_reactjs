import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "status",
  initialState: {
    statusList: [],
  },
  reducers: {
    setStatusList(state, action) {
      state.statusList = action.payload;
    },
  },
});

const { actions, reducer } = taskSlice;
export const { setStatusList } = actions;
export default reducer;
