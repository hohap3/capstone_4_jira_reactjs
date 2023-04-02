import https from "./https";

const taskAPI = {
  getAll() {
    const url = `TaskType/getAll`;
    return https.get(url);
  },
};

export default taskAPI;
