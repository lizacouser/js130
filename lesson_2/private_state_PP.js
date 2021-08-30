// Practice Problems
// Create a function named makeCounterLogger that
// takes a number as an argument and returns a function.
// When we invoke the returned function with a second number,
// it should count up or down from the first number
// to the second number, logging each number to the console:

// function makeCounterLogger(start) {
//   return (end) => {
//     let num;

//     if (end > start) {
//       for (num = start; num <= end; num += 1) {
//         console.log(num);
//       }
//     } else if (end < start) {
//       for (num = start; num >= end; num -= 1) {
//         console.log(num);
//       }
//     }
//   };
// }

// let countlog = makeCounterLogger(5);
// countlog(8);
// // 5
// // 6
// // 7
// // 8

// countlog(2);
// // 5
// // 4
// // 3
// // 2

// In this problem, we'll build a simple todo list program
// that uses the techniques we've seen in this assignment.

// Write a makeList function that creates and returns a
// new function that implements a todo list. The returned
// function should have the following behavior:
// When called with an argument that is not already on the list,
// it adds that argument to the list.
// When called with an argument that is already on the list,
// it removes the element from the list.
// When called without arguments, it prints all of the items
// on the list.
// If the list is empty, it prints an appropriate message.

// function makeList() {
//   let list = [];
//   return (todo) => {
//     if (!todo && list.length === 0) {
//       console.log('List is empty');

//     } else if (!todo) {
//       list.forEach(elem => console.log(elem));

//     } else if (!list.includes(todo)) {
//       list.push(todo);
//       console.log(`${todo} added!`);

//     } else if (list.includes(todo)) {
//       list.splice(list.indexOf(todo), 1);
//       console.log(`${todo} removed!`);
//     }
//   };
// }

// let list = makeList();
// list();
// // The list is empty.

// list("make breakfast");
// // make breakfast added!

// list("read book");
// // read book added!

// list();
// // make breakfast
// // read book

// list("make breakfast");
// // make breakfast removed!

// list();
// // read book


//  Modify the makeList function so that it returns an object that
// provides the interface shown above, including add, list,
// and remove methods.
// function makeList() {
//   return {
//     items: [],

//     add(item) {
//       this.items.push(item);
//       console.log(item + ' added!');
//     },

//     list() {
//       if (this.items.length === 0) {
//         console.log('List is empty');
//       }

//       this.items.forEach(item => console.log(item));
//     },

//     remove(item) {
//       this.items.splice(this.items.indexOf(item), 1);
//       console.log(item + ' removed!');
//     }
//   };
// }

// let list = makeList();
// list.add("peas");
// // peas added!

// list.list();
// // peas

// list.add("corn");
// // corn added!

// list.list();
// // peas
// // corn

// list.remove("peas");
// // peas removed!

// list.list();
// // corn

// console.log(list.items);


// Notice that our solution to the previous problem lets us access the
// array of items through the items property:

// list.items  // items is accessible from outside the object
// ['corn']       // since it is an object property
// That wasn't the case in the single-function implementation:

// list.items;  // items isn't accessible from outside the function
// undefined      // since it is within a closure.


// Update the implementation from problem 1 so that it retains
// the use of an object with methods but prevents outside access
// to the items the object stores internally.

// function makeList() {
//   let items = [];

//   return {
//     add(item) {
//       items.push(item);
//       console.log(item + ' added!');
//     },

//     list() {
//       if (items.length === 0) {
//         console.log('List is empty');
//       }

//       items.forEach(item => console.log(item));
//     },

//     remove(item) {
//       items.splice(items.indexOf(item), 1);
//       console.log(item + ' removed!');
//     }
//   };
// }

// let list = makeList();
// list.add("peas");
// // peas added!

// list.list();
// // peas

// list.add("corn");
// // corn added!

// list.list();
// // peas
// // corn

// list.remove("peas");
// // peas removed!

// list.list();
// // corn

// console.log(list.items);

