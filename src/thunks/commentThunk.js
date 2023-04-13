import commentAPI from "API/commentAPI";
import { STATUS_CODE } from "constants";
import { layDanhSachComment } from "reduxs/Slice/commentSlice";
import { doneLoading } from "reduxs/Slice/taskSlice";

export function fetchCommentList(taskId) {
  return async function (dispatch) {
    try {
      const res = await commentAPI.getAllComment(taskId);
      console.log("file: commentThunk.js:9 ~ res:", res)

      const { statusCode, content } = res.data;

      if (statusCode === STATUS_CODE.SUCCESS) {
        dispatch(doneLoading());
        dispatch(layDanhSachComment(content));
      }
    } catch (error) {
      console.log(error);
    }
  };
}
export function updateComment(data) {
  return async function (dispatch) {
    try {
      const res = await commentAPI.updateComment(data);
      console.log("file: commentThunk.js:27 ~ res:", res)

      const { statusCode, content } = res.data;

      // if (statusCode === STATUS_CODE.SUCCESS) {
      //   dispatch(doneLoading());
      //   dispatch(layDanhSachComment(content));
      // }
    } catch (error) {
      console.log(error);
    }
  };
}
