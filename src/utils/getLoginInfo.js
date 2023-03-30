import { USER_LOGIN } from "constants";

export function getLoginInfo() {
  const loginInfo = JSON.parse(localStorage.getItem(USER_LOGIN)) ?? {};

  const { avatar, email, name } = loginInfo;

  return { avatar, email, name };
}
