import { USER_LOGIN } from "constants";
import { USER_LOGIN_DEFAULT_VALUES } from "constants";

export function checkLoginDefault() {
  const user_login = localStorage.getItem(USER_LOGIN) ?? {};
  if (Object.keys(user_login).length < 1) return false;
  return Object.keys(user_login).every((key) => USER_LOGIN_DEFAULT_VALUES.includes(key));
}
