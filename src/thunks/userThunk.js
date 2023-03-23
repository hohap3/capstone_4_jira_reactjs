import userAPI from "API/userAPI";
import { ACCESS_TOKEN } from "constants";
import { insertUserLogin } from "reduxs/Slice/userSlice";
import Swal from "sweetalert2";

export function fetchSignIn(data) {
  return async function (dispatch) {
    try {
      const res = await userAPI.signIn(data);

      dispatch(insertUserLogin(res.data.content));

      localStorage.setItem(
        ACCESS_TOKEN,
        JSON.stringify({ access_token: res.data.content.accessToken })
      );
    } catch (error) {
      const { message } = error.response.data;

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${message}`,
      });
    }
  };
}
