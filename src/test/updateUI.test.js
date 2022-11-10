import { call } from '../modules/edit.js';
import ToDoInfo from '../modules/add.js';
import { status } from '../modules/status.js';
import Store from '../modules/locolstorage.js';

// add test functions for checking the status and clear all completed

describe('test-2', () => {
  document.body.innerHTML = '<div> <ul id="mission"> </ul> </div>';
  const list = [
    {
      description: 'wash car',
      completed: false,
      index: 1,
    },
    {
      description: 'do HomeWork',
      completed: false,
      index: 2,
    },
    {
      description: 'complete todays project',
      completed: false,
      index: 3,
    },
  ];
  ToDoInfo.addToList(list[0]);
  ToDoInfo.addToList(list[1]);
  ToDoInfo.addToList(list[2]);
  const changedContent = document.querySelectorAll('#edit');
  changedContent.value = 'read newspaper';
  call(1, changedContent.value, list);
  test('Edit the task description', () => {
    expect(list[0].description).toBe('read newspaper');
  });

  const checked = document.querySelectorAll('.checkedbox');
  // made the checked boxes inside our li equel to true
  checked[0].checked = true;
  checked[2].checked = true;

  test('Edit the task completed', () => {
    status(1, checked[0].checked, list);
    expect(list[0].completed).toBe(true);
  });
  test('Edit the task completed', () => {
    status(2, checked[1].checked, list);
    expect(list[1].completed).toBe(false);
  });
  test('Edit the task completed', () => {
    status(3, checked[2].checked, list);
    expect(list[2].completed).toBe(true);
  });

  // test two is to check if our li is removed from the ul
  let listed = document.querySelectorAll('#mission li');
  test('Delete all items from the list', () => {
    ToDoInfo.deletetask();
    listed = document.querySelectorAll('#mission li');
    expect(listed).toHaveLength(1);
  });

  test('Delete checked items from the array', () => {
    Store.removework(list);
    expect(list).toHaveLength(1);
  });
});
