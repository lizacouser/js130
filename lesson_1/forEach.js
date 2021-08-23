function forEach(array, callback, thisArg) {
  for (let index = 0; index <  array.length; index += 1) {
    callback.call(thisArg, array[index], index, array);
  }
}


forEach([1,2,3], (element, index, array) => {
  console.log(`Index: ${index}, Element ${element}, Array: ${array}`);
});

forEach(["a", "b", "c"], function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});