import './index.css';
import Appendage from './common/appendage.js';
import kebab from './img/kebab.svg';

function component() {
  const data = [
    { completed: false, description: 'Refactor code to ES6 modules', id: 1 },
    { completed: false, description: 'Refactor code to ES6 modules', id: 1 },
    { completed: false, description: 'Refactor code to ES6 modules', id: 1 },
    { completed: false, description: 'Refactor code to ES6 modules', id: 1 },
  ];
  const parent = document.createElement('ul');
  const inputField = document.createElement('input');
  const child = 'li';
  const styles = 'list-item';
  const header = document.createElement('span');
  const footer = document.createElement('footer');
  const btn = document.createElement('button');
  btn.id = 'clear';
  btn.innerText = 'clear all Complete';
  footer.appendChild(btn);
  const txt = document.createTextNode("Today's List");
  header.appendChild(txt);
  parent.classList.add('list');
  inputField.setAttribute('type', 'text');
  inputField.id = 'addNew';
  inputField.placeholder = 'Add to your list';
  parent.appendChild(header);
  parent.appendChild(inputField);

  data.map((tasks) => {
    const others = [styles, tasks, kebab];
    return Appendage(parent, child, others);
  });
  parent.appendChild(footer);
}

component();
