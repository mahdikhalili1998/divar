import api from "configs/configs";
const getUser = () => api.get("user/whoami").then((res) => res || false);
const getPost = () => api.get("post/my");
export { getUser, getPost };
