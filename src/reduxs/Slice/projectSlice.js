import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "project",
  initialState: {
    isLoading: false,
    projectList: [],
    selectedProject: null,
  },
  reducers: {
    setProjectList(state, action) {
      state.projectList = action.payload;
    },

    startLoading(state) {
      state.isLoading = true;
    },

    doneLoading(state) {
      state.isLoading = false;
    },

    resetAll(state) {
      state.projectList = [];

      state.isLoading = true;
    },

    setSelectedProject(state, action) {
      state.selectedProject = action.payload;
    },

    resetSelectedProject(state) {
      state.selectedProject = null;
    },

    updateProjectList(state, action) {
      const { index, values } = action.payload;

      state.projectList[index] = { ...state.projectList[index], ...values };
    },
  },
});

const { actions, reducer } = projectSlice;
export const {
  setProjectList,
  doneLoading,
  resetAll,
  setSelectedProject,
  resetSelectedProject,
  startLoading,
  updateProjectList,
} = actions;
export default reducer;
