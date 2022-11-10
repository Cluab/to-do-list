import ToDoInfo from '../modules/add.js';
// imported ToDoInfo class from add.jd file

// wraped our test with a describe
describe('test-1', () => {
  // added some Dom minaplaytion for our tests
  document.body.innerHTML = '<div> <ul id="mission"> </ul> </div>';
  // added an object array to mimic local storage
  const list = [
    {
      description: 'wash car',
      completed: false,
      index: 1,
    },
  ];
  // called the addtolist function
  ToDoInfo.addToList(list);

  let listed = document.querySelectorAll('#mission li');
  // test one is for checking if a li is added in our ul
  test('Add one new item to the list', () => {
    expect(listed).toHaveLength(1);
  });

  const removed = document.querySelector('.checkedbox');
  // made the checked boxes inside our li equel to true
  removed.checked = true;

  listed = document.querySelectorAll('#mission li');
  // test two is to check if our li is removed from the ul
  test('Delete all items from the list', () => {
    ToDoInfo.deletetask();
    listed = document.querySelectorAll('#mission li');
    expect(listed).toHaveLength(0);
  });
});
