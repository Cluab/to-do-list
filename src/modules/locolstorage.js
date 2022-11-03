// here is where i created the local storage functions
export default class Store {
  // get the local storage tasks or create an empty array
  static getlist = () => {
    let list;
    if (localStorage.getItem('list') === null) {
      list = [];
    } else {
      list = JSON.parse(localStorage.getItem('list'));
    }
    return list;
  };

  // add new tasks to arry

  static addlist = (works) => {
    const list = Store.getlist();
    list.push(works);
    localStorage.setItem('list', JSON.stringify(list));
  };

  // remove tasks from array

  static removework = () => {
    const list = Store.getlist();
    for (let i = 0; i < list.length; i += 1) {
      if (list[i].completed === true) {
        // remove any completed with true
        list.splice(i, 1);
      }
    }
    // make sure that any left over completed are removed
    if (list.length === 0 || list[0].completed === true) {
      list.splice(0, 1);
    } else if (list.length === 1 || list[1].completed === true) {
      // make sure that any left over completed are removed
      list.splice(1, 1);
    }
    for (let j = 0; j < list.length; j += 1) {
      // fixes index number of and left list
      if (list[j].index > 1) {
        list[j].index = j + 1;
      }
    }
    // set new array as local storage
    localStorage.setItem('list', JSON.stringify(list));
  };
}
