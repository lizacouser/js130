// Write a function named startCounting that logs a number
// to the console every second, starting with 1. Each output
// number should be one greater than the previous one.

// Extend the code from the previous problem with a
// stopCounting function that stops the logger
// when called.



function startCounting() {
  let number = 1;
  let counterId = setInterval(() => {
    console.log(number);
    number += 1;
  }, 1000);

  return counterId
}

function stopCounting(counterId) {
  clearInterval(counterId);
}

let counterId = startCounting();

