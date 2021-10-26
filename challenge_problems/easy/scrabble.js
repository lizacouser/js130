/*
P: 
-input word
-output number (score)
-how to score:
  -sum values of tiles used in each word
-Tile scores
A, E, I, O, U, L, N, R, S, T	1
D, G	2
B, C, M, P	3
F, H, V, W, Y	4
K	5
J, X	8
Q, Z	10

E:
-empty word scores 0
-white space scores 0
-null scores 0
-scores are case-insensitive

D:
-input string
-output number
-internal dictionary of scores

A:
-class Scrabble
-constructor takes string
-score method takes no arguments
-iterate through chars of word
-use dictionary to find points
-add points to running word score
*/

class Scrabble {
  static POINTS = {
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
    L: 1,
    N: 1,
    R: 1,
    S: 1,
    T: 1,
    D: 2,
    G: 2,
    B: 3,
    C: 3,
    M: 3,
    P: 3,
    F: 4,
    H: 4,
    V: 4,
    W: 4,
    Y: 4,
    K: 5,
    J: 8,
    X: 8,
    Q: 10,
    Z: 10
  }

  constructor(word = '') {
    this.word = word;
  }

  score() {
    let score = 0;

    if (this.isValidWord()) {
      let chars = this.word.toUpperCase().split('');

      chars.forEach(char => {
        score += Scrabble.POINTS[char];
      })
    }

    return score;
  }

  isValidWord() {
    let validChars = Object.keys(Scrabble.POINTS);

    return typeof this.word === 'string' &&
           this.word.toUpperCase().split('').every(char => {
             return validChars.includes(char);
           })
  }

  static score(word) {
    return new Scrabble(word).score();
  }
}

console.log(new Scrabble('ello').score());

module.exports = Scrabble;


// rather than the isValidWord method, launch school did this:
let letters = this.word.toUpperCase().replace(/[^A-Z]/g, '').split('');
