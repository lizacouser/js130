// myBind() Improved
// Our earlier implementation of Function.prototype.bind
// as myBind was simplistic. Function.prototype.bind has
// another trick up its sleeve besides hard-binding
// functions to context objects. It's called partial
// function application. Read the MDN documentation to
// learn more about partial function application.
// (We'll also cover it in a later course.)

// Alter the myBind function written in the previous
// exercise to support partial function application.

// function myBind(func, context) {
//   return function() {
//     return func.apply(context, arguments);
//   };
// }

// let numbers = [1,2,3];
// let combineNumbers = myBind([].join, numbers);

// console.log(combineNumbers('-'));

// my solution is wrong!!
// function makeBinder(func) {
//   return function(context, ...args) {
//     return func.apply(context, args);
//   };
// }

// let numbers = [1,2,3];
// let bindToJoin = makeBinder([].join);

// console.log(bindToJoin(numbers, '-'));

// official solutions
// function myBind(func, ctx) {
//   let partialArgs = [].slice.call(arguments, 2); // gets any additional arguments to myBind (5)

//   return function() {
//     let remainingArgs = [].slice.apply(arguments); // makes a copy of all arguments of bound function (10)
//     let fullArgs = partialArgs.concat(remainingArgs); // [args passed to myBind, args passed to bound func] ([5, 10])

//     return func.apply(ctx, fullArgs); // applies function to context arg, and follows up with additional args (5+10)
//   };
// }

// function addNumbers(a, b) {
//   return a + b;
// }

// let addFive = myBind(addNumbers, null, 5);

// console.log(addFive(10)); // 15


// TAKE 2

// function myBind(func, context, ...args) {
//   return function() {
//     let myArgs = args.concat(...arguments);
//     return func.apply(context, myArgs);
//   };
// }

// function addArguments(arg1, arg2) {
//   return arg1 + arg2;
// }

// // const addThirtySeven = addArguments.bind(null, 37);
// const addThirtySeven = myBind(addArguments, null, 37);

// const result2 = addThirtySeven(5);
// //  37 + 5 = 42
// console.log(result2);

// const result3 = addThirtySeven(5, 10);
// //  37 + 5 = 42
// console.log(result3);


function myBind(func, context) {
  let partialArgs = [].slice.call(arguments, 2);
  return function() {
    return func.apply(context, [...partialArgs, ...arguments]);
  };
}

function addArguments(arg1, arg2) {
  return arg1 + arg2;
}

// const addThirtySeven = addArguments.bind(null, 37);
const addThirtySeven = myBind(addArguments, null, 37);

const result2 = addThirtySeven(5);
//  37 + 5 = 42
console.log(result2);

const result3 = addThirtySeven(5, 10);
//  37 + 5 = 42
console.log(result3);


