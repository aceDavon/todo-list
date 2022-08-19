import { Delete, Update } from '../Controller/controller.js';

export const Edit = () => {
  const items = document.querySelectorAll('.list-item');
  items.forEach((el, i) => {
    el.addEventListener('click', () => {
      const data = JSON.parse(localStorage.getItem('todo'));
      const target = document.querySelectorAll('.list-item');
      const input = document.querySelectorAll('.hidden');

      data.map((x) => {
        target[i].innerHTML = '';
        input[i].classList.add('show');
        input[i].value = x.description;
        input[i].id = 'edit';
        target[i].classList.add('hide');
        const inputValue = document.getElementById('edit');
        inputValue.addEventListener('focusout', () => {
          const { value } = inputValue;
          Update(i + 1, value);
          window.location.reload();
        });
      });
    });
  });
};

export const resetId = () => {
  const local = JSON.parse(localStorage.getItem('todo'));
  const arr = [];

  local.forEach((item) => {
    const newId = { ...item, id: arr.length + 1 };
    arr.push(newId);
    localStorage.setItem('todo', JSON.stringify(arr));
  });
};

export const Complete = (id) => {
  const local = JSON.parse(localStorage.getItem('todo'));

  local.forEach((item) => {
    if (item.id == id) {
      if (!item.completed) {
        item.completed = !item.completed;
      }
    }
    localStorage.setItem('todo', JSON.stringify(local));
  });
};

export const Remove = (e, id) => {
  const local = JSON.parse(localStorage.getItem('todo'));
  const btn = document.getElementById('clear');

  if (local.length > 1) {
    btn.addEventListener('click', () => {
      e.preventDefault();
      Delete(id);
      window.location.reload();
    });
  } else {
    localStorage.removeItem('todo');
    window.location.reload();
  }
  Complete(id);
};
