const Triangle = require('./triangle');

/* eslint-disable max-lines-per-function */

describe('triangles', () => {
  let triangle;
  let middle = 4;
  let long = 5;
  let short = 3;

  beforeEach(() => {
    triangle = new Triangle(middle, long, short);
  });

  test('calling getSides returns a sorted array of side lengths', () => {
    expect(triangle.getSides()).toEqual([short, middle, long]);
  });

  test('calling getLongestSide returns the longest side length', () => {
    expect(triangle.getLongestSide()).toBe(long);
  });

  test('calling getShortestSide returns the shortest side length', () => {
    expect(triangle.getShortestSide()).toBe(short);
  });

  test('calling getMiddleSide returns the middle side length', () => {
    expect(triangle.getMiddleSide()).toBe(middle);
  });

  test('calling getTriangleType on invalid triangle throws error', () => {
    let notEnoughArgs = new Triangle(1, 2);
    expect(() => notEnoughArgs.getTriangleType()).toThrow();

    let nonNumberArgs = new Triangle('hi', []);
    expect(() => nonNumberArgs.getTriangleType()).toThrow();

    let zeroArgs = new Triangle(0, 4, 4);
    expect(() => zeroArgs.getTriangleType()).toThrow();

    let sumOfSidesInvalid = new Triangle(1, 2, 3);
    expect(() => sumOfSidesInvalid.getTriangleType()).toThrow();
  });

  test('calling getTriangleType on scalene triangle returns "scalene"', () => {
    expect(triangle.getTriangleType()).toBe('scalene');
  });

  test('calling getTriangleType on equilateral triangle returns "equilateral"', () => {
    let eqTri = new Triangle(1, 1, 1);
    let eqTriLarge = new Triangle(100, 100, 100);
    expect(eqTri.getTriangleType()).toBe('equilateral');
    expect(eqTriLarge.getTriangleType()).toBe('equilateral');
  });

  test('calling getTriangleType on isos triangle returns "isosceles"', () => {
    let isosTri1 = new Triangle(2, 2, 3);
    let isosTri2 = new Triangle(2, 3, 3);
    let isosTri3 = new Triangle(2, 3, 2);

    expect(isosTri1.getTriangleType()).toBe('isosceles');
    expect(isosTri2.getTriangleType()).toBe('isosceles');
    expect(isosTri3.getTriangleType()).toBe('isosceles');

  });
});