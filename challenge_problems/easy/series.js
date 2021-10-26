/*
P:
-input: string of digits ('5739348')
-output: all consecutive numbers series of specified length of string
(4 => 5739, 7393, 3934, 9348) etc.

E:
-slices returns nested array
-slices takes argument for length of slices
-throws error if slice length > string length

D:
-constructor input: string
-slices method input: number
-returns nested array

A:
-constructor
  -takes a string input
  -save value of string input
-slices method
  -takes a length
  -throw error if length > digitString.length
  -create an empty array to store slices
  -iterate through string by index, taking slices of given length
  -push slices to array
  -return array
*/

class Series {
  constructor(digitString) {
    this.digits = digitString;
  }

  slices(sliceLength) {
    if (sliceLength > this.digits.length) {
      throw new Error('invalid slice length');
    }

    let slices = [];

    for (let index = 0; (index + sliceLength) <= this.digits.length; index += 1) {
      let slice = this.digits.split('')
                             .map(digit => Number(digit))
                             .slice(index, index + sliceLength)
                             
      slices.push(slice);
    }

    return slices;
  }
}

let series = new Series('01234');
console.log(series.slices(2));

module.exports = Series;