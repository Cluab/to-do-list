import './style.css';

const tasks = () => {
  const list = [
    {
      description: 'fight bad guys',
      completed: true,
      index: 0,
    },
    {
      description: 'complete project',
      completed: false,
      index: 1,
    },
    {
      description: 'learn sass',
      completed: false,
      index: 2,
    },
  ];
  const mission = document.getElementById('mission');
  list.forEach((task) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const work = document.createElement('p');
    checkbox.type = 'checkbox';
    work.innerText = task.description;
    li.appendChild(checkbox);
    li.appendChild(work);
    mission.appendChild(li);
  });
};
tasks();
