import { getCookis } from "../util/cooki";
import api from "./configs";

const token = getCookis("accessToken");
const getUser = () =>
  api.get("user/whoami", { headers: { Authorization: `bearer ${token}` } });

export { getUser };
