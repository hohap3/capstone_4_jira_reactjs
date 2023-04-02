import { priorityAPI } from "API/priorityAPI";
import { STATUS_CODE } from "constants";
import { setPriorityList } from "reduxs/Slice/PrioritySlice";

export function fetchPriorityList() {
  return async function (dispatch) {
    try {
      const res = await priorityAPI.getAll();

      const { content, statusCode } = res.data;

      if (statusCode === STATUS_CODE.SUCCESS) {
        dispatch(setPriorityList(content));
      }
    } catch (error) {
      console.log(error);
    }
  };
}
