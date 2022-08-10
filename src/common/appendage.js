import ElementCreator from './ElementCreator';

function Appendage(el, child, others) {
  const [styles, tasks, kebab] = others;
  const { description } = tasks;
  const DomEntry = document.getElementById('entry');
  const childElement = ElementCreator(child);
  const box = ElementCreator('input');
  const img = ElementCreator('img');
  img.setAttribute('src', kebab);
  box.type = 'checkbox';
  box.setAttribute('class', 'complete');
  childElement.classList.add(styles);
  childElement.innerText = description;
  childElement.appendChild(box);
  childElement.appendChild(img);

  el.appendChild(childElement);
  DomEntry.appendChild(el);
}

export default Appendage;
