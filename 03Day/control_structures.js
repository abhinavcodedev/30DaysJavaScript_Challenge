//Activity1
//task1
/*function checknum(num){
    if(num > 0){
        console.log(`The ${num} is positive`)
    }
    if(num<0){
        console.log(`The ${num} is negative`)
    }
    if(num == 0){
        console.log(`The ${num} is zero`)
    }
}
checknum(-7);
checknum(10);
checknum(0);*/

//task2
/*function checkage(age){
    if(age >= 18){
        console.log(`The ${age} is eligible for vote`)
    }else{
        console.log(`The ${age} is n0t eligible for vote`)
    }
}
checkage(20);
checkage(17);*/

//Activity2
//task3
/*function checklargetno(num, num1, num2){
    let large;
    if(num>num1){
        if(num>num2){
            large = num;
        }else{
            large = num2;
        }
    }else{
        if(num1>num2){
            large = num1;
        }else{
            large = num2;
        }
    }
    console.log(`The largest number among ${num}, ${num1}, ${num2} is ${large}`);
}
checklargetno(19,12,30)*/

//Activity3
//task4
/*function getDayOfWeek(dayNumber) {
    let dayName;
    switch (dayNumber) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 7:
            dayName = "Sunday";
            break;
        default:
            dayName = "Invalid day number";
    }
    console.log(`The day number ${dayNumber} corresponds to: ${dayName}`);
}

getDayOfWeek(1);
getDayOfWeek(3); 
getDayOfWeek(5); 
getDayOfWeek(7); 
getDayOfWeek(9);*/ 

//task5
/*function assigngrade(score) {
    let grade;

    switch (true) {
        case (score >= 90):
            grade = 'A';
            break;
        case (score >= 80):
            grade = 'B';
            break;
        case (score >= 70):
            grade = 'C';
            break;
        case (score >= 60):
            grade = 'D';
            break;
        default:
            grade = 'F';
    }

    console.log(`The grade for a score of ${score} is ${grade}.`);
}
assigngrade(80);
assigngrade(40);*/

//Activity4
//task6
/*function checkevenorodd(number){
    const res = (number%2==0)? "even ":"odd";
    console.log(`The ${number} is ${res}`);
}
checkevenorodd(11);*/

//Activity5
//task7
function isLeapYear(year) {
    const isLeap = (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0);
    return isLeap;
}
const years = [2000, 1900, 2020, 2021, 2024];
years.forEach(year => {
    const result = isLeapYear(year) ? "is a leap year" : "is not a leap year";
    console.log(`The year ${year} ${result}.`);
});

//Features Request
//1
//2
//3
//4
//5