const call = (index, value) => {
  const retrieveData = localStorage.getItem("list");
  const data = JSON.parse(retrieveData);

  for (let i = 0; i < data.length; i += 1) {
    if (data[i].index === index) {
      data[i].description = value;
      localStorage.setItem("list", JSON.stringify(data));
      console.log(data);
    }
  }
};
// eslint-disable-next-line import/prefer-default-export
export { call };
