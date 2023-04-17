import commentAPI from "API/commentAPI";
import { STATUS_CODE } from "constants";
import { layDanhSachComment } from "reduxs/Slice/commentSlice";
import { changeTask, doneLoading } from "reduxs/Slice/taskSlice";

export function fetchCommentList(taskId) {
  return async function (dispatch) {
    try {
      const res = await commentAPI.getAllComment(taskId);

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
      const {content,statusCode} = res.data
    
      if (statusCode === STATUS_CODE.SUCCESS) {
        dispatch(fetchCommentList(content.taskId))
      }
    } catch (error) {
      console.log(error);
    }
  };
}
export function insertComment(data) {
  return async function (dispatch) {
    try {
      const res = await commentAPI.insertComment(data);
      const {content,statusCode} = res.data
    
      if (statusCode === STATUS_CODE.SUCCESS) {
        dispatch(fetchCommentList(content.taskId))
      }
    } catch (error) {
      console.log(error);
    }
  };
}
export function deleteComment({idComment,taskId,toast}) {
  return async function (dispatch) {
    try {
      const res = await commentAPI.deleteCommnent(idComment);
      const {statusCode} = res.data
    
      if (statusCode === STATUS_CODE.SUCCESS) {
        // toast.success("Xóa thành công!", {
        //   position: toast.POSITION.TOP_RIGHT,
        // });
        dispatch(fetchCommentList(taskId))
      }
    } catch (error) {
      console.log(error);
    }
  };
}
