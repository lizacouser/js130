"use strict";
// Practice Problems: Closures

// What do the 4 console.log statements at the end of this program print?
// Try to answer without running the code:

// let counter = 0;

// function makeCounter() {
//   return function() {
//     counter += 1;
//     return counter;
//   };
// }

// let incrementCounter = makeCounter(); // returns counter func, counter = 0;
// console.log(incrementCounter()); // logs 1, counter = 1
// console.log(incrementCounter()); // logs 2, counter = 2

// incrementCounter = makeCounter(); // returns counter function, counter = 2
// console.log(incrementCounter()); // logs 3, counter = 3
// console.log(incrementCounter()); // logs 4, counter = 4


// Let's modify our program a little by moving the let statement
// into the function returned by makeCounter.
// What do the 4 console.log statements at the end of this program print?
// Try to answer without running the code:

// function makeCounter() {
//   return function() {
//     let counter = 0;
//     counter += 1;
//     return counter;
//   };
// }

// let incrementCounter = makeCounter(); // counter = 0
// console.log(incrementCounter()); // counter = 1, logs 1
// console.log(incrementCounter()); // counter = 1, logs 1

// incrementCounter = makeCounter(); // counter = 0
// console.log(incrementCounter()); // counter = 1, logs 1
// console.log(incrementCounter()); // counter = 1, logs 1


// Let's move the variable declaration into makeCounter now.
// What do the 4 console.log statements at the end of this
// program print? Try to answer without running the code:

// function makeCounter() {
//   let counter = 0;

//   return function() {
//     counter += 1;
//     return counter;
//   };
// }

// let incrementCounter = makeCounter(); // counter = 0
// console.log(incrementCounter()); // counter = 1, logs 1
// console.log(incrementCounter()); // counter = 2, logs 2

// incrementCounter = makeCounter(); // counter = 0
// console.log(incrementCounter()); // counter = 1, logs 1
// console.log(incrementCounter()); // counter = 2, logs 2


// We'll now make some changes to how we create the output.
// What do the 4 console.log statements at the end of this
// program print? Try to answer without running the code:


// function makeCounter() {
//   let counter = 0;

//   return function() {
//     counter += 1;
//     return counter;
//   };
// }

// let incrementCounter1 = makeCounter();
// let incrementCounter2 = makeCounter();

// console.log(incrementCounter1()); // logs 1
// console.log(incrementCounter1()); // logs 2

// console.log(incrementCounter2()); // logs 1
// console.log(incrementCounter2()); // logs 2


// Write a function named makeMultipleLister that you
// can call with a number as an argument. The function
// should return a new function that, when invoked,
// logs every positive integer multiple of that number
// less than 100. It should work like this:

// function makeMultipleLister(num) {
//   return function() {
//     let multiplier = 1;
//     while ((multiplier * num) < 100) {
//       console.log(multiplier * num);
//       multiplier += 1;
//     }
//   };
// }

// let lister = makeMultipleLister(17);
// lister();

// // Output:
// // 17
// // 34
// // 51
// // 68
// // 85

// // A BETTER VERSION
// function makeMultipleLister(number) {
//   return () => {
//     for (let multiple = number; multiple < 100; multiple += number) {
//       console.log(multiple);
//     }
//   };
// }


// Write a program that uses two functions, add and
// subtract, to manipulate a running total. When you
// invoke either function with a number, it should add
// or subtract that number from the running total and
// log the new total to the console. It should work
// like this:

// let runningTotal = 0;

// function add(num) {
//   runningTotal += num;
//   console.log(runningTotal);
// }

// function subtract(num) {
//   runningTotal -= num;
//   console.log(runningTotal);
// }

// add(1);       // 1
// add(42);      // 43
// subtract(39); // 4
// add(6);       // 10


// Without running the following code, determine what
// value it logs on the last line. Explain how the
// program arrived at that final result.

// function foo(start) {
//   let prod = start;

//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// }

// let bar = foo(2); // returns a function where prod = 2
// let result = bar(3); // returns 2 * 3, prod = 6
// result += bar(4); // returns 6 * 4, prod = 24, result is 30
// result += bar(5); // returns 24 * 5, prod = 120, result is 150
// console.log(result); // logs 150


// Write a function named later that takes two arguments:
// a function and an argument for that function. The return
// value should be a new function that calls the input
// function with the provided argument, like this:

// function later(func, arg) {
//   return function() {
//     func(arg);
//   };
// }


// const logger = message => console.log(message);
// let logWarning = later(logger, "The system is shutting down!");
// logWarning(); // The system is shutting down!


// Write a function named later2 that takes two arguments: a
// function and an argument for that function. The return value
// should be a new function that also takes an argument. The new
// function should call the input function with the argument
// provided to later2 and the argument provided to the returned
// function. For example:

// function later2(func, arg) {
//   return function(newArg) {
//     func(arg, newArg);
//   };
// }

// const notify = function(message, when) {
//   console.log(`${message} in ${when} minutes!`);
// };

// let shutdownWarning = later2(notify, "The system is shutting down");
// shutdownWarning(30); // The system is shutting down in 30 minutes!


// The built-in Function.prototype.bind method performs partial
// function application by allowing you to specify some of the
// function's arguments when you invoke bind. It also permanently
// binds the new function to a specific execution context with its
// first argument. That binding is, in a sense, also an example of
// partial function application. Here, the "argument" we're applying
// to the function is the function's execution context.

// Write a function that emulates the context binding aspect of bind.
// That is, your version of bind should merely call the function with
// the desired context; it doesn't need to pass any arguments to the
// function. Here's how you can use your function:

function bind(context, func) {
  return () => func.call(context);
}

let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }

