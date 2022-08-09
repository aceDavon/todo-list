function Appendage(el, child, others) {
  const [styles, tasks, kebab] = others;
  const { completed, description, id } = tasks;
  const DomEntry = document.getElementById('entry');
  const childElement = document.createElement(child);
  const box = document.createElement('input');
  const img = document.createElement('img');
  img.setAttribute('src', kebab);
  box.type = 'checkbox';
  box.setAttribute('class', 'complete');
  childElement.classList.add(styles);
  childElement.innerText = description;
  childElement.appendChild(box);
  childElement.appendChild(img);

  el.appendChild(childElement);
  DomEntry.appendChild(el);

  return;
}

export default Appendage;
