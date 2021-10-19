/* eslint-disable max-lines-per-function */
const Todo = require('./todo');
const TodoList = require('./todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  // your tests go here
  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });

  test('calling toArray returns the list in array form', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  test('calling first returns first element of todos array', () => {
    expect(list.first()).toEqual(todo1);
  });

  test('calling last returns last element added to todos array', () => {
    expect(list.last()).toEqual(todo3);
  });

  test('calling shift removes and returns first todo element', () => {
    let shifted = list.shift();
    expect(shifted).toEqual(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test('calling pop removes and returns last todo element', () => {
    let popped = list.pop();
    expect(popped).toEqual(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });

  test('calling isDone returns true when all items in the list are done, false otherwise', () => {
    expect(list.isDone()).toBe(false);
    list.markAllDone();
    expect(list.isDone()).toBe(true);
  });

  test('TypeError occurs when you try to add non-Todo object to list', () => {
    expect(() => list.add({})).toThrow(TypeError);
    expect(() => list.add('hi')).toThrow(TypeError);
    expect(() => list.add(3)).toThrow(TypeError);
  });

  test('itemAt returns todo object at given index, or throws referenceError if index has no element', () => {
    expect(() => list.itemAt(4)).toThrow(ReferenceError);
    expect(list.itemAt(0)).toEqual(todo1);
    expect(list.itemAt(1)).toEqual(todo2);
  });

  test('markDoneAt marks todo as done at given index, returns referenceError if not element', () => {
    list.markDoneAt(0);
    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(false);
    expect(todo3.isDone()).toBe(false);
    expect(() => list.markDoneAt(4)).toThrow(ReferenceError);
  });

  test('markUndoneAt marks todo as undone at given index, returns referenceError if not element', () => {
    list.markAllDone();
    list.markUndoneAt(0);
    expect(todo1.isDone()).toBe(false);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(true);
    expect(() => list.markUndoneAt(4)).toThrow(ReferenceError);
  });

  test('markAllDone marks all todos as done', () => {
    list.markAllDone();
    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(true);
    expect(list.isDone()).toBe(true);
  });

  test('markAllUndone marks all todos as not done', () => {
    list.markAllDone();
    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(true);
    expect(list.isDone()).toBe(true);

    list.markAllUndone();
    expect(todo1.isDone()).toBe(false);
    expect(todo2.isDone()).toBe(false);
    expect(todo3.isDone()).toBe(false);
  });

  test('removeAt removes element at given index, and throws reference error if not a todo item', () => {
    list.removeAt(1);
    expect(list.toArray()).toEqual([todo1, todo3]);

    expect(() => list.removeAt(4)).toThrow(ReferenceError);
  });

  test('toString returns string representation of the list', () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym`;

    expect(list.toString()).toBe(string);
  });

  test('toString returns string representation of the list with todos checked', () => {
    list.markDoneAt(1);
    let string = `---- Today's Todos ----
[ ] Buy milk
[X] Clean room
[ ] Go to the gym`;

    expect(list.toString()).toBe(string);
  });

  test('toString returns string representation of the list when all todos checked', () => {
    let string = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`;

    list.markAllDone();
    expect(list.toString()).toBe(string);
  });

  test('forEach iterates over all todos', () => {
    let result = [];
    list.forEach(todo => result.push(todo));

    expect(result).toEqual([todo1, todo2, todo3]);
  });

  test('filter iterates over all todos and returns new filtered todolist object', () => {
    let filtered = list.filter(todo => todo.getTitle() === 'Buy milk');

    expect(filtered.toArray()).toEqual([todo1]);
  });

  test('allDone returns new filtered todolist object of done objects', () => {
    list.markDoneAt(1);

    expect(list.allDone().toArray()).toEqual([todo2]);
  });

  test('allNotDone returns new filtered todolist object of undone objects', () => {
    list.markDoneAt(1);

    expect(list.allNotDone().toArray()).toEqual([todo1, todo3]);
  });

  test('findByTitle returns todo object', () => {
    let milk = list.findByTitle('Buy milk');

    expect(milk).toEqual(todo1);
    expect(list.findByTitle("hello")).toBe(undefined);
  });

  test('markDone marks todo with given title as done', () => {
    list.markDone('Buy milk');

    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(false);
    expect(todo3.isDone()).toBe(false);
  });
});