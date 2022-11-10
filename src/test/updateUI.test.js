import { call } from '../modules/edit.js';
import ToDoInfo from '../modules/add.js';

describe('test-2', () => {
  document.body.innerHTML = '<div> <ul id="mission"> </ul> </div>';
  const list = [
    {
      description: 'wash car',
      completed: true,
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
});
