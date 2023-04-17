import https from "./https";

const taskAPI = {
  getAll() {
    const url = `TaskType/getAll`;
    return https.get(url);
  },
  updateStatus(data){
    const url = `Project/updateStatus`;
    return https.put(url,data);
  },
  updatePriority(data){
    const url = `Project/updatePriority`;
    return https.put(url,data);
  },
  updateDescription(data){
    
    console.log("file: taskAPI.js:17 ~ data:", data)
    const url = `Project/updateDescription`;
    return https.put(url,data);
  },
  updateTask(data){
    return https.post("Project/updateTask",data)
  }
};

export default taskAPI;
