// Practice Problems
// What side effects are present in the foo
// function in the following code?

const bar = 42;
let qux = [1, 2, 3];
let baz = 3;

function foo(arr) {
  let value = arr.pop(); // mutation of outside val
  console.log(`popped ${value} from the array`); // log statement
  return value + bar + baz;
}

foo(qux);

// Which of the following functions are pure
// functions?

// Function 1
// function sum(a, b) {
//   console.log(a + b); // no
//   return a + b;
// }

// Function 2
// function sum(a, b) { // yes?
//   a + b;
// }

// Function 3
// function sum(a, b) { // yes!
//   return a + b;
// }

// Function 4
// function sum(a, b) {
//   return a + b + Math.random(); // no
// }

// Function 5
// function sum(a, b) {
//   return 3.1415; // yes?
// }