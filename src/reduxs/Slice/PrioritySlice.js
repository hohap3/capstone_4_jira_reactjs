import { createSlice } from "@reduxjs/toolkit";

const prioritySlice = createSlice({
  name: "priority",
  initialState: {
    isLoading: true,
    priorityList: [],
  },
  reducers: {
    doneLoading(state) {
      state.isLoading = false;
    },

    setPriorityList(state, { payload }) {
      state.priorityList = payload;
    },
  },
});

const { actions, reducer } = prioritySlice;
export const { setPriorityList, doneLoading } = actions;
export default reducer;
