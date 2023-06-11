const getSortedData = (data, key) => {
  const sortedData = [...data].sort(function (a, b) {
    if (a[`${key}`] < b[`${key}`]) {
      return -1;
    }
    if (a[`${key}`] > b[`${key}`]) {
      return 1;
    }
    return 0;
  });
  return sortedData;
};

export { getSortedData };
