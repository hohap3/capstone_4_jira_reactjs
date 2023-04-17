import taskAPI from "API/taskAPI";
import { STATUS_CODE } from "constants";
import { doneLoading, setTaskList } from "reduxs/Slice/taskSlice";
import { fetchProjectDetail, fetchTaskDetail } from "./projectThunk";
import { fetchPriorityList } from "./priorityThunk";

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
export function updateTaskStatus({projectId,...rest}) {
  return async function (dispatch) {
    try {
      const res = await taskAPI.updateStatus(rest);
      const { statusCode } = res.data;

      if (statusCode === STATUS_CODE.SUCCESS) {
        dispatch(fetchProjectDetail(projectId))
        dispatch(fetchTaskDetail(rest.taskId))
        
      }
    } catch (error) {
      console.log(error);
    }
  };
}
export function updateTaskPriority({projectId,...rest}) {
  return async function (dispatch) {
    try {
      const res = await taskAPI.updatePriority(rest);
      const { statusCode } = res.data;
      
      if (statusCode === STATUS_CODE.SUCCESS) {
        dispatch(fetchProjectDetail(projectId))
        dispatch(fetchPriorityList())
        
      }
    } catch (error) {
      console.log(error);
    }
  };
}
export function updateTaskDescription({projectId,...rest}) {
  console.log("file: taskThunk.js:56 ~ rest:", rest)
  return async function (dispatch) {
    try {
      const res = await taskAPI.updateDescription({
        taskId:rest.data.taskId,
        description:rest.data.description,
      });
      const { statusCode } = res.data;
      
      if (statusCode === STATUS_CODE.SUCCESS) {
        dispatch(fetchProjectDetail(projectId))        
      }
    } catch (error) {
      console.log(error);
    }
  };
}
export function updateTask(data) {
  return async function (dispatch) {
    try {
      const res = await taskAPI.updateTask(data);
      
    } catch (error) {
      console.log(error);
    }
  };
}
