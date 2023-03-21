import https from "./https";

const userAPI = {
  signIn(data) {
    const url = `Users/signin`;
    return https.post(url, data);
  },
};

export default userAPI;
