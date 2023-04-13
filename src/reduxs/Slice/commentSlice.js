import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    commentList: [],
  },
  reducers: {
    layDanhSachComment: (state, { payload }) => {
      return {
        ...state,
        commentList: payload,
      };
    },
  },
});

export const {layDanhSachComment} = commentSlice.actions;
export default commentSlice.reducer
