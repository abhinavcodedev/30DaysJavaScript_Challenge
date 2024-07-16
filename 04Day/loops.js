//Activity 1
//task1
for(let i =1;i<=10;i++){
    console.log(i);
}
//task2
let n1= 5;
console.log("Multiplication of 5");
for(let i=1;i<=10;i++){
    console.log(`${n1} * ${i} = ${n1 * i}`);
}

//Activity 2
//task3
let i1=1;
let sum=0;
while(i1<=10){
    sum+=i1;
    i1++;
}
console.log(`Sum of 1 to 10 is ${sum}`);
//task4
let ii=10;
while(ii>=1){
    console.log(ii);
    ii--;
}

//Activity 3
//task5
let i2=1;
do{
    console.log(i2);
    i2++;
}while(i2<=5);

//task6
function factorial(n) {
    let result = 1;
    let i = n;
    do {
        result *= i;
        i--;
    } while (i > 0);
    return result;
}
const n2 = 5;
console.log(`The factorial of ${n2} is: ${factorial(n2)}`);


//Activity 4
//task7
let res="";
for( let i=0;i<5;i++){
    for(let j=0;j<=i;j++){
        res+="* ";
    }
    res+="\n"
    console.log(res);
}
//Activity 5
//task8
for(let i=1; i<=10;i++){
    if(i==5) continue;
    console.log(i);
}
//task9
for(let i=1; i<=10;i++){
    if(i==7) break;
    console.log(i);
}

//feature request
//1.
for(let i=1;i<=10;i++){
    console.log(i);
}

let i=1;
while(i<=10){
    console.log(i);
    i++;
}

//2.
let n= 5;
console.log("Multiplication of 5");
for(let i=1;i<=10;i++){
    console.log(`${n} * ${i} = ${n * i}`);
}

//3.
//GO to task 7

//4.
//Repeat Task 4
//5.
//Repeat Task 6