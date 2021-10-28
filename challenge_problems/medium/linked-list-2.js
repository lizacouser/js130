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

"use strict"

class SimpleLinkedList {
  constructor() {
    this.headElem = null;
  }

  size() {
    let count = 0;
    let elem = this.head();

    while (elem !== null) {
      count += 1;
      elem = elem.next();
    };

    return count;
  }

  isEmpty() {
    return !this.head();
  }

  push(datum) {
    this.headElem = new Element(datum, this.head());
  }

  peek() {
    return this.head() ? this.head().datum() : null;
  }

  head() {
    return this.headElem || null;
  }

  pop() {
    let popped = this.peek();
    this.headElem = this.head().next();
    return popped;
  }

  static fromArray(array) {
    let list = new SimpleLinkedList();
    array = array || [];

    [...array].reverse().forEach(datum => {
      list.push(datum);
    })

    return list;
  }

  toArray() {
    let array = [];
    let elem = this.head();

    while (elem !== null) {
      array.push(elem.datum());
      elem = elem.next();
    };

    return array;
  }

  reverse() {
    let list = new SimpleLinkedList();
    let elem = this.head();

    while (elem !== null) {
      list.push(elem.datum());
      elem = elem.next();
    };

    return list;
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