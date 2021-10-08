// how to refactor function def below
// without changing invocation
// so we don't need arguments object
function sum(...values) {
  return values.reduce(function(a, b) {
    return a + b;
  });
}

console.log(sum(1, 4, 5, 6)); // 16