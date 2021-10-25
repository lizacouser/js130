/*
p:
-convert modern decimals into roman numeral
-starting with the left most digit and skipping any digit with a value of zero.
-don't worry about numbers greater than 3000
I => 1
V => 5
X => 10
L => 50
C => 100
D => 500
M => 1000

1990 => MCMXC (1000 + 900 + 90)
2008 => MMVIII (1000 + 1000 + 5 + 3)

e:
-see test cases
-what about if arg passed in isn't a number--> throw error?

d:
-RomanNumeral is a class
-intialized with one property passed in as arg (modern decimal)
-arg is a number
-toRoman returns a string representation of roman numeral
-translate using dictionary?

a:
-create class RomanNumeral with two methods
-constructor method stores decimal arg
-toRoman returns roman numeral as string
  -1000
*/



// class RomanNumeral {
//   static NUMERALS = {
//     1: 'I',
//     2: 'II',
//     3: 'III',
//     4: 'IV',
//     5: 'V',
//     6: 'VI',
//     7: 'VII',
//     8: 'VIII',
//     9: 'IX',
//     0: ""
//   }

//   constructor(decimal) {
//     this.decimal = decimal;

//     if (typeof this.decimal !== 'number') {
//       throw new Error("Not a valid number");
//     }
//   }

//   toRoman() {
//     return this.toRomanArray().join("");
//   }

//   toArrayOfDigits() {
//     return String(this.decimal).split('');
//   }

//   toRomanDigitArray() {
//     return this.toArrayOfDigits().map(digit => {
//       return RomanNumeral.NUMERALS[digit];
//     })
//   }

//   toRomanArray() {
//     return this.toRomanDigitArray().map((romanSingleDigit, index, digitsArray) => {
//       let place = Math.pow(10, digitsArray.length - 1 - index);
//       return this.convertPlace(romanSingleDigit, place)
//     });
//   }

//   convertPlace(numeral, place) {
//     switch (place) {
//       case 1000: 
//         numeral = numeral.replace(/I/g, "M");
//         break;
//       case 100: 
//         numeral = numeral.replace(/X/g, "M");
//         numeral = numeral.replace(/V/g, "D");
//         numeral = numeral.replace(/I/g, "C");
//         break;
//       case 10:
//         numeral = numeral.replace(/X/g, "C");
//         numeral = numeral.replace(/V/g, "L");
//         numeral = numeral.replace(/I/g, "X");
//         break;
//       default:
//         break;
//     }
//     return numeral;
//   }
// }

// let myNumber = new RomanNumeral(1990);
// console.log(myNumber.toArrayOfDigits());
// console.log(myNumber.toRomanDigitArray());
// console.log(myNumber.toRomanArray());
// console.log(myNumber.toRoman());

// module.exports = RomanNumeral;

class RomanNumeral {
  static NUMERALS = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }

  constructor(decimal) {
    this.decimal = decimal;

    if (typeof this.decimal !== 'number') {
      throw new Error("Not a valid number");
    }
  }

  toRoman() {
    let string = "";
    Object.keys(RomanNumeral.NUMERALS).forEach(numeral => {
      let numeralValue = RomanNumeral.NUMERALS[numeral];

      while (numeralValue <= this.decimal) {
        string += numeral;
        this.decimal -= numeralValue;
      }
    });

    return string;
  }
}

let myNumber = new RomanNumeral(2904);
console.log(myNumber.toRoman());

module.exports = RomanNumeral;