import https from "./https";

const statusAPI = {
  getAll() {
    const url = `Status/getAll`;
    return https.get(url);
  },
};

export default statusAPI;
