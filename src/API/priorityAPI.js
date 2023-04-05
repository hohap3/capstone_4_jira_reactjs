import https from "./https";

export const priorityAPI = {
  getAll() {
    const url = `Priority/getAll`;
    return https.get(url);
  },
};
