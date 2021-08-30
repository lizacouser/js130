// Practice Problems: Hoisting and the var Statement

// Consider the following code:
// var foo = function() { // function expression
//   console.log("Bye");
// };

// function foo() { // function declaration
//   console.log("Hello");
// }

// foo();
// Without running this code, what will it display? Explain your reasoning.
// hoisted, it looks like:
// var foo = undefined;

// function foo() { // function declaration supercedes foo
//   console.log("Hello");
// }

// foo = function() { // function reassignment to "Bye"
//   console.log("Bye");
// };

// foo(); // logs bye


// Consider the following code:

// for (var index = 0; index < 2; index += 1) {
//   console.log(foo);
//   if (index === 0) {
//     var foo = "Hello";
//   } else {
//     foo = "Bye";
//   }
// }

// console.log(foo);
// console.log(index);

// Without running this code, what does it print?
// hoisted this code is
// var index = undefined;
// var foo = undefined;

// for (index = 0; index < 2; index += 1) {
//   console.log(foo); // logs undefined first, Hello next
//   if (index === 0) {
//     foo = "Hello"; // reassigns foo but doesn't log
//   } else {
//     foo = "Bye";
//   }
// }

// console.log(foo); // logs bye
// console.log(index); // logs 2!!

// undefined
// Hello
// Bye
// 2


// The following code doesn't work:

// bar();

// var bar = function() {
//   console.log("foo!");
// };

// Without changing the order of the invocation and function definition,
// update this code so that it works.

// bar();

// function bar() {
//   console.log("foo!");
// }


// Without running the following code, determine what it logs to the console:
// var bar = 82;
// function foo() {
//   var bar = bar - 42;
//   console.log(bar);
// }

// foo();

// hoisted, its:
// var bar = undefined;

// function foo() {
//   var bar = undefined;
//   bar = bar - 42; // reassigns local bar to NaN
//   console.log(bar); // logs NaN
// }

// bar = 82; // global var is 82

// foo();

// NaN

// Rewrite the code below using let instead of var.
// Your goal here is to change the way the variables
// are declared without altering the output of the program.

// function foo(condition) {
//   console.log(bar);

//   qux = 0.5772;

//   if (condition) {
//     var qux = 3.1415;
//     console.log(qux);
//   } else {
//     var bar = 24;

//     var xyzzy = function() {
//       var qux = 2.7183;
//       console.log(qux);
//     };

//     console.log(qux);
//     console.log(xyzzy());
//   }

//   qux = 42;
//   console.log(qux);
// }

// // foo(true);
// foo(false);


// // hoisted it's:
// function foo(condition) {
//   var qux = undefined;
//   var bar = undefined;
//   var xyzzy = undefined;
//   console.log(bar);

//   qux = 0.5772;

//   if (condition) {
//     qux = 3.1415;
//     console.log(qux);
//   } else {
//     bar = 24;

//     xyzzy = function() {
//       qux = 2.7183;
//       console.log(qux);
//     };

//     console.log(qux);
//     console.log(xyzzy());
//   }

//   qux = 42;
//   console.log(qux);
// }

// foo(true);
// // undefined
// // 3.1415
// // 42

// foo(false);
// // undefined
// // 0.5772
// // 2.7183
// // undefined
// // 42

// function foo(condition) {
//   let bar;
//   console.log(bar);

//   let qux = 0.5772;

//   if (condition) {
//     qux = 3.1415;
//     console.log(qux);
//   } else {
//     bar = 24;

//     let xyzzy = function() {
//       let qux = 2.7183;
//       console.log(qux);
//     };

//     console.log(qux);
//     console.log(xyzzy());
//   }

//   qux = 42;
//   console.log(qux);
// }

// foo(true);
// foo(false);


// In a process called hoisting, JavaScript appears to
// reorganize code in such a way that certain declarations
// and definitions appear to be moved around.
// While this organization doesn't really occur,
// it's a useful mental model for understanding scope
// in a JavaScript program.

// Rewrite the following code in a way that shows what
// the code would look like if hoisting were a real process
// that actually reorganized your code. The intent here is
// to clearly show how and when the various identifiers in
// this program are defined with respect to the code that
// actually gets executed.


Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

function Pet(name, image) {
  this.name = name;
  this.image =  image;
}

class Image {
  constructor(file) {
    this.file = file;
  }
}

var catImage = new Image("cat.png");
var pudding = new Pet("Pudding", catImage);


// hoisted:
function Pet(name, image) {
  this.name = name;
  this.image =  image;
}

let Image;

var catImage;
var pudding;

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

Image = class {
  constructor(file) {
    this.file = file;
  }
}

catImage = new Image("cat.png");
pudding = new Pet("Pudding", catImage);
