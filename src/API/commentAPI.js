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
  updateComment({id,contentComment}) {
    const url = `Comment/updateComment?id=${id}&contentComment=${contentComment}`;
    return https.put(url);
  },
  insertComment(data){
    const url = `Comment/insertComment`;
    return https.post(url,data)
  },
  deleteCommnent(data){
    const url = `Comment/deleteComment?idComment=${data}`;
    return https.delete(url,data)
  }
};

export default commentAPI;
