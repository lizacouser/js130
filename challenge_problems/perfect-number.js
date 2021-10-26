/*
P:
-perf: sum of positive divisors (excluding num itself) equals num
-abund: aliquot sum is greater than the original number
-deficient: Aliquot sum is less than the original number
-prime numbers always deficient

E:
-negative raises error
-deficient returns deficient, etc.

D:
-class or object PerfectNumber
-static method classify
-arry to store divisors (maybe helper method)
-classify takes number arg
-returns string

A: 
-find positive divisors of number
  -num % 1-(num/2) === 0 etc, store in array
-add array using reduce
-determine type based on sum
-return string
*/

let PerfectNumber = {
  classify(number) {
    if (number < 1) throw new Error('invalid number');

    let sum = this.aliquotSum(number);
    
    if (sum > number) return 'abundant';
    else if (sum < number) return 'deficient';
    else if (sum === number) return 'perfect';
  },

  aliquotSum(number) {
    let divisors = [];

    for (let divisor = 1; divisor <= (number / 2); divisor += 1) {
      if (number % divisor === 0) {
        divisors.push(divisor);
      }
    }

    if (divisors.length === 0) return 0;
    return divisors.reduce((acc, val) => acc + val)
  }
}

module.exports = PerfectNumber;