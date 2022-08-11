import './index.css';
import kebab from './img/kebab.svg';
import Return from './img/return.svg';
import ElementCreator, { NewTextNode } from './Controller/ElementCreator.js';
import { Create, Read } from './Controller/controller.js';

function component() {
  const parent = ElementCreator('ul');
  const container = ElementCreator('div');
  const inputField = ElementCreator('input');
  const returnIcon = ElementCreator('img');
  const child = 'li';
  const styles = 'list-item';
  const header = ElementCreator('span');
  const footer = ElementCreator('footer');
  const btn = ElementCreator('button');
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
  container.appendChild(returnIcon);
  container.appendChild(inputField);
  container.setAttribute('class', 'input-content');
  parent.appendChild(header);
  parent.appendChild(container);
  Read({
    styles, kebab, parent, child,
  });
  parent.appendChild(footer);
  Create();
}

component();
