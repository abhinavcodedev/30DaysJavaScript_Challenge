//Activity:1 Arithmetic Operators
//Task 1
function addnum(a, b){
    return(a+b);
}
let num1=10;
let num2=20;
let sum = addnum(num1,num2);
//console.log(`The sum of ${num1} and ${num2}= ${sum}`);
//Task 2
function subnum(a,b){
    return(a-b);
}
let sub = subnum(num1,num2);
//console.log(`The sub of ${num1} and ${num2}= ${sub}`);
//Task 3
function mulnum(a,b){
    return(a*b);
}
let mul = mulnum(num1,num2);
//console.log(`The multiply of ${num1} and ${num2}= ${mul}`);
//Task 4
function divnum(a,b){
    return(b/a);
}
let div = divnum(num1,num2);
//console.log(`The division of ${num1} and ${num2} = ${div}`);
//Task 5
function remainder(a,b){
    return(a%b);
}
let numa= 17;
let numb= 4;
let rem = remainder(numa,numb);
//console.log(`The remainder of ${numa} and ${numb} = ${rem}`);

//Activity:2 Assignment Operators
//task6
let res=0;
let numtoadd =10;
res+=numtoadd;
//console.log(`Result after adding ${numtoadd}: ${res}`);
numtoadd=1000;
res+=numtoadd;
//console.log(`Result after adding ${numtoadd}: ${res}`);
//Task7
let numtosub =10;
res-=numtosub;
//console.log(`Result after sub ${numtosub}: ${res}`);
numtoadd=1000;
res-=numtoadd;
//console.log(`Result after sub ${numtosub}: ${res}`);

//Activity:3 Comparison Operators
//Task 8
// if(num1>num2){
//     console.log(`${num1} is greater than ${num2}`);
// }else if(num1<num2){
//     console.log(`${num1} is less than ${num2}`);
// }else{
//     console.log(`${num1} is equal ${num2}`);
// }

//Task 9
// if(num1>=num2){
//     console.log(`${num1} is greater than or equal ${num2}`);
// }else if(num1<=num2){
//     console.log(`${num1} is less than or equal ${num2}`);
// }else{
//     console.log(`${num1} is only equal ${num2}`);
// }

//Task10
// let numc="17"
// const isEqualLoose = (numa == numc);
// console.log(`Comparing ${numa} and ${numc} using == :`, isEqualLoose); // Output: true

// // Compare using ===
// const isEqualStrict = (numa === numc);
// console.log(`Comparing ${numa} and ${numc} using === :`, isEqualStrict);

//Activity:4 Logical Operators
//Task11
// let cond1=5<3;
// let cond2=8<10;
// let ans =cond1&& cond2;
// console.log("Result of cond1 && cond2:", ans);
// let cond3 = 5>3;
// let ans1= cond2 && cond3;
// console.log("Result of cond2 && cond3:", ans1);

//Task 12
// let cond11=5<3;
// let cond21=8<10;
// let ans3 =cond11|| cond21;
// console.log("Result of cond11 || cond21:", ans3);

//Task13
// let cond11=5<3;
// let cond21=8<10;
// let ans3 =!cond11&& !cond21;
// console.log("Result of cond11 ! cond21:", ans3);

//Activity:5 Ternary Operators
//Task14
// function checkNumber(num12) {
//     const resu = num12 >= 0 ? "positive" : "negative";
//     console.log(`The number ${num12} is ${resu}.`);
// }
// checkNumber(10);
// checkNumber(-5);
// checkNumber(0);

//feature request
//1
/*const num11 = 10;
const num21 = 3;

// Perform basic arithmetic operations
const addition = num11 + num21;
const subtraction = num11 - num21;
const multiplication = num11 * num21;
const division = num11 / num21;
const remainder1 = num11 % num21;
console.log(`Addition of ${num11} and ${num21}:`, addition); 
console.log(`Subtraction of ${num11} and ${num21}:`, subtraction); 
console.log(`Multiplication of ${num11} and ${num21}:`, multiplication);
console.log(`Division of ${num11} and ${num21}:`, division); 
console.log(`Remainder of ${num11} divided by ${num21}:`, remainder1); */

//2
/*const num11 = 15;
const num21 = 20;
// Using comparison operators
console.log("num1:", num11, "num2:", num21);
console.log("num1 == num2:", num11 == num21);           
console.log("num1 === num2:", num11 === num21);         
console.log("num1 != num2:", num11 != num21);           
console.log("num1 !== num2:", num11 !== num21);         
console.log("num1 > num2:", num11 > num21);             
console.log("num1 >= num2:", num11 >= num21);           
console.log("num1 < num2:", num11 < num21);             
console.log("num1 <= num2:", num11 <= num21);           
// Combining conditions using logical operators
const condition1 = num11 < num21; 
const condition2 = num11 === 15; 
console.log("condition1 && condition2:", condition1 && condition2);
console.log("condition1 || condition2:", condition1 || condition2); 

const condition3 = num21 > 30; 
console.log("condition1 && condition3:", condition1 && condition3);
console.log("condition1 || condition3:", condition1 || condition3);
// Using NOT operator
console.log("!condition1:", !condition1); 
console.log("!condition3:", !condition3); */

//3
function checkNumber(number) {
    const result = number > 0 ? "positive" : number < 0 ? "negative" : "zero";
    console.log(`The number ${number} is ${result}.`);
}   
checkNumber(0);     
checkNumber(42);    
checkNumber(-7);    
