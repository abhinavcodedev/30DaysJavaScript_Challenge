//Activity 1: Array Creation and Access
//Task 1
const myarr= [1,2,3,4,5]
console.log(myarr);


//Task 2
console.log(myarr[0]);
//console.log(myarr[4]);
console.log(myarr[myarr.length-1]);

//Activity 2: Array Methods(Basic)
//Task 3
myarr.push(6)
console.log(myarr);

//Task 4
myarr.pop(5)
console.log(myarr);

//Task 5
myarr.shift()
console.log(myarr);

//Task 6
myarr.unshift(9)
console.log(myarr);

//Activity 3: Array Methods(Intermediate)
//Task 7
const numbers = [1,2,3,4,5,6]
console.log(`Main array ${numbers}`)
const doubledno = numbers.map(numbers=> numbers*2);
console.log(`Array after using map ${doubledno}`)

//Task 8
//use filter method to create new array
const evenno = numbers.filter(numbers => numbers % 2 == 0)
console.log(evenno)

//Task 9
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(`Sum of all numbers in array ${sum}`)


//Activity 4: Array Iteration
//Task 10
const myarr1 = [1,2,3,4,5,6,7,"Abhinav", "JavaScript"]
for(let i=0;i<myarr1.length;i++){
    console.log(myarr1[i]);
}

//Task 11
myarr.forEach(element => {
    console.log(element);
});

//Activity 5: Multi- dimensional Array
//Task 12
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Log the entire array
console.log("Matrix:");
for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
}

//Task 13
const row = 1;
const col = 2;
const element = matrix[row][col];
console.log(`The element at row ${row + 1}, column ${col + 1} is: ${element}`);


//Ferature request
//1.Array Manipulation Script
let myArray = [];

myArray.push(1);
myArray.push(2);
myArray.push(3);
console.log('Array after push operations:', myArray);

let pop = myArray.pop();
console.log('Popped element:', pop);
console.log('Array after pop operation:', myArray);

myArray.unshift(0);
console.log('Array after unshift operation:', myArray);

let shift = myArray.shift();
console.log('Shifted element:', shift);
console.log('Array after shift operation:', myArray);


//2.Array Transform Script
const number = [1,2,3,4,5,6]
console.log(`Main array ${number}`)
const doublednos = number.map(number=> number*2);
console.log(`Array after using map ${doublednos}`)

const evennos = numbers.filter(numbers => numbers % 2 == 0)
console.log(`Array after using filter ${evennos}`)

const sum1 = number.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(`Sum of all number in array ${sum}`)


//3.Array Iteration Script
const num = [1, 2, 3, 4, 5];
// Using a for loop to iterate over the array
console.log("Iterating using for loop:");
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}
// Using forEach method to iterate over the array
console.log("\nIterating using forEach method:");
numbers.forEach(num => {
    console.log(num);
});


//4. 2-dimensional Array Script
// Creating a 2-dimensional array
//Matrix taken from Task 12

// Display the original matrix
console.log("Original matrix:");
console.log(matrix);

// Accessing and manipulating elements
console.log("\nAccessing and manipulating elements:");

// Accessing an element
console.log("Element at matrix[1][2]:", matrix[1][2]); // Output: 6

// Modifying an element
matrix[0][1] = 20;
console.log("Modified matrix[0][1] to 20:");
console.log(matrix);

// Adding a new row
matrix.push([10, 11, 12]);
console.log("\nAdded new row [10, 11, 12]:");
console.log(matrix);

// Adding a new column
for (let i = 0; i < matrix.length; i++) {
    matrix[i].push(i + 1); // Adding i + 1 as new column element
}
console.log("\nAdded new column with values based on row index:");
console.log(matrix);
