//Task 1
const add = require('./mathomdule');
const num1 = 5;
const num2 = 7;
const res = add(num1,num2);
console.log(`The sum of ${num1} and ${num2} is ${res}`)


//Task 2
const person = require('./personmodule');
console.log(`Name: ${person.name}`);
console.log(`Age: ${person.age}`);

// Calling methods
person.greet();
person.celebrate();
person.greet();