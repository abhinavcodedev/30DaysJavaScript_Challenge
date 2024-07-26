//Task 5: Create a module that export multiple constants functions. 
//Imports the entire module as an object in anoher script and use its properties.


// require('./mathTask5');(require use in without ES6)

import { PI, E, add, subtract, multiply, divide } from './mathTask5.mjs';

const num1 = 10;
const num2 = 5;

console.log(`The value of PI is ${PI}`);
console.log(`The value of E is ${E}`);

console.log(`The sum of ${num1} and ${num2} is ${add(num1, num2)}`);
console.log(`The difference between ${num1} and ${num2} is ${subtract(num1, num2)}`);
console.log(`The product of ${num1} and ${num2} is ${multiply(num1, num2)}`);
console.log(`The quotient of ${num1} and ${num2} is ${divide(num1, num2)}`);