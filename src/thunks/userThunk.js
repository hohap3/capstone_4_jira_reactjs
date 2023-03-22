import userAPI from "API/userAPI";

export function fetchSignIn(data) {
  return async function (dispatch) {
    try {
      const res = await userAPI.signIn(data);

      // dispatch(insertUserLogin(res.da))
      console.log(res.data);
    } catch (error) {
      throw new Error(error);
    }
  };
}
