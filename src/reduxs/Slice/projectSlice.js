import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "project",
  initialState: {
    isLoading: true,
    projectList: [],
  },
  reducers: {
    setProjectList(state, action) {
      state.projectList = action.payload;
    },

    doneLoading(state) {
      state.isLoading = false;
    },

    resetAll(state) {
      state.projectList = [];

      state.isLoading = true;
    },
  },
});

const { actions, reducer } = projectSlice;
export const { setProjectList, doneLoading, resetAll } = actions;
export default reducer;
