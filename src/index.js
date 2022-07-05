// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './styles.css';

const toDoData = [
  {
    description: 'study javascript in-depth',
    completed: false,
    index: 1,
  },
  {
    description: 'check my emails',
    completed: true,
    index: 2,
  },
  {
    description: 'read my book',
    completed: false,
    index: 3,
  },
  {
    description: 'working on my coding skills',
    completed: false,
    index: 4,
  },
];

const data = () => {
  const content = document.querySelector('lists');
  for (let i = 0; i < toDoData.length; i += 1) {
    const todo = document.createElement('div');
    todo.classList.add('list-info');
    todo.innerHTML = `
       <div class="check">
  <input type="checkbox">
  <h2>${toDoData[i].description}</h2>
  </div>
  <div class="icon">
  <i class="fa-solid fa-ellipsis-vertical"></i>
  </div>
    `;
    content.appendChild(todo);
  }
};

data();
