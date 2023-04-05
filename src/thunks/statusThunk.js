import statusAPI from "API/statusAPI";
import { STATUS_CODE } from "constants";
import { doneLoading, setStatusList } from "reduxs/Slice/statusSlice";

export function fetchStatusList() {
  return async function (dispatch) {
    try {
      const res = await statusAPI.getAll();

      const { statusCode, content } = res.data;

      const { SUCCESS } = STATUS_CODE;

      if (statusCode === SUCCESS) {
        dispatch(doneLoading());
        dispatch(setStatusList(content));
      }
    } catch (error) {
      console.log(error);
    }
  };
}
