import ToDoInfo from '../modules/add.js';

describe('add tests', () => {
  document.body.innerHTML = '<div> <ul id="mission"> </ul> </div>';
  const list = [
    {
      description: 'wash car',
      completed: false,
      index: 1,
    },
  ];

  ToDoInfo.addToList(list);

  const listed = document.querySelectorAll('#mission li');
  test('Add one new item to the list', () => {
    expect(listed).toHaveLength(1);
  });
});
