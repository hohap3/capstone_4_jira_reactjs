import https from "./https";

const commentAPI = {
  getAllComment(taskId) {
    const url = `Comment/getAll`;
    return https.get(url,{
      params: {
        taskId
      },
    });
  },
  updateComment(data) {
    const url = `Comment/getAll`;
    return https.put(url,data);
  },
};

export default commentAPI;
