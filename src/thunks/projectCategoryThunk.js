import projectCategoryAPI from "API/projectCategoryAPI";
import { insertCategoryProjectList } from "reduxs/Slice/projectCategorySlice";

export function fetchProjectCategory() {
  return async function (dispatch) {
    try {
      const res = await projectCategoryAPI.getAll();

      dispatch(insertCategoryProjectList(res.data.content));
    } catch (error) {
      console.log(error);
    }
  };
}
