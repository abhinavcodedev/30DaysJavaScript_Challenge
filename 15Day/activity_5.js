

// 5: Memoization

//Task 7:  Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

function simpleInterestMemoize(fn) {
    const cache = {}; // Object to store results of previous computations
    return function (x, y, z) {
      // Checking if the result is already in the cache
      if (cache[(x, y, z)] !== undefined) {
        console.log("Returning from cache...");
        return cache[(x, y, z)];
      }
      // Calculating the result if not in cache
      console.log("Calculating result...");
      const res = fn(x, y, z);
      cache[(x, y, z)] = res; // Store the result in cache
      return res;
    };
  }
  
  function calculateSI(principal, rate, time) {
    const simpleInterest = (principal * rate * time) / 100;
    return simpleInterest;
  }
  
  const memoizedSI = simpleInterestMemoize(calculateSI);
  console.log(memoizedSI(1.2,2.,0));
  console.log(memoizedSI(1000, 5, 3));
  console.log(memoizedSI(2000, 10, 2));
  console.log(memoizedSI(3000, 7, 5));



// Task 8: Create a memoized version of a function that calculates the factorial of a number.

function memoizeFactorial(fn) {
    const cache = {}; // Object to store results of previous computations
  
    return function (x) {
      if (cache[x] !== undefined) {
        console.log("Returning from cache...");
        return cache[x];
      }
      console.log("Calculating result...");
      const res = fn(x);
      cache[x] = res; // Store the result in cache
      return res;
    };
  }
  
  function fact(num) {
    let res = 1;
    for (let i = num; i >= 1; i--) {
      res = res * i;
    }
    return res;
  }
  
  const cacheFactorial = memoizeFactorial(fact);
  console.log(cacheFactorial(6));
  console.log(cacheFactorial(5));
  console.log(cacheFactorial(4));
  console.log(cacheFactorial(4));
  console.log(cacheFactorial(3));
















// const memoize = (fn) => {
//     const cache = {}

//     return (n) => {
//         if (n in cache) {
//             console.log('Fetching from cache')
//             return cache[n]
//         } else {
//             console.log('Calculating result')
//             const result = fn(n)
//             cache[n] = result
//             return result
//         }
//     }
// }
// const meo= memorize(2)
// console.log(meo)