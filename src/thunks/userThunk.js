import userAPI from "API/userAPI";
import { USER_LOGIN } from "constants";
import { STATUS_CODE } from "constants";
import { ACCESS_TOKEN } from "constants";
import { insertUserLogin, setLoading } from "reduxs/Slice/userSlice";
import Swal from "sweetalert2";

export function fetchSignIn(data) {
  return async function (dispatch) {
    try {
      dispatch(setLoading(true));

      const res = await userAPI.signIn(data);

      const { statusCode } = res.data;

      if (statusCode === STATUS_CODE.SUCCESS) {
        dispatch(setLoading(false));
        dispatch(insertUserLogin(res.data.content));
        localStorage.setItem(
          ACCESS_TOKEN,
          JSON.stringify({ access_token: res.data.content.accessToken })
        );

        const { email, avatar, name } = res.data.content;

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
