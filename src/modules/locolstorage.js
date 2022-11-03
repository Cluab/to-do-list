export default class Store {
  static getlist = () => {
    let list;
    if (localStorage.getItem("list") === null) {
      list = [];
    } else {
      list = JSON.parse(localStorage.getItem("list"));
    }
    return list;
  };

  static addlist = (works) => {
    const list = Store.getlist();
    list.push(works);
    localStorage.setItem("list", JSON.stringify(list));
  };

  static removework = () => {
    const list = Store.getlist();
    for (let i = 0; i < list.length; i += 1) {
      if (list[i].completed === true) {
        list.splice(i, 1);
      }
    }
    if (list.length === 0 || list[0].completed === true) {
      list.splice(0, 1);
    } else if (list.length === 1 || list[1].completed === true) {
      list.splice(1, 1);
    }
    for (let j = 0; j < list.length; j += 1) {
      if (list[j].index > 1) {
        list[j].index = j + 1;
      }
    }
    localStorage.setItem("list", JSON.stringify(list));
  };
}
