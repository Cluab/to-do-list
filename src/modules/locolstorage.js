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
    console.log(list);
    list.forEach((lists, index) => {
      if (lists.completed === true) {
        console.log("hello");
        list.splice(index, 1);
      }
    });

    localStorage.setItem("list", JSON.stringify(list));
  };
}
