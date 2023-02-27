import { call } from '../modules/edit.js';
import ToDoInfo from '../modules/add.js';
import { status } from '../modules/status.js';
import Store from '../modules/localstorage.js';

// add test functions for checking the status and clear all completed

describe('test-2', () => {
  // create mock innerHTML for the test
  document.body.innerHTML = '<div> <ul id="mission"> </ul> </div>';
  // create mock localStorage for the test
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

  // Add the list of tasks to the innerHTML
  ToDoInfo.addToList(list[0]);
  ToDoInfo.addToList(list[1]);
  ToDoInfo.addToList(list[2]);
  const changedContent = document.querySelectorAll('#edit');
  // change the content of the innerHTML
  changedContent.value = 'read newspaper';
  call(1, changedContent.value, list);
  // test to check if the content is changed
  test('Edit the task description', () => {
    expect(list[0].description).toBe('read newspaper');
  });

  const checked = document.querySelectorAll('.checkedbox');
  // made the checked boxes inside our li equel to true
  checked[0].checked = true;
  checked[2].checked = true;
  // add test to check the status of each checked box
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
  // test to delete the completed tasks from the innerHTML
  let listed = document.querySelectorAll('#mission li');
  test('Delete all checked items from innerHTML', () => {
    ToDoInfo.deletetask();
    listed = document.querySelectorAll('#mission li');
    expect(listed).toHaveLength(1);
  });
  // Delete all checked items from the mocked local storage
  test('Delete checked items from the array', () => {
    Store.removework(list);
    expect(list).toHaveLength(1);
  });
});
