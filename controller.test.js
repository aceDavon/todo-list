/** * @jest-environment jsdom */
import { Create, Delete, local, Update } from './src/Controller/controller';
import { Complete } from './src/Actions/actions';

const localStorageMock = (() => {
  let store = {};

  return {
    getItem(key) {
      return store[key];
    },

    setItem(key, value) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();

global.localStorage = localStorageMock;

describe('Create and Read Data', () => {
  test('Data added', () => {
    const mockTodo = 'json data';

    const mockTodo2 = 'jso data';

    const expected = [
      {
        id: 1,
        description: 'json data',
        completed: false,
      },
      {
        description: 'jso data',
        id: 2,
        completed: false,
      },
    ];

    Create(mockTodo);
    Create(mockTodo2);
    expect(local()).toEqual(expected);
  });

  test('Change task status', () => {
    const expected = [
      {
        description: 'json data',
        id: 1,
        completed: true,
      },
      {
        description: 'jso data',
        id: 2,
        completed: false,
      },
    ];
    Complete(1);
    expect(local()).toStrictEqual(expected);
  });

  test('Data removed and IDs reset', () => {
    const expected = [
      {
        description: 'jso data',
        id: 1,
        completed: false,
      },
    ];
    Delete(1);
    expect(local()).toStrictEqual(expected);
  });
});

test('DOM manipulation', () => {

  const expected = [
    {
      description: 'Edited',
      id: 1,
      completed: false,
    },
  ];
  Update(1, 'Edited')
  expect(local()).toEqual(expected)
});
