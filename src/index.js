import './index.css';
import Appendage from './common/appendage.js';
import kebab from './img/kebab.svg';
import Data from './data/tasks.js';
import ElementCreator, { NewTextNode } from './common/ElementCreator';

function component() {
  const parent = ElementCreator('ul');
  const inputField = ElementCreator('input');
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
  parent.appendChild(header);
  parent.appendChild(inputField);

  Data.map((tasks) => {
    const others = [styles, tasks, kebab];
    return Appendage(parent, child, others);
  });
  parent.appendChild(footer);
}

component();
