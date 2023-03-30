import userAPI from "API/userAPI";
import { USER_LOGIN } from "constants";
import { STATUS_CODE } from "constants";
import { ACCESS_TOKEN } from "constants";
import { insertUserLogin, setLoading, setUserList } from "reduxs/Slice/userSlice";
import Swal from "sweetalert2";

export function fetchSignIn(data) {
  return async function (dispatch) {
    try {
      dispatch(setLoading(true));

      const res = await userAPI.signIn(data);

      const { statusCode, content } = res.data;

      if (statusCode === STATUS_CODE.SUCCESS) {
        dispatch(setLoading(false));
        dispatch(insertUserLogin(content));
        localStorage.setItem(ACCESS_TOKEN, JSON.stringify({ access_token: content.accessToken }));

        const { email, avatar, name } = content;

        localStorage.setItem(USER_LOGIN, JSON.stringify({ email, avatar, name }));
      }
    } catch (error) {
      const { message } = error.response.data;

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${message}`,
      });

      dispatch(setLoading(false));
    }
  };
}

export function fetchUserList(keyword) {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));

      const res = await userAPI.getUserList(keyword);

      const { statusCode, content } = res.data;

      if (statusCode === STATUS_CODE.SUCCESS) {
        dispatch(setUserList(content));
        dispatch(setLoading(false));
      }
    } catch (error) {
      dispatch(setLoading(false));

      console.log(error);
    }
  };
}
