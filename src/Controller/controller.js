import Appendage from '../View/view.js';

const local = () => JSON.parse(localStorage.getItem('todo'));

const saveLocal = (data) => {
  localStorage.setItem('todo', JSON.stringify(data));
};

const Create = (inputValue) => {
  const arr = JSON.parse(localStorage.getItem('todo')) || [];
  const obj = {};

  obj.completed = false;
  obj.description = inputValue;
  obj.id = arr.length + 1;
  arr.push(obj);

  saveLocal(arr);
  window.location.reload();
};

const Read = (kebab) => {
  if (local()) {
    const tasks = local();
    for (let i = 0; i <= tasks.length - 1; i++) {
      const { id, description } = tasks[i];
      Appendage(kebab, id, description);
    }
  }
};

const Update = (id) => {
  const data = JSON.parse(localStorage.getItem('todo'));
  const target = document.querySelectorAll('.list-item');
  const input = document.querySelectorAll('.hidden');

  data.map((x) => {
    target[id].innerHTML = '';
    input[id].classList.add('show');
    input[id].value = x.description;
    input[id].id = 'edit';
    target[id].classList.add('hide');
    const inputValue = document.getElementById('edit');
    inputValue.addEventListener('focusout', () => {
      const newData = data.map((x) => (x.id === id + 1
        ? { ...x, description: inputValue.value }
        : x));
      localStorage.setItem('todo', JSON.stringify(newData));
      window.location.reload();
    });
  });
};

const Delete = (id) => {
  const local = JSON.parse(localStorage.getItem('todo'));
  const arr = [];
  local.forEach((item) => {
    if (item.id != id) {
      arr.push(item);
      localStorage.setItem('todo', JSON.stringify(arr));
    }
  });
};

export {
  Create, Read, Update, Delete, local,
};
