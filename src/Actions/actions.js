import { Delete, Update } from '../Controller/controller';

export const Edit = () => {
  const items = document.querySelectorAll('.list-item');
  items.forEach((el, i) => {
    el.addEventListener('click', (e) => {
      Update(i);
    });
  });
};

export const Remove = (e, id) => {
  const local = JSON.parse(localStorage.getItem('todo'));
  const btn = document.getElementById('clear');

  if (local.length > 1) {
    btn.addEventListener('click', () => {
      e.preventDefault();
      Delete(id);
      resetId();
      window.location.reload();
    });
  } else {
    localStorage.removeItem('todo');
    window.location.reload();
  }
};

export const resetId = () => {
  const local = JSON.parse(localStorage.getItem('todo'));
  const arr = [];

  local.forEach((item) => {
    const newId = { ...item, id: arr.length + 1 };
    arr.push(newId);
    localStorage.setItem('todo', JSON.stringify(arr));
  });
  return;
};
