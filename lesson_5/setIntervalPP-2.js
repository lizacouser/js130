// Write a function named startCounting that logs a number
// to the console every second, starting with 1. Each output
// number should be one greater than the previous one.

function startCounting() {
  let count = 1;

  return setInterval(() => {
    console.log(count)
    count += 1;
  }, 1000);
}

let counterID = startCounting();

// Extend the code from the previous problem with a
// stopCounting function that stops the logger
// when called.

let stopCounting = (counterID) => clearInterval(counterID);
stopCounting(counterID);



