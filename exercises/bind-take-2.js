function myBind(callback, context) {
  return (...args) => {
    callback.apply(context, args);
  }
}
// or

function myBind(callback, context) {
  return function() {
    callback.apply(context, arguments);
  }
}