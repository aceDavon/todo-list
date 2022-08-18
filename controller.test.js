/** * @jest-environment jsdom */
import { Create, Delete, local } from './src/Controller/controller';

const localStorageMock = (function () {
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
}());

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

  test('Data removed', () => {
    const expected = [
      {
        description: 'jso data',
        id: 2,
        completed: false,
      },
    ];
    Delete(1);
    expect(local()).toStrictEqual(expected);
  });
});
