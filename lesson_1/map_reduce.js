/*
-Write map

Input
-array, callback

Output
-array with result of callback


Basic algorithm:
-create function with 2 args: array + callback
-reduce with [] starting value
-return array
*/

function map(array, callback, thisArg) {
  let mapped = array.reduce((mappedArray, elem) => {
    mappedArray.push(callback.call(thisArg, elem));
    return mappedArray;
  }, [])

  return mapped;
}


let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

// function map(array, callback, thisArg) {
//   return array.reduce((transformedArray, val) => {
//     transformedArray.push(callback.call(thisArg, val));
//     return transformedArray;
//   }, []);
// }