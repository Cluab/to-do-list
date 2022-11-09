import { call, removes, norm } from "./edit.js";
import { status } from "./status.js";
// here is where i created the to do list functions
const mission = document.getElementById("mission");
export default class ToDoInfo {
  // created constructor
  constructor(description, ind) {
    this.description = description;
    this.completed = false;
    this.index = ind;
  }

  static Add = (description) => {
    ToDoInfo(description);
  };

  // created the add function to html document
  static addToList = (list) => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const checkbox = document.createElement("input");
    const work = document.createElement("input");
    const icon = document.createElement("i");
    icon.setAttribute("class", "fa-solid fa-trash");
    div.setAttribute("class", "none");
    checkbox.type = "checkbox";
    work.type = "text";
    work.setAttribute("id", "edit");
    checkbox.setAttribute("id", list.index);
    // added the edit function so it changes in local storage description
    work.addEventListener("input", () => {
      call(list.index, work.value);
    });
    // updates the checkboxes in local storage
    checkbox.addEventListener("input", () => {
      status(list.index, checkbox.checked);
    });
    // added the show icon
    li.addEventListener("dblclick", () => {
      removes(list.index, li, work, div);
    });
    // added the remove icon
    li.addEventListener("click", () => {
      norm(list.index, li, work, div);
    });

    checkbox.setAttribute("class", "checkedbox");
    work.value = list.description;
    li.appendChild(checkbox);
    li.appendChild(work);
    div.appendChild(icon);
    li.appendChild(div);
    mission.appendChild(li);
  };
  // added the delete function from the list

  static deletetask = () => {
    const retrieveData = localStorage.getItem("list");
    const data = JSON.parse(retrieveData);
    const checkbox = document.querySelectorAll(".checkedbox");
    let count = 0;
    checkbox.forEach((onebyone) => {
      if (onebyone.checked === true) {
        // made sure that the value of check boxs changes the completed in local storage to true
        data[count].completed = onebyone.checked;
        onebyone.parentElement.remove();
        localStorage.setItem("list", JSON.stringify(data));
        count += 1;
      } else if (onebyone.checked === false) {
        // made sure that the value of check boxs changes the completed in local storage to false
        data[count].completed = onebyone.checked;
        localStorage.setItem("list", JSON.stringify(data));
        count += 1;
      }
    });
  };
}
