//Activity 1: Variable Declaration 
//Task 1
var num=42 ;
console.log(num)

//Task 2
let greet= "Welcome to the Coding World";
console.log(greet);

//Activity 2: Constant Declaration
//Task 3
const isuserlogin = true;
console.log(isuserlogin);

//Activity 3:Data Types
//Task 4
let age = 25;
console.log(typeof age); 

let name = "Abhinav";
console.log(typeof name); 

let isStudent = true;
console.log(typeof isStudent);
//Object
let people = {
    firstName: "Abhinav",
    lastName: "Kumar"
};
console.log(typeof people);
// Array
let fruits = ["apple", "banana", "cherry"];
console.log(typeof fruits); 


//Activity 4: Reassigning Variables
//Task 5
let vari = 10;
console.log("Initial value:", vari);
vari = 20;
console.log("New value:", vari);

//Activity 5: Understanding const
//Task 6
const myConstant = 10;
console.log(myConstant);
myConstant = 20; 
console.log(myConstant); 
/*myConstant = 20; 
           ^
TypeError: Assignment to constant variable.*/

//Feature Request
//1.Variable Types Console Log
// Declare variables of different data types
/*const numberVar = 42;
const stringVar = "Hello, World!";
const booleanVar = true;
const nullVar = null;
const undefinedVar = undefined;
const objectVar = { name: "Alice", age: 30 };
const arrayVar = [1, 2, 3, 4, 5];
const functionVar = function() { return "I am a function"; };
const symbolVar = Symbol("unique");*/
//const bigIntVar = 1234567890123456789012345678901234567890n;
// Log values and types to the console
/*console.log("numberVar:", numberVar, "Type:", typeof numberVar);
console.log("stringVar:", stringVar, "Type:", typeof stringVar);
console.log("booleanVar:", booleanVar, "Type:", typeof booleanVar);
console.log("nullVar:", nullVar, "Type:", typeof nullVar); // Note: typeof null is "object"
console.log("undefinedVar:", undefinedVar, "Type:", typeof undefinedVar);
console.log("objectVar:", objectVar, "Type:", typeof objectVar);
console.log("arrayVar:", arrayVar, "Type:", typeof arrayVar); // Note: typeof array is also "object"
console.log("functionVar:", functionVar, "Type:", typeof functionVar);
console.log("symbolVar:", symbolVar, "Type:", typeof symbolVar);
console.log("bigIntVar:", bigIntVar, "Type:", typeof bigIntVar);*/

// Example with `let`
let letVariable = 10;
console.log("Initial value of letVariable:", letVariable); // Output: 10

// Reassigning the `let` variable
letVariable = 20;
console.log("Reassigned value of letVariable:", letVariable); 
const constVariable = 30;
console.log("Initial value of constVariable:", constVariable); 
// Attempting to reassign the `const` variable
try {
    constVariable = 40;
} catch (error) {
    console.error("Error when reassigning constVariable:", error.message); 
}
