/*
create a reduce method

input:
-calling array
-callback function with accum, number, index, and array args
-starting point for array
-thisArg?

output:
-result of calling callback function on previous result

algorithm:
-create function with 3 arguments
-set accum to third argument or first element in array
-for every element in the array
-call the callback function on accum and first element in array
-store result as accum, move onto next element in array
-return accum
*/

function reduce(array, callback, accumStart, thisArg) {
  let accum = accumStart;
  for (let index = 0; index < array.length; index ++) {
    if (accum) {
      accum = callback.call(thisArg, accum, array[index], index, array)
    } else {
      accum = array[index]
    }
  }
  return accum;
}

let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]

// function reduce(array, callback, initialVal, thisArg) {
//   let accum = initialVal;

//   for (let index = 0; index < array.length; index += 1) {
//     if (accum) {
//       accum = callback.call(thisArg, accum, array[index], index, array);
//     } else {
//       accum = array[index];
//     }
//   }

//   return accum;
// }