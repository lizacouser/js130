/*
-Write map

Input
-array, callback

Output
-array with result of callback


Basic algorithm:
-create function with 2 args: array + callback
-make new array
-use a for loop to iterate through array
-for each element, call function, store return value to array
-return array
*/

function map(array, callback, thisArg) {
  let result = [];

  for (let index = 0; index < array.length; index += 1) {
    result.push(callback.call(thisArg, array[index], index, array));
  }

  return result;
}


let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]