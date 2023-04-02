import projectAPI from "API/projectAPI";
import { STATUS_CODE } from "constants";
import {
  doneLoading,
  setProjectDetail,
  setProjectList,
  startLoading,
} from "reduxs/Slice/projectSlice";

export function fetchAllProject() {
  return async function (dispatch) {
    try {
      dispatch(startLoading());

      const res = await projectAPI.getAllProject();

      const { statusCode } = res.data;
      if (statusCode === STATUS_CODE.SUCCESS) {
        dispatch(doneLoading());
        dispatch(setProjectList(res.data.content));
      }
    } catch (error) {
      console.log(error);
      dispatch(doneLoading());
    }
  };
}

export function fetchProjectDetail(projectId) {
  return async function (dispatch) {
    try {
      dispatch(startLoading());
      const res = await projectAPI.getProjectDetail(projectId);

      const { SUCCESS } = STATUS_CODE;
      const { content, statusCode } = res.data;

      if (statusCode === SUCCESS) {
        dispatch(doneLoading());
        dispatch(setProjectDetail(content));
      }
    } catch (error) {
      console.log(error);
    }
  };
}
