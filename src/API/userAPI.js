import { getAccessToken } from "utils";
import https from "./https";

const userAPI = {
  signIn(data) {
    const url = `Users/signin`;
    return https.post(url, data);
  },

  signUp(data) {
    const url = `Users/signup`;
    return https.post(url, data);
  },

  getUserList(keyword) {
    const access_token = getAccessToken();

    const url = `Users/getUser`;
    return https.get(url, {
      params: {
        keyword,
      },
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  },

  getUserByProjectId(idProject) {
    const url = `Users/getUserByProjectId`;
    const access_token = getAccessToken();

    return https.get(url, {
      params: {
        idProject,
      },
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  },
};

export default userAPI;
