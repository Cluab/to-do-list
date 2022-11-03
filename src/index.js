import './style.css';
import Store from './modules/locolstorage.js';
import ToDoInfo from './modules/add.js';
import { check } from './modules/status.js';

// added input to active event listener
const input = document.getElementById('input');
document.addEventListener('DOMContentLoaded', ToDoInfo);
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    if (input.value === '') return;
    event.preventDefault();
    const addedwork = input.value;
    const retrieveData = localStorage.getItem('list');
    // created the index for Local storage
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
    // empty's the value of the input
    input.value = '';
  }
});

// retrieves any data from local storage
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

// actives the clear button when it clicked
document.querySelector('.clear').addEventListener('click', () => {
  ToDoInfo.deletetask();
  Store.removework();
});
