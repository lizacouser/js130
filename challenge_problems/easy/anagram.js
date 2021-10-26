/*
P:
-takes a word
-takes a list of anagrams
-selects sublist that contans anagrams of the world
-sort of like filtering

E:
-no matches retuns empty array
-identical word is not an anagram
-checksum
-case insensitive

D:
-input word & array
-output array
-maybe some sort of object to track character count

A:
-class has a word
-method match takes an array
-method that takes a word and returns an object with characters + counts
-store characters and count in an object
-for each word get object with character counts
-filter, comparing character counts
*/


class Anagram {
  constructor(word) {
    this.word = word.toLowerCase();
    this.charCounts = this.getCharCounts(this.word);
  }

  match(wordList) {
    return wordList.filter(word => {
      let wordCharCounts = this.getCharCounts(word.toLowerCase());

      if (word.toLowerCase() === this.word) return false;
      if (word.length !== this.word.length) return false;

      return Object.keys(this.charCounts).every(char => {
        return wordCharCounts[char] === this.charCounts[char];
      })
    })
  }

  getCharCounts(word) {
    let charCounts = {};

    for (let charInd = 0; charInd < word.length; charInd += 1) {
      let char = word[charInd];

      if (!charCounts[char]) {
        charCounts[word[charInd]] = 0
      }

      charCounts[char] += 1;
    }

    return charCounts;
  }
}

// let detector = new Anagram('diaper');

// console.log(detector.match(['dipaer']));

module.exports = Anagram;

// better solution!!

// class Anagram {
//   constructor(word) {
//     this.matchWord = word.toLowerCase();
//   }

//   match(wordList) {
//     return wordList.filter(word => {
//       return word.toLowerCase() !== this.matchWord &&
//              this.isAnagram(word, this.matchWord);
//     });
//   }

//   sortedChars(word) {
//     return word.toLowerCase().split('').sort();
//   }

//   isAnagram(word1, word2) {
//     word1 = this.sortedChars(word1).join();
//     word2 = this.sortedChars(word2).join();
//     return word1 === word2;
//   }
// }

// module.exports = Anagram;