import './index.css';
import kebab from './img/kebab.svg';
import Return from './img/return.svg';
import { NewTextNode } from './Controller/ElementCreator.js';
import { Create, Read } from './Controller/controller.js';

function component() {
  const entry = document.getElementById('entry');
  const parent = document.getElementById('lists');
  const container = document.createElement('div');
  const inputField = document.createElement('input');
  const returnIcon = document.createElement('img');
  const header = document.createElement('span');
  const footer = document.createElement('footer');
  const btn = document.createElement('button');
  btn.id = 'clear';
  btn.innerText = 'clear all Complete';
  footer.appendChild(btn);
  const txt = NewTextNode("Today's List");
  header.appendChild(txt);
  parent.classList.add('list');
  inputField.setAttribute('type', 'text');
  inputField.id = 'addNew';
  inputField.placeholder = 'Add to your list';
  returnIcon.src = Return;
  returnIcon.id = 'submit';
  returnIcon.onclick = () => Create(inputField.value);
  container.appendChild(returnIcon);
  container.appendChild(inputField);
  container.setAttribute('class', 'input-content');

  parent.appendChild(header);
  parent.appendChild(container);
  Read(kebab);
  parent.appendChild(footer);
  entry.appendChild(parent);
  // Create();
}

component();
