// Practice Problems: Immediately Invoked Function Expressions
// Let's get some practice working with IIFEs.

// Will the following code execute without error?
// Try to answer without running it.

// function() {
//   console.log("Sometimes, syntax isn't intuitive!");
// }();

// there will be an error, because the () is unexpected
// and the function isn't declared with a name


// Rewrite the example from the previous so that it executes without error.
// (function() {
//   console.log("Sometimes, syntax isn't intuitive!");
// })();


// The code below throws an error:
// var sum = 0;
// sum += 10;
// sum += 31;

// let numbers = [1, 7, -3, 3];

// function sum(arr) {
//   return arr.reduce((sum, number) => {
//     sum += number;
//     return sum;
//   }, 0);
// }

// sum += sum(numbers);  // ?

// Why does this code produce an error? Correct the problem by using an IIFE.
// sum is not a function (hoisted sum = undefined...,
// sum = function, sum = 0, blah blah blah)

// var sum = 0;
// sum += 10;
// sum += 31;

// let numbers = [1, 7, -3, 3];

// sum += (function(arr) {
//   return arr.reduce((sum, number) => {
//     sum += number;
//     return sum;
//   }, 0);
// })(numbers);

// console.log(sum);


// Consider the following code and output:
// > countdown(7)
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

// Replace the invocation of countdown with an
// IIFE that produces the same results.
// ((num) => {
//   for (num; num >= 0; num -= 1) {
//     console.log(num);
//   }
// })(7);
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0


// Is the named function inside in this IIFE accessible in the global scope?

// (function foo() {
//   console.log('Bar');
// })();

// foo() // ?
// no, it's in private scope


// Consider the following code from a practice problem in an earlier lesson:

// function foo(start) {
//   let prod = start;
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// }

// let bar = foo(2);
// let result = bar(3);
// result += bar(4);
// result += bar(5);
// console.log(result);

// Rewrite this code using an IIFE.
// Your solution should no longer need the name foo.
// let bar = (function(start) {
//   let prod = start;
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// })(2);

// let result = bar(3);
// result += bar(4);
// result += bar(5);
// console.log(result);


// For an extra challenge, refactor the solution to
// problem 4 using recursion. Bear in mind that named
// functions created as IIFEs can be referenced by
// those same functions. That is, you can call use a
// function's name in the body of the IIFE. Don't
// worry if you can't solve this problem; it's a
// bit tricky.

(function recursiveCountdown(num) {
  if (num >= 0) {
    console.log(num);
    recursiveCountdown(num - 1);
  }
})(7);