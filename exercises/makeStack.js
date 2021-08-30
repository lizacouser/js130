// A stack is a compound data type like an array.
// The difference between an array and a stack is
// that in an array you can insert and remove
// elements in any order you want, but a stack has
// a rule whereby you can only add new elements at
// the end and remove the last inserted element.

// Create a function newStack, that, when called,
// returns a stack object with three methods: push,
// pop, and printStack. push takes a value and
// appends it to the stack. pop removes and returns
// the last element from the stack. printStack logs
// each remaining element of the stack on its own
// line, starting with the item that was least
// recently added to the stack and ending with the
// most recently added item.

// Internally, use an array to implement the stack.
// Make sure that the array is not accessible from
// outside the methods.

/*
P:
-input
-output object with methods
  -push, pop, printStack

E:
let stack = newStack()
stack.push(1);
stack.push(2);
stack.printStack();
// 1
// 2

stack.pop();
stack.push(10);
stack.printStack();
// 1
// 10

stack.pop();
stack.pop();
stack.printStack();
//

D:
-input n/a
-output obj
-internal array

A:
-declare function
-create closure with stack array
-write push
-pop
-print
-return object

*/


function newStack() {
  let stack = [];

  return {
    push(value) {
      stack.push(value);
    },

    pop(value) {
      stack.pop(value);
    },

    printStack() {
      stack.forEach(elem => console.log(elem));
    }
  };
}

let stack = newStack();
stack.push(1);
stack.push(2);
stack.printStack();
// 1
// 2

stack.pop();
stack.push(10);
stack.printStack();
// 1
// 10

stack.pop();
stack.pop();
stack.printStack();
//