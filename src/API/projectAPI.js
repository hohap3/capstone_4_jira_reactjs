import { ACCESS_TOKEN } from "constants";
import { getAccessToken } from "utils";
import https from "./https";

const projectAPI = {
  createProject(data) {
    const url = `Project/createProject`;
    return https.post(url, data);
  },

  createProjectAuthorize(data) {
    const access_token = getAccessToken();

    const url = `Project/createProjectAuthorize`;
    return https.post(url, data, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  },

  getAllProject(searchValue) {
    const url = `Project/getAllProject`;
    return https.get(url, {
      params: {
        keyword: searchValue,
      },
    });
  },

  removeProjectById(id) {
    const access_token = getAccessToken();

    const url = `Project/deleteProject`;
    return https.delete(url, {
      params: {
        projectId: id,
      },
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  },
};

export default projectAPI;
