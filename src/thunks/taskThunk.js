import taskAPI from "API/taskAPI";
import { STATUS_CODE } from "constants";
import { doneLoading, setTaskList } from "reduxs/Slice/taskSlice";

export function fetchTaskList() {
  return async function (dispatch) {
    try {
      const res = await taskAPI.getAll();

      const { statusCode, content } = res.data;

      if (statusCode === STATUS_CODE.SUCCESS) {
        dispatch(doneLoading());
        dispatch(setTaskList(content));
      }
    } catch (error) {
      console.log(error);
    }
  };
}
