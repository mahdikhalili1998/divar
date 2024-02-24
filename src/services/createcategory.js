import api from "configs/configs";

const createCategory = (data) => api.post("category", data);
export { createCategory };
