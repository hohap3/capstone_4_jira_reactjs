import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    taskList: [],
    isLoading: true,
  },
  reducers: {
    setTaskList(state, { payload }) {
      state.taskList = payload;
    },

    doneLoading(state) {
      state.isLoading = false;
    },
  },
});

const { actions, reducer } = taskSlice;

export const { setTaskList, doneLoading } = actions;
export default reducer;
