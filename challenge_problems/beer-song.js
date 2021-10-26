/*
P:
-input: number of bottles
-output: beer song for that verse or lyrics method returns whole song

E:
-see test
-'1 bottle'
-'no bottles'

D:
-input number
-output string
-internal: strings

A:
verse method:
-takes a number
-returns a string with number worked in

lyrics method:
-call recursively from 99 to 1

*/

class BeerSong {
  static verse(numBottles) {
    switch (numBottles) {
      case 0:
        return `No more bottles of beer on the wall, no more bottles of beer.\n` +
               `Go to the store and buy some more, 99 bottles of beer on the wall.\n`;
      case 1:
        return `${numBottles} bottle of beer on the wall, ${numBottles} bottle of beer.\n` +
               `Take it down and pass it around, no more bottles of beer on the wall.\n`;
      case 2:
        return `${numBottles} bottles of beer on the wall, ${numBottles} bottles of beer.\n` +
               `Take one down and pass it around, 1 bottle of beer on the wall.\n`;
      default:
        return `${numBottles} bottles of beer on the wall, ${numBottles} bottles of beer.\n` +
               `Take one down and pass it around, ${numBottles - 1} bottles of beer on the wall.\n`;
    }  
  }

  static verses(maxBottles, minBottles) {
    let lyrics = '';
    for (let bottles = maxBottles; bottles > minBottles; bottles -= 1) {
      lyrics += (BeerSong.verse(bottles) + '\n');
    }

    lyrics += (BeerSong.verse(minBottles));

    return lyrics;
  }

  static lyrics() {
    return BeerSong.verses(99, 0)
  }
}

console.log(BeerSong.lyrics());

module.exports = BeerSong;