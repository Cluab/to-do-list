import { call } from "./edit.js";
export default class ToDoInfo {
  constructor(description, ind) {
    this.description = description;
    this.completed = false;
    this.index = ind;
  }

  static Add = (description) => {
    ToDoInfo(description);
  };

  static addToList = (list) => {
    const mission = document.getElementById("mission");
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const work = document.createElement("input");
    checkbox.type = "checkbox";
    work.type = "text";
    work.setAttribute("id", "edit");
    checkbox.setAttribute("id", list.index);
    work.addEventListener("input", () => {
      call(list.index, work.value);
    });
    checkbox.setAttribute("class", "checkedbox");
    work.value = list.description;
    li.appendChild(checkbox);
    li.appendChild(work);
    mission.appendChild(li);
  };

  static deletetask = () => {
    const retrieveData = localStorage.getItem("list");
    const data = JSON.parse(retrieveData);
    const checkbox = document.querySelectorAll(".checkedbox");
    let count = 0;
    checkbox.forEach((onebyone) => {
      if (onebyone.checked === true) {
        data[count].completed = onebyone.checked;
        onebyone.parentElement.remove();
        localStorage.setItem("list", JSON.stringify(data));
        count += 1;
      } else if (onebyone.checked === false) {
        data[count].completed = onebyone.checked;
        localStorage.setItem("list", JSON.stringify(data));
        count += 1;
      }
    });
  };
}
