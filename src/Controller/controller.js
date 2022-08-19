import { resetId } from '../Actions/actions.js';
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
  document.location.reload();
};

export const CreateTask = (inputValue) => {
  const arr = JSON.parse(localStorage.getItem('todo')) || [];
  const obj = {};

  obj.completed = false;
  obj.description = inputValue;
  obj.id = arr.length + 1;
  arr.push(obj);

  saveLocal(arr);
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

const Update = (id, value) => {
  const newData = local().map((x) => {
    if (x.id === id) return { ...x, description: value };
    return x;
  });
  localStorage.setItem('todo', JSON.stringify(newData));
};

const Delete = (id) => {
  const local = JSON.parse(localStorage.getItem('todo'));
  const arr = [];
  local.forEach((item) => {
    if (item.id != id) {
      arr.push(item);
      localStorage.setItem('todo', JSON.stringify(arr));
      resetId();
    }
  });
};

export {
  Create, Read, Update, Delete, local,
};
