// Our very own bind()

// Create a function myBind, that accepts two arguments:
// 1) The function to bind,
// 2) The context object, and
// returns a new function that's hard-bound to the passed
// in context object.

/*
P:
-input: function + context
-output: new bound function

E:
let numbers = [1,2,3];
myBind([].join, numbers);

D:
-input function, object
-output function

A:
-create a function with two args, func & context
-return new function that calls function using Function.prototype.call
*/

function myBind(func, context) {
  return function() {
    return func.apply(context, arguments);
  };
}

let numbers = [1,2,3];
let combineNumbers = myBind([].join, numbers);


console.log(combineNumbers('-'));
