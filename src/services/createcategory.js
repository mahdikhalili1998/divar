import api from "configs/configs";

const createCategory = (data) => api.post("category", data);

const getCategory = () => api.get("category");

const deleteCategory = (id) => api.delete(`category/${id}`);


export { createCategory, getCategory, deleteCategory };
