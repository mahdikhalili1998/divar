const cookie = (tooken) => {
  document.cookie = `accessToken=${tooken.accessToken};max-age=${
    1 * 24 * 60 * 60
  }`;
  document.cookie = `refreshToken=${tooken.refreshToken};max-age=${
    30 * 24 * 60 * 60
  }`;
};
const getCookis = (cookiName) => {
  return document.cookie
    .split(";")
    .find((item) => item.trim().split("=")[0] === cookiName)
    ?.split("=")[1];
};
export { cookie, getCookis };
