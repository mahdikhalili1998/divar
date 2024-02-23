import api from "./configs";

const getUser = () => api.get("user/whoami");

export { getUser };
