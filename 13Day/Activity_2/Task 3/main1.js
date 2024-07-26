

// Task 3: A a module that export multiple functions using named exports.
// Imports and use these functions in another script.



const { add, subtract, multiply, divide } = require('./mathTask3');
const num1 = 10;
const num2 = 5;

console.log(`The sum of ${num1} and ${num2} is ${add(num1, num2)}`);
console.log(`The difference between ${num1} and ${num2} is ${subtract(num1, num2)}`);
console.log(`The product of ${num1} and ${num2} is ${multiply(num1, num2)}`);
console.log(`The quotient of ${num1} and ${num2} is ${divide(num1, num2)}`);