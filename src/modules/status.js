// function to update the completes status when checkbox is checked
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
// updates the checkbox when page is reload
const check = () => {
  const retrieveData = localStorage.getItem('list');
  const checkbox = document.querySelectorAll('.checkedbox');
  let count = 0;
  checkbox.forEach((onebyone) => {
    const data = JSON.parse(retrieveData);
    onebyone.checked = data[count].completed;
    count += 1;
  });
};
export { status, check };
