/*
p: 
-create a custom set
-all elements in set are numbers
-input array

e:
-isEmpty() returns true if set contains no elements, false if not
-contains() returns true if set includes an element, false if not
-isSubset() returns true if all elements contains in other set (include empty)
-isDisjoint() returns true if they share NO elements (include empty)
-isSame() returns true if sets have all the same elements (include empty, and out of order)
-add() pushes element into set, unless element already was in the set
-intersection() returns a set of all shared elements (or empty set)
-difference() returns set of all elements that are only in the first set, or empty set
-union() returns a set of all elements in either set

d:
-seems like an array is the best way to implement this
-order doesn't matter, so objects also possible

a:
-constructor()
  -stores array array, default set to empty arrray
-isEmpty() returns true if set contains no elements, false if not
  -return array length === 0
-contains() returns true if set includes an element, false if not
  -return array.includes(element)
-isSubset() returns true if all elements in first are contained in other set (include empty)
  -return array.every() are included/contained in argument set
-isDisjoint() returns true if they share NO elements (include empty)
  -!array.some above
-isSame() returns true if sets have all the same elements (include empty, and out of order)
  -sorted arrays match by index
-add() pushes element into set, unless element already was in the set
  -check if set contains element
  -if not, push element into set
-intersection() returns a set of all shared elements (or empty set)
  -filter first array, check if second contains first
-difference() returns set of all elements that are only in the first set, or empty set
  -filter first array, checking if second doesn't contain first
-union() returns a set of all elements in either set
  -push in all the elements of the second set
*/


class CustomSet {
  constructor(array = []) {
    this.set = array;
  }

  isEmpty() {
    return this.set.length === 0;
  }

  contains(element) {
    return this.set.includes(element);
  }

  isSubset(otherSet) {
    return this.set.every(element => {
      return otherSet.contains(element);
    })
  }

  isDisjoint(otherSet) {
    return !this.set.some(element => {
      return otherSet.contains(element);
    })
  }

  isSame(otherSet) {
    return this.isSubset(otherSet) && otherSet.isSubset(this);
  }

  add(element) { // ?
    let resultSet = new CustomSet(this.set);

    if (!resultSet.contains(element)) {
      resultSet.set.push(element);
    }

    return resultSet;
  }

  intersection(otherSet) {
    let intersectionArray = this.set.filter(elem => {
      return otherSet.contains(elem);
    })

    return new CustomSet(intersectionArray);
  }

  difference(otherSet) {
    let differenceArray = this.set.filter(elem => {
      return !otherSet.contains(elem);
    })

    return new CustomSet(differenceArray);
  }

  union(otherSet) {
    let resultSet = new CustomSet(this.set);
    otherSet.set.forEach(elem => {
      resultSet = resultSet.add(elem);
    })

    return resultSet;
  }
}

module.exports = CustomSet;