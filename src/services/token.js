import { getCookis } from "util/cooki";
import api from "configs/configs";
const newToken = async () => {
  const refreshToken = getCookis("refreshToken");
  if (!refreshToken) return;
  try {
    const response = await api.post("auth/check-refresh-token", {
      refreshToken,
    });
    return { response };
  } catch (error) {
    return { error };
  }
};
export { newToken };
