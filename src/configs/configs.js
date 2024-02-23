import axios from "axios";
import { getCookis } from "util/cooki";
import { newToken } from "../services/token";
import { cookie } from "../util/cooki";

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

api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    const firstRequest = error.config;

    if (error.response.status === 401 && !firstRequest._retry) {
      firstRequest._retry = true;
      const res = await newToken();
      if (!res?.response) return;
      cookie(res.response.data);
      return api(firstRequest);
    }
  }
);
export default api;
