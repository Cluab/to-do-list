import ToDoInfo from '../modules/add.js';
import removeList from '../modules/edit.js';


describe('add tests', () => {
  document.body.innerHTML = '<div> <ul id="mission"> </ul> </div>';
  const list = [
    {
      description: 'wash car',
      completed: true,
      index: 1,
    },
    {
      description: 'wash dishes',
      completed: false,
      index: 2,
    },
  ];

  ToDoInfo.addToList(list[0]);
  ToDoInfo.addToList(list[1]);

  const listed = document.querySelectorAll('#mission li');
  test('Add one new item to the list', () => {
    expect(listed).toHaveLength(2);
  });
  
    removeList(listed);
     
    test('Delete all items from the list', () => {
      expect(listed).toHaveLength(1);
    });
});
