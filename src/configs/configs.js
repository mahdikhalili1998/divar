import axios from "axios";
import { getCookis } from "util/cooki";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { "content-Type": "application/json" },
});

api.interceptors.request.use(
  (req) => {
    const accessToken = getCookis("accessToken");
    if (accessToken) {
      req.headers["Authorization"] = `bearer ${accessToken}`;
    }
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default api;
