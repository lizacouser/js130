/*
Write a filter method.
-filtering elements of an array by examining the array values.
-thisArg argument
-support multiple arguments to the callback function

Input:
-array
-callback which checks if element matches condition
-optional thisArg

Output:
-new array of elements that match condition
-it shouldn't mutate array obviously

Algorithm:
-create function that takes an array and callback function
-create a new empty array
-use a for loop to iterate through array by index
-if element at index matches condition in callback, add to new array
-return filtered array
*/

function filter(array, callback, thisArg) {
  let result = [];
  for (let index = 0; index < array.length; index ++) {
    if (callback.call(thisArg, array[index], index, array)) {
      result.push(array[index]);
    }
  }

  return result;
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]


// function filter(array, callback, thisArg) {
//   let result = [];

//   for (let index = 0; index < array.length; index += 1) {
//     if (callback.call(thisArg, array[index], index, array)) { // returns boolean
//       result.push(array[index]);
//     }
//   }

//   return result;
// }