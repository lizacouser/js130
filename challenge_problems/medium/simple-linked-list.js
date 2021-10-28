/*
P:
-input:
-properties:
  -data
  -next
-methods
  -reverse
  -convert to and from array

E:
-

DO THIS ONE AGAIN WITHOUT USING ARRAYS!!
*/

class SimpleLinkedList {
  constructor() {
    this.list = [];
  }

  size() {
    return this.list.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  push(datum) {
    this.list.unshift(new Element(datum, this.head()));
  }

  peek() {
    return this.isEmpty() ? null : this.head().datum();
  }

  head() {
    return this.list[0] || null;
  }

  pop() {
    return this.isEmpty() ? null : this.list.shift().datum()
  }

  static fromArray(array) {
    let newList = new SimpleLinkedList();

    if (array) {
      for (let index = array.length - 1; index >= 0; index -= 1) {
        newList.push(array[index]);
      }
    }

    return newList;
  }

  toArray() {
    let array = this.list.map(elem => {
      return elem.datum();
    })

    return array;
  }

  reverse() {
    let reversedList = this.toArray().reverse();
    return SimpleLinkedList.fromArray(reversedList);
  }
}

class Element {
  constructor(datum, next) {
    this.datumVal = datum;
    this.nextVal = next;
  }

  datum() {
    return this.datumVal;
  }

  isTail() {
    return !this.next();
  }

  next() {
    return this.nextVal || null;
  }
};

module.exports = {SimpleLinkedList, Element};