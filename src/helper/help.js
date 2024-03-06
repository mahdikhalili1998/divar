const openInfo = (data, selectedId) => {
  const finder = data.filter((item) => item._id !== selectedId);
  // console.log(finder);
  return finder;
};
export { openInfo };
