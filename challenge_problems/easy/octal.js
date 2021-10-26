/*
P:
-input octal string
-output decimal output
-invalid output treated as octal 0
-only 0-7 are valid numbers for octal

what is octal?
-numbers with base 8 system
-rightmost digit multiplied by 8^0, then 8^1, etc, then summed
> 233 // in octal
= 2*8^2 + 3*8^1 + 3*8^0
= 2*64  + 3*8   + 3*1
= 128   + 24    + 3
= 155

E:
-invalid octal is decimal 0
-8, 9, 6789, abc1z, 234abc is seen as invalid and returns 0
-011 works fine and is converted to decimal 9

D:
-input string
-output number
-internal numbers

A:
-class Octal
-constructor method with string arg stores octal number
-toDecimal method converts to decimal
-let decimal = 0;
-for each digit in string, working backwords
-convert digit to a number
-if number is not 0-7, it's invalid
-add number * 8^(length-index - 1) to decimal

*/

class Octal {
  constructor(octalNum) {
    this.octal = octalNum;
  }

  toDecimal() {
    let decimal = 0;

    for (let index = 0; index < this.octal.length; index += 1) {
      let digit = Number(this.octal[index]);

      if (digit > 7 || digit < 0 || Number.isNaN(digit)) {
        decimal = 0;
        break;
      }

      decimal += (digit * Math.pow(8, this.octal.length - 1 - index));
    }

    return decimal;
  }
};

console.log(new Octal('a').toDecimal());

module.exports = Octal;

// in an ideal world i would maybe move the validation to a helper method