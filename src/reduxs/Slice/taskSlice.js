import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    taskList: [],
    isLoading: true,
    isOpen: false,
    taskDetailModal: [],
  },
  reducers: {
    getTask() {},
    setTaskList(state, { payload }) {
      state.taskList = payload;
    },

    doneLoading(state) {
      state.isLoading = false;
    },
    ToggleModal(state, { payload }) {
      state.isOpen = payload;
    },
    setTaskDetail(state, { payload }) {
      state.taskDetailModal = payload;
    },
    changeTask(state, {payload}) {
      console.log("file: taskSlice.js:27 ~ payload:", payload)
      const {name,value} = payload
      return { ...state, taskDetailModal: { ...state.taskDetailModal,[name]:value } };
    },
  },
});

const { actions, reducer } = taskSlice;

export const { setTaskList, doneLoading, ToggleModal, setTaskDetail, getTask,changeTask } = actions;
export default reducer;
