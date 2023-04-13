import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    taskList: [],
    isLoading: true,
    isOpen: false,
    taskDetailModal: []
  },
  reducers: {
    setTaskList(state, { payload }) {
      state.taskList = payload;
    },

    doneLoading(state) {
      state.isLoading = false;
    },
    ToggleModal(state,{ payload }){
      state.isOpen = payload;
    },
    setTaskDetail(state,{payload}){
      state.taskDetailModal = payload
    }
  },
});

const { actions, reducer } = taskSlice;

export const { setTaskList, doneLoading,ToggleModal,setTaskDetail } = actions;
export default reducer;
