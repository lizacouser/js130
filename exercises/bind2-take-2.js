// make it support PFA

function myBind(callback, context) {
  let partialArgs = Array.from(arguments).slice(2);
  return function() {
    let args = Array.from(arguments);
    return callback.apply(context, [...partialArgs, ...args]);
  }
}

// the callback can take part of its args here, part later

function addNumbers(a, b) {
  return a + b;
}

let addFive = myBind(addNumbers, null, 5);

console.log(addFive(10)) // 15