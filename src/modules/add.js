import { call, removes, norm } from './edit.js';
import { status } from './status.js';
// here is where i created the to do list functions

export default class ToDoInfo {
  // created constructor
  constructor(description, ind) {
    this.description = description;
    this.completed = false;
    this.index = ind;
  }

  // created the add function to html document
  static addToList = (list) => {
    const mission = document.getElementById('mission');
    const li = document.createElement('li');
    const div = document.createElement('div');
    const checkbox = document.createElement('input');
    const work = document.createElement('input');
    const icon = document.createElement('i');
    icon.setAttribute('class', 'fa-solid fa-trash');
    div.setAttribute('class', 'none');
    checkbox.type = 'checkbox';
    work.type = 'text';
    work.setAttribute('id', 'edit');
    checkbox.setAttribute('id', list.index);
    // added the edit function so it changes in local storage description
    work.addEventListener('input', () => {
      const retrieveData = localStorage.getItem('list');
      const data = JSON.parse(retrieveData);
      call(list.index, work.value, data);
      localStorage.setItem('list', JSON.stringify(data));
    });
    // updates the checkboxes in local storage
    checkbox.addEventListener('input', () => {
      const retrieveData = localStorage.getItem('list');
      const data = JSON.parse(retrieveData);
      status(list.index, checkbox.checked, data);
      localStorage.setItem('list', JSON.stringify(data));
    });
    // added the show icon
    li.addEventListener('dblclick', () => {
      removes(list.index, li, work, div);
    });
    // added the remove icon
    li.addEventListener('click', () => {
      norm(list.index, li, work, div);
    });

    checkbox.setAttribute('class', 'checkedbox');
    work.value = list.description;
    li.appendChild(checkbox);
    li.appendChild(work);
    div.appendChild(icon);
    li.appendChild(div);
    mission.appendChild(li);
  };
  // added the delete function from the list

  static deletetask = () => {
    const retrieveData = localStorage.getItem('list');
    const data = JSON.parse(retrieveData);
    const checkbox = document.querySelectorAll('.checkedbox');
    checkbox.forEach((onebyone) => {
      if (onebyone.checked === true) {
        // made sure that the value of check boxs changes the completed in local storage to true

        onebyone.parentElement.remove();
        localStorage.setItem('list', JSON.stringify(data));
      } else if (onebyone.checked === false) {
        // made sure that the value of check boxs changes the completed in local storage to false

        localStorage.setItem('list', JSON.stringify(data));
      }
    });
  };
}
