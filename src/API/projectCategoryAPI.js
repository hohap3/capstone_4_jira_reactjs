import https from "./https";

const projectCategoryAPI = {
  getAll() {
    const url = `ProjectCategory`;
    return https.get(url);
  },
};

export default projectCategoryAPI;
