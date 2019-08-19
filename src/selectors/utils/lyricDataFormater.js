export default data => {
  if (data) {
    const dataFormated = [];
    const length = data.length;

    data.forEach((item, idx) => {
      dataFormated.push({
        ...item,
        timeEnd: length <= idx + 1 ? data[idx + 1].timeStart : 999999999,
      })
    });

    return dataFormated;
  }

  return data;
};
