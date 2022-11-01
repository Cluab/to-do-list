import _ from "lodash";
import "./style.css";

let tasks = () => {
  let list = [
    {
      description: "fight bad guys",
      completed: true,
      index: 0,
    },
    {
      description: "complete project",
      completed: false,
      index: 1,
    },
    {
      description: "learn sass",
      completed: false,
      index: 2,
    },
  ];
  let mission = document.getElementById("mission");
  list.forEach((task) => {
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    let work = document.createElement("p");
    checkbox.type = "checkbox";
    work.innerText = task.description;
    li.appendChild(checkbox);
    li.appendChild(work);
    mission.appendChild(li);
  });
};
tasks();
