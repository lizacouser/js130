/*
Write a function that works like the filter function
from problem 1. This time, though, you should use
Array.prototype.reduce to filter the input array.

Input:
-array
-callback which checks if element matches condition
-optional thisArg

Output:
-new array of elements that match condition
-it shouldn't mutate array obviously

Algorithm:
-create function that takes an array and callback function
-call Array.prototype.reduce with a starting arg of []
-have the reduce callback function add result of filtering to []
-return filtered array
*/

function filter(array, callback, thisArg) {
  return array.reduce((filteredArray, val) => {
    if (callback.call(thisArg, val)) {
      filteredArray.push(val);
    }
    return filteredArray;
  }, []);
}


let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]