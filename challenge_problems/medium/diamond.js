/*
P:
-input: letter
-output: string of diamond starting with a

E:
A

  A (sp, sp, letter)
 B B (sp, letter, sp, letter)
C   C (letter, sp, sp, sp, letter)
 B B (sp, letter, sp, letter)
  A (sp, sp, letter)

    A
   B B
  C   C
 D     D
E       E
 D     D
  C   C
   B B
    A

Diamond.makeDiamond('A');

D:
-input string
-output string
-internal, possibly collection, maybe not

A:
-letter corresponds with a number (a = 0, b = 1, etc)
-get index of letter in alphabet
-make empty string
-maybe take a slice from alphabet ('abc')
-iterate through alphabet slice by index
-depending on length of slice, add spaces + a, spaces + b + b, etc

{
  A: '    A\n'
  B: '   B B\n'
  C: '  C   C\n'
}
*/

class Diamond {
  static ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  static makeDiamond(letter) {
    let middleRowIdx = Diamond.ALPHABET.indexOf(letter);
    let totalRows = (middleRowIdx * 2) + 1;

    let string = '';
    let rowIdx = 0;
    let letterIdx = 0;

    while (rowIdx < totalRows) {
      let letter = Diamond.ALPHABET[letterIdx];
      let frontSpaces = middleRowIdx - letterIdx;
      string += " ".repeat(frontSpaces) + letter;

      if (letterIdx > 0) {
        let middleSpaces = letterIdx * 2 - 1;
        string += " ".repeat(middleSpaces) + letter
      }

      string += (" ".repeat(frontSpaces) + '\n');

      if (rowIdx < middleRowIdx) {
        letterIdx += 1;
      } else {
        letterIdx -= 1;
      }

      rowIdx += 1;
    };

    return string;
  }
  
}

console.log(Diamond.makeDiamond('A'));
console.log(Diamond.makeDiamond('B'));
console.log(Diamond.makeDiamond('C'));
console.log(Diamond.makeDiamond('D'));
console.log(Diamond.makeDiamond('E'));

module.exports = Diamond;