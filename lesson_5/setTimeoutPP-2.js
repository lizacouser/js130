// Write a JavaScript function named delayLog that loops
// through the numbers from 1 to 10, and logs each number
// after that number of seconds. It should log 1 after 1
// second, 2 after 2 seconds, and so on.

// function delayLog() {
//   let timer = 0;
//   for (let count = 10; count >= 0; count --) {
//     setTimeout(() => {
//       console.log(count);
//     }, timer)
//     timer += 1000;
//   }

//   setTimeout(() => console.log('BLASTOFF'), 11000);
// }

// delayLog();
// // 1  // 1 second later
// // 2  // 1 second later (2 seconds after start)
// // 3  // 1 second later (3 seconds after start)
// // 4  // etc...
// // 5
// // 6
// // 7
// // 8
// // 9
// // 10

// In our solution for the previous problem, what do you
// think would happen if you replaced let delay with var
// delay? Go ahead and try it and see if you can explain
// the difference in behavior.

// function delayLog() {
//   var delay = undefined;
//   for (delay = 1; delay <= 10; delay += 1) {
//     setTimeout(() => console.log(delay), delay * 1000);
//   }
// }

// delayLog();
// logs 11, 11 times. variable at function scope is in the outer scope
// of the for loop block, so each time the variable `delay` is incremented by 1
// the global variable is changed. the closure formed by the delayLog function
// tracks the current value of the `delay` variable. by the time the timeout is over
// 11 will be the value for all iterations of the for loop's body.
// Since let has block scope, each iteration in solution to the previous problem
// forms a closure with a different variable. Thus, each callback's closure
// encloses a different delay variable.


// In what sequence will the JavaScript runtime run the
// following lines of code? Number them from 1-8 to show
// the order of execution.

// setTimeout(function() {  // 1
//   console.log('Once');   // 5
// }, 1000);

// setTimeout(function() {  // 2
//   console.log('upon');   // 7
// }, 3000);

// setTimeout(function() {   // 3
//   console.log('a');       // 6
// }, 2000);

// setTimeout(function() {   // 4
//   console.log('time');    // 8
// }, 4000);


// In what sequence does the JavaScript runtime run the
// functions q(), d(), n(), z(), s(), f(), and g() in the
// following code?

// setTimeout(function() {    // 1
//   setTimeout(function() {  // 6
//     q();                   // 12
//   }, 15);

//   d();                     // 7

//   setTimeout(function() {  // 8
//     n();                   // 10
//   }, 5);

//   z();                     // 9
// }, 10);

// setTimeout(function() {   // 2
//   s();                    // 11
// }, 20);

// setTimeout(function() {   // 3
//   f();                    // 5
// });

// g();                      // 4

// g, f, d, z, n, s, q

// Write a function named afterNSeconds that takes two
// arguments: a callback and a time duration in seconds.
// It should wait for the indicated period, then invoke
// the callback function.

function afterNSeconds(callback, durationInSec) {
  return setTimeout(callback, durationInSec * 1000);
}

afterNSeconds(() => console.log('hi'), 3);