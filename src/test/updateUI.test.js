import { call } from '../modules/edit.js';
import ToDoInfo from '../modules/add.js';
import { status } from '../modules/status.js';

describe('test-2', () => {
  document.body.innerHTML = '<div> <ul id="mission"> </ul> </div>';
  const list = [
    {
      description: 'wash car',
      completed: false,
      index: 1,
    },
  ];
  ToDoInfo.addToList(list);
  const changedContent = document.querySelectorAll('#edit');
  changedContent.value = 'read newspaper';
  call(1, changedContent.value, list);
  test('Edit the task description', () => {
    expect(list[0].description).toBe('read newspaper');
  });

  const checked = document.querySelector('.checkedbox');
  // made the checked boxes inside our li equel to true
  checked.checked = true;
  status(1, checked.checked, list);
  test('Edit the task completed', () => {
    expect(list[0].completed).toBe(true);
  });
});
