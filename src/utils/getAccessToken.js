import { ACCESS_TOKEN } from "constants";

export function getAccessToken() {
  const accessToken = JSON.parse(localStorage.getItem(ACCESS_TOKEN)) ?? {};

  const { access_token } = accessToken;

  return access_token;
}
