import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "status",
  initialState: {
    isLoading: true,
    statusList: [],
  },
  reducers: {
    setStatusList(state, action) {
      state.statusList = action.payload;
    },

    doneLoading(state) {
      state.isLoading = false;
    },
  },
});

const { actions, reducer } = taskSlice;
export const { setStatusList, doneLoading } = actions;
export default reducer;
