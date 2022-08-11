import { local } from '..';
import { resetId } from '../Actions/actions';
import Appendage from '../View/view';

const Create = () => {
  const inputValue = document.getElementById('addNew');
  const btn = document.getElementById('submit');
  let arr = JSON.parse(localStorage.getItem('todo'));

  btn.addEventListener('click', () => {
    const obj = {};

    obj.completed = false;
    obj.description = inputValue.value;
    obj.id = arr !== null && arr.length + 1;
    if (arr !== null) {
      arr.push(obj);
    } else {
      arr = [obj];
    }
    saveLocal(arr);
    window.location.reload();
  });
};

const Read = ({ styles, kebab, parent, child }) => {
  if (local) {
    for (let i = 0; i <= local.length - 1; i++) {
      const tasks = local[i];
      const others = [styles, tasks, kebab];
      Appendage(parent, child, others);
    }
  } else {
    styles = 'empty';
    InitialState({ styles, parent, child });
  }
};

const InitialState = ({ styles, parent, child }) => {
  const tasks = { description: 'Please add a task to your list' };
  const others = [styles, tasks];
  return Appendage(parent, child, others);
};

const saveLocal = (data) => {
  let local = JSON.parse(localStorage.getItem('todo'));

  if (local === null) {
    localStorage.setItem('todo', JSON.stringify(data));
  } else {
    data.map((x, i) => {
      x.id = i + 1;
      local.push(x);
    });
    localStorage.setItem('todo', JSON.stringify(data));
    document.location.reload();
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
      const newData = data.map((x) =>
        x.id === id + 1 ? { ...x, description: inputValue.value } : x
      );
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
      return;
    }
  });
};

export { Create, Read, Update, Delete, InitialState };
