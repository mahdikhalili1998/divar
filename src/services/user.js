import api from "../configs/configs";
const getUser = () => api.get("user/whoami").then((res) => res || false);

export { getUser };
