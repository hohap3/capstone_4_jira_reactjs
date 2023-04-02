import { createSlice } from "@reduxjs/toolkit";

const prioritySlice = createSlice({
  name: "priority",
  initialState: {
    priorityList: [],
  },
  reducers: {
    setPriorityList(state, { payload }) {
      state.priorityList = payload;
    },
  },
});

const { actions, reducer } = prioritySlice;
export const { setPriorityList } = actions;
export default reducer;
