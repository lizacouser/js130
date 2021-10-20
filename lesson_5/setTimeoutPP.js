// Write a JavaScript function named delayLog that loops
// through the numbers from 1 to 10, and logs each number
// after that number of seconds. It should log 1 after 1
// second, 2 after 2 seconds, and so on.

// function delayLog() {
//   // loop through numbers 1-10
//   for (let count = 1; count <= 10; count += 1) {
//     setTimeout(() => {
//       console.log(count);
//     }, (count * 1000));
//   }
// }

// delayLog();
// 1  // 1 second later
// 2  // 1 second later (2 seconds after start)
// 3  // 1 second later (3 seconds after start)
// 4  // etc...
// 5
// 6
// 7
// 8
// 9
// 10

// In our solution for the previous problem, what do you
// think would happen if you replaced let delay with var
// delay? Go ahead and try it and see if you can explain
// the difference in behavior.
// function delayLog() {
//   // loop through numbers 1-10
//   for (var count = 1; count <= 10; count += 1) {
//     setTimeout(() => {
//       console.log(count);
//     }, (count * 1000));
//   }
// }

// delayLog();
// this logs 11 10 times. the variable count has function
// scope, so it's considered aprt of the outer scope of the
// for loop. therefore the variable is reassigned during each
// iteration of the for loop and by the time console.log
// is invoked, the variable count has a value of 11


// In what sequence will the JavaScript runtime run the
// following lines of code? Number them from 1-8 to show
// the order of execution.

// setTimeout(function() {   // 1
//   console.log('Once');    // 5
// }, 1000);

// setTimeout(function() {   // 2
//   console.log('upon');    // 7
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

// setTimeout(function() {   // 1
//   setTimeout(function() { // 6
//     q();                  // 11
//   }, 15);

//   d();                    // 7

//   setTimeout(function() { // 8
//     n();                  // 10
//   }, 5);

//   z();                    // 9
// }, 10);

// setTimeout(function() {   // 2
//   s();                    // 12
// }, 20);

// setTimeout(function() {   // 3
//   f();                    // 5
// });

// g();                      // 4

// i THINK its g(), f(), d(), z(), n(), s(), q()


// Write a function named afterNSeconds that takes two
// arguments: a callback and a time duration in seconds.
// It should wait for the indicated period, then invoke
// the callback function.

function afterNSeconds(callback, delayInSeconds) {
  setTimeout(callback, (delayInSeconds * 1000));
}