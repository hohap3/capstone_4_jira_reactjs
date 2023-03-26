import { createSlice } from "@reduxjs/toolkit";

const productCategorySlice = createSlice({
  name: "productCategory",
  initialState: {
    categoryProjectList: [],
  },
  reducers: {
    insertCategoryProjectList(state, action) {
      state.categoryProjectList = action.payload;
    },

    resetCategoryProjectList(state) {
      state.categoryProjectList = [];
    },
  },
});

const { actions, reducer } = productCategorySlice;
export const { insertCategoryProjectList, resetCategoryProjectList } = actions;
export default reducer;
