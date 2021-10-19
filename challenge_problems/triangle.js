/*
P:
-input three size lengths
-output triangle type
-equilateral 3 sides same length
-isos 2 sides same length
-scalene lots of different lengths
-non-triangle (side <= 0, sum of 2 sides > 3rd side)

E:


D:
-class Triangle
-side lengths property stored in sorted array?

A:
declare a class Triangle
initialized with 3 sides stored in a sorted array (property sides)
methods:
  -getSides returns the sides array
  -largestSide returns largest side
  -shortestSide returns shortest side
  -isValidTriangle, makes sure sizes are > 0 and satisfy rules, throws error
  -getType, returns type of triangle
  -isIsos
  -isEquil
*/


class Triangle {
  constructor(side1, side2, side3) {
    this.sides = [side1, side2, side3].sort((a, b) => a - b);
  }

  getSides() {
    return Array.from(this.sides);
  }

  getLongestSide() {
    return this.getSides()[2];
  }

  getShortestSide() {
    return this.getSides()[0];
  }

  getMiddleSide() {
    return this.getSides()[1];
  }

  isValidTriangle() {
    if (this.getSides().length !== 3) return false;

    let allValidLengths = this.getSides().every(side => {
      return (typeof side === 'number') && (side > 0);
    });

    let validSideSum = (this.getShortestSide() +
                        this.getMiddleSide()) >
                        this.getLongestSide();

    return (allValidLengths && validSideSum);
  }

  isEquilateral() {
    return this.getShortestSide() === this.getLongestSide();
  }

  isIsosceles() {
    return (this.getShortestSide() === this.getMiddleSide()) ||
           (this.getLongestSide() === this.getMiddleSide());
  }

  getTriangleType() {
    if (!this.isValidTriangle()) {
      throw new Error('Invalid triangle');
    }

    if (this.isEquilateral()) {
      return 'equilateral';
    } else if (this.isIsosceles()) {
      return 'isosceles';
    } else {
      return "scalene";
    }
  }
}

module.exports = Triangle;