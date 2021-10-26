/*
P:
-input: natural number + set of other numbers
-output: sum of all multiples of numbers in
the set that are less than 1st number
-if numbers not given, use default of 3 and 5

E:
-sum of natural numbers that are multiples of 3 or 5 that are < 20
(3, 5, 6, 9, 10, 12, 15, 18)

D:
-input for class: list of numbers (multipliers)
-input for "to": number
static method "to" should call the instance method with default params
-output: number
-internal: array

A:
-iterate through all the numbers
-if they are divisible add to collection

*/

class SumOfMultiples {
  constructor(...multipliers) {
    this.multipliers = multipliers.length ? multipliers : [3, 5];
  }

  to(maxNumber) {
    let multiples = this.getMultiples(maxNumber);
    return multiples.reduce((acc, val) => acc + val, 0);
  }

  static to(maxNumber) {
    return new SumOfMultiples().to(maxNumber);
  }

  getMultiples(maxNumber) {
    let multiples = [];

    for (let testNum = 1; testNum < maxNumber; testNum += 1) {
      this.multipliers.forEach(multiplier => {
        if ((testNum % multiplier === 0) && !multiples.includes(testNum)) {
          multiples.push(testNum);
        }
      })
    }

    return multiples;
  }
}

module.exports = SumOfMultiples;

  // too slow version
  // getMultiples(maxNumber) {
  //   let multiples = [];

  //   this.multipliers.forEach(multiplier => {
  //     let multiple = multiplier;
  //     while (multiple < maxNumber) {
  //       if (!multiples.includes(multiple)) {
  //         multiples.push(multiple);
  //         multiple += multiplier;
  //       }
  //     }
  //   })

  //   return multiples;
  // }