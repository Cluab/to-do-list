import "./style.css";
import { conformsTo } from "lodash";
import Store from "./modules/locolstorage.js";
import ToDoInfo from "./modules/add.js";
import { call } from "./modules/edit.js";

const input = document.getElementById("input");
document.addEventListener("DOMContentLoaded", ToDoInfo);
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    const addedwork = input.value;
    const retrieveData = localStorage.getItem("list");
    let ind = 1;
    if (retrieveData) {
      const previousData = JSON.parse(retrieveData);
      for (let i = 0; i < previousData.length; i += 1) {
        ind += 1;
      }
    }
    const list = new ToDoInfo(addedwork, ind);
    Store.getlist();
    Store.addlist(list);
    ToDoInfo.addToList(list);
    input.value = "";
  }
});

const retrieveData = localStorage.getItem("list");
const body = document.querySelector("body");
body.onload = () => {
  if (retrieveData) {
    const previousData = JSON.parse(retrieveData);
    for (let i = 0; i < previousData.length; i += 1) {
      ToDoInfo.addToList(previousData[i]);
    }
  }
};
document.querySelector(".clear").addEventListener("click", () => {
  ToDoInfo.deletetask();
  Store.removework();
});
