import { ACCESS_TOKEN } from "constants";
import https from "./https";

const projectAPI = {
  createProject(data) {
    const url = `Project/createProject`;
    return https.post(url, data);
  },

  createProjectAuthorize(data) {
    const accessToken = JSON.parse(localStorage.getItem(ACCESS_TOKEN)) ?? {};

    const { access_token } = accessToken;

    const url = `Project/createProjectAuthorize`;
    return https.post(url, data, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  },
};

export default projectAPI;
