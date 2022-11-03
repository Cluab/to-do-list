const status = (index, value) => {
  const retrieveData = localStorage.getItem('list');
  const data = JSON.parse(retrieveData);

  for (let i = 0; i < data.length; i += 1) {
    if (data[i].index === index) {
      data[i].completed = value;
      localStorage.setItem('list', JSON.stringify(data));
      const retrieveData = localStorage.getItem('list');
      const stat = JSON.parse(retrieveData);
      value = stat[i].completed;
    }
  }
};
// disabled linter it said i make function as default export and if i do that cant use const or let
// eslint-disable-next-line import/prefer-default-export
export { status };
