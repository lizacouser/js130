// Practice Problems: Shorthand Notation
// Let's get some practice understanding
// the various kinds of shorthand notation.

// Rewrite the following code using classic JavaScript syntax.
// That is, write it without using any of the shorthand notations
// described in the previous assignment.

// function foo(bar, qux, baz) {
//   return {
//     bar,
//     baz,
//     qux,
//   };
// }

// function foo(bar, qux, baz) {
//   return {
//     bar: bar,
//     baz: baz,
//     qux: qux,
//   };
// }


// Rewrite the following code using classic JavaScript syntax:

// function foo() {
//   return {
//     bar() {
//       console.log("bar");
//     },
//     qux(arg1) {
//       console.log("qux");
//       console.log(arg1);
//     },
//     baz(arg1, arg2) {
//       console.log("baz");
//       console.log(arg1);
//       console.log(arg2);
//     },
//   };
// }

// function foo() {
//   return {
//     bar: function() {
//       console.log("bar");
//     },
//     qux: function(arg1) {
//       console.log("qux");
//       console.log(arg1);
//     },
//     baz: function(arg1, arg2) {
//       console.log("baz");
//       console.log(arg1);
//       console.log(arg2);
//     },
//   };
// }


// Rewrite the following code using classic JavaScript syntax:

// function foo(one, two, three) {
//   return {
//     bar: one,
//     baz: two,
//     qux: three,
//   };
// }

// let { baz, qux, bar } = foo(1, 2, 3);

// function foo(one, two, three) {
//   return {
//     bar: one,
//     baz: two,
//     qux: three,
//   };
// }

// let obj = foo(1,2,3);
// let baz = obj.baz;
// let qux = obj.qux;
// let bar = obj.bar;


// Rewrite the following code using classic JavaScript syntax:

// function foo([ one, , three ]) {
//   return [
//     three,
//     5,
//     one,
//   ];
// }

// let array = [1, 2, 3];
// let result = foo(array);
// let [ bar, qux, baz ] = result;

// function foo(array) {
//   return [
//     array[2],
//     5,
//     array[0]
//   ];
// }

// let array = [1, 2, 3];
// let result = foo(array);

// let bar = result[0];
// let qux = result[1];
// let baz = result[2];


// Rewrite the following code using classic JavaScript syntax:

// function product(num1, num2, num3) {
//   return num1 * num2 * num3;
// }

// let array = [2, 3, 5];
// let result = product(...array);

// function product(num1, num2, num3) {
//   return num1 * num2 * num3;
// }

// let array = [2, 3, 5];
// let result = product(array[0], array[1], array[2]);


// Rewrite the following code using classic JavaScript syntax:

// function product(...numbers) {
//   return numbers.reduce((total, number) => total * number);
// }

// let result = product(2, 3, 4, 5);

// function product() {
//   let args = Array.from(arguments);
//   return args.reduce((total, number) => total * number);
// }

// let result = product(2, 3, 4, 5);


// OPTIONAL Assume that you have some code that looks like this:

// function qux() {
//   let animalType = "cat";
//   let age = 9;
//   let colors = ["black", "white"];
//   // missing code
// }

// let { type, age, colors } = qux();
// console.log(type);    // cat
// console.log(age);     // 9
// console.log(colors);  // [ 'black', 'white' ]

// Using shorthand notation, what is the missing code?
// function qux() {
//   let animalType = "cat";
//   let age = 9;
//   let colors = ["black", "white"];
//   return {
//     type: animalType,
//     age,
//     colors,
//   };
// }

// let { type, age, colors } = qux();
// console.log(type);    // cat
// console.log(age);     // 9
// console.log(colors);  // [ 'black', 'white' ]


// OPTIONAL Write a function that takes 5 string arguments,
// and returns an object with 3 properties:

// first: the first argument
// last: the last argument
// middle: the middle 3 arguments as a sorted array
// After writing the function, write some code to call the
// function. The arguments you provide should come from an array.
// You should create local variables named first, last, and
// middle from the return value.

// Use shorthand syntax wherever you can.


// function returnObj(first, ...moreArgs) {
//   return {
//     first,
//     last: moreArgs.pop(),
//     middle: moreArgs.sort(),
//   };
// }

// let myStrings = ['mama', 'made', 'me', 'mash', 'my'];
// let { first , middle , last } = returnObj(...myStrings);

// console.log('first', first);
// console.log('middle', middle);
// console.log('last', last);

// function returnObj(first, middle1, middle2, middle3, last) {
//   return {
//     first,
//     last,
//     middle: [middle1, middle2, middle3].sort(),
//   };
// }

// let myStrings = ['mama', 'made', 'me', 'mash', 'my'];
// let { first , middle , last } = returnObj(...myStrings);

// console.log('first', first);
// console.log('middle', middle);
// console.log('last', last);