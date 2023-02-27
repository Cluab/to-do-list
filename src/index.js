import './style.css';
import Store from './modules/localstorage.js';
import ToDoInfo from './modules/add.js';
import { check } from './modules/status.js';

// Added input to active event listener improvements
const input = document.getElementById('input');
document.addEventListener('DOMContentLoaded', ToDoInfo);
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    if (input.value === '') return;
    event.preventDefault();
    const addedWork = input.value;
    const list = new ToDoInfo(addedWork);
    Store.getlist();
    Store.addlist(list);
    ToDoInfo.addToList(list);
    // Empty's the value of the input
    input.value = '';
  }
});

// Retrieves any data from local storage
const retrieveData = localStorage.getItem('list');
const body = document.querySelector('body');
body.onload = () => {
  if (retrieveData) {
    const previousData = JSON.parse(retrieveData);
    for (let i = 0; i < previousData.length; i += 1) {
      ToDoInfo.addToList(previousData[i]);
    }
    check();
  }
};

// Actives the clear button when it's clicked
document.querySelector('.clear').addEventListener('click', () => {
  const list = Store.getlist();
  ToDoInfo.deletetask();
  Store.removework(list);
});
