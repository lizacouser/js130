/*
p:
-hamming distance is min # of point mutations between 2 strands
-point muration replaces one base with another at a single nucleotide
-only defined for sequences of equal length
-if length is unequal, compute hamming distance over shorter length

GAGCCTACTAACGGGAT
CATCGTAATGACGGCCT
^ ^ ^  ^ ^    ^^  // hamming distance is 7

e:
see test cases
-2 empty strands returns 0
-2 equivalent strands returns 0
-unequal strands computes shorter strand
-unequal strands don't actually shorten original strand

d:
-DNA is a class
-strand is a string belonging to DNA instance (parameter)
-hamming distance is an instance method that returns a number

a:
-define DNA class with 1 string parameter 
-define method hammingDistance to calculate hamming distance
  -takes one string argument
  -create count variable set to zero
  -iterate by index through strands
    -if character at index is same, move on, otherwise add 1 to count
*/

class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(compareStrand) {
    let hammingDistance = 0;
    let minLength = this.getShorterStrandLength(compareStrand)

    for (let index = 0; index < minLength; index += 1) {
      if (this.strand[index] !== compareStrand[index]) {
        hammingDistance += 1;
      }
    }

    return hammingDistance;
  }

  getShorterStrandLength(compareStrand) {
    return this.strand.length < compareStrand.length ? this.strand.length : compareStrand.length;
  }
}

module.exports = DNA;