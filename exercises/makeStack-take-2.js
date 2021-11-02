"use strict"

function newStack() {
  let stack = [];
  return {
    pop() {
      return stack.pop();
    },
    push(value) {
      stack.push(value);
    },
    printStack() {
      stack.forEach(elem => {
        console.log(elem);
      })
      // log remaining elements in stack
      // from least recently added to most recently added
    },
  }
}