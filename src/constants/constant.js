export const BASE_URL = "https://jiranew.cybersoft.edu.vn/api";
export const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzOCIsIkhldEhhblN0cmluZyI6IjA2LzA4LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5MTI4MDAwMDAwMCIsIm5iZiI6MTY2MjM5NzIwMCwiZXhwIjoxNjkxNDI3NjAwfQ.66mNB20qUNFA8TlIzjAq7Ekv1hVfR3hQB4I3_yLui8Y";

export const DEFAULT_VALUES_LOGIN = {
  email: "",
  passWord: "",
};

export const DEFAULT_VALUES_REGISTER = {
  email: "",
  passWord: "",
  retypePassword: "",
  name: "",
  phoneNumber: "",
};

export const VALUES_REGISTER = ["email", "passWord", "name", "phoneNumber"];
export const VALUES_PROJECT_UPDATE = ["id", "projectName", "creator", "description", "categoryId"];
export const ACCESS_TOKEN = "ACCESS_TOKEN";
export const USER_LOGIN = "USER_LOGIN";

export const STATUS_CODE = {
  SUCCESS: 200,
  ERROR_SERVER: 500,
  ERROR_UNAUTHORIZE: 401,
  ERROR_NOTFOUND: 404,
  ERROR_FORBIDDEN: 403,
};

export const TOAST_TYPE = {
  SUCCESS: "success",
  WARM: "warn",
  ERROR: "error",
  INFO: "info",
  DEFAULT: "default",
};
