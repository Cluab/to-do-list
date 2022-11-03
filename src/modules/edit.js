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
// when double clicked on the li the icon appears
const removes = (index, li, work, icon) => {
  li.style.backgroundColor = 'antiquewhite';
  work.style.backgroundColor = 'antiquewhite';
  icon.setAttribute('class', 'show');
  icon.addEventListener('click', () => {
    const retrieveData = localStorage.getItem('list');
    const data = JSON.parse(retrieveData);
    for (let i = 0; i < data.length; i += 1) {
      if (data[i].index === index) {
        data.splice(i, 1);
      }
      for (let j = 0; j < data.length; j += 1) {
        // fixes index number of and left list
        if (data[j].index > 1) {
          data[j].index = j + 1;
        }
      }
      localStorage.setItem('list', JSON.stringify(data));
      icon.parentElement.remove();
    }
  });
};
// when single clicked on li icon disappear
const norm = (index, li, work, icon) => {
  li.style.backgroundColor = 'white';
  work.style.backgroundColor = 'white';
  icon.setAttribute('class', 'none');
};

export { call, removes, norm };
