import userAPI from "API/userAPI";
import { ACCESS_TOKEN } from "constants";
import { insertUserLogin, setLoading } from "reduxs/Slice/userSlice";
import Swal from "sweetalert2";

export function fetchSignIn(data) {
  return async function (dispatch) {
    try {
      dispatch(setLoading(true));

      const res = await userAPI.signIn(data);

      dispatch(insertUserLogin(res.data.content));
      dispatch(setLoading(false));

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

      dispatch(setLoading(false));
    }
  };
}
