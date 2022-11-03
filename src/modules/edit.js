// added the edit function so it changes the local storage description
const call = (index, value) => {
  const retrieveData = localStorage.getItem('list');
  const data = JSON.parse(retrieveData);

  for (let i = 0; i < data.length; i += 1) {
    if (data[i].index === index) {
      data[i].description = value;
      localStorage.setItem('list', JSON.stringify(data));
    }
  }
};
// disabled linter it said i make function as default export and if i do that cant use const or let
// eslint-disable-next-line import/prefer-default-export
export { call };
