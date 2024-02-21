const cookie = (tooken) => {
  document.cookie = `accessToken=${tooken.accessToken};max-age=${
    1 * 24 * 60 * 60
  }`;
  document.cookie = `refreshToken=${tooken.refreshToken};max-age=${
    30 * 24 * 60 * 60
  }`;
};
export { cookie };
