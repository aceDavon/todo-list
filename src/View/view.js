import { Edit, Remove } from '../Actions/actions';
import { Update } from '../Controller/controller';
import ElementCreator from '../Controller/ElementCreator';

function Appendage(el, child, others) {
  const [styles, tasks, kebab] = others;
  const { description, id } = tasks;
  const DomEntry = document.getElementById('entry');
  const childElement = ElementCreator(child);

  const box = ElementCreator('input');
  const edit = ElementCreator('input');
  const img = ElementCreator('img');
  img.setAttribute('src', kebab);
  box.type = 'checkbox';
  edit.type = 'text';
  box.setAttribute('class', 'complete');
  box.addEventListener('change', (e) => Remove(e, id))
  edit.setAttribute('class', 'hidden');
  childElement.classList.add(styles);
  childElement.innerText = description;
  childElement.id = id;
  img.onclick = (e) => Edit(e);
  childElement.appendChild(box);
  childElement.appendChild(img);

  el.appendChild(childElement);
  el.appendChild(edit);
  DomEntry.appendChild(el);
}

export default Appendage;
