import api from "configs/configs";

const createCategory = (data) => api.post("category", data);

const getCategory = () => api.get("category");

// const findCategoryForDelete = (idies) => {
// //   console.log(idies);
//   const find = idies.find((item) => console.log(item));
// //   console.log(find);
//   return find;
// };

const deleteCategory = (id) => api.delete(`category/${id}`);

export { createCategory, getCategory, deleteCategory };
