

// Task 4: Create a module that export a single  functions using named exports. 
// Imports and use these functions in another script.

import { add, subtract, multiply, divide } from './mathTask4.mjs';

const num1 = 10;
const num2 = 5;

console.log(`The sum of ${num1} and ${num2} is ${add(num1, num2)}`);
console.log(`The difference between ${num1} and ${num2} is ${subtract(num1, num2)}`);
console.log(`The product of ${num1} and ${num2} is ${multiply(num1, num2)}`);
console.log(`The quotient of ${num1} and ${num2} is ${divide(num1, num2)}`);
