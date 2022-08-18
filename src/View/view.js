import { Edit, Remove } from '../Actions/actions.js';

function Appendage(kebab, id, description) {
  const childElement = document.createElement('li');
  const parent = document.getElementById('lists');

  const box = document.createElement('input');
  const edit = document.createElement('input');
  const img = document.createElement('img');
  img.setAttribute('src', kebab);
  box.type = 'checkbox';
  edit.type = 'text';
  box.setAttribute('class', 'complete');
  box.addEventListener('change', (e) => Remove(e, id));
  edit.setAttribute('class', 'hidden');
  childElement.classList.add('list-item');
  childElement.innerText = description;
  childElement.id = id;
  img.onclick = (e) => Edit(e);
  childElement.appendChild(box);
  childElement.appendChild(img);

  parent.appendChild(childElement);
  parent.appendChild(edit);
}

export default Appendage;
