//Task 2: Create a module that export an object repersenting a person with properties and methods. Import abd use this module in another script.

const person = {
    name:'ABHINAV KUMAR',
    age:23,
    greet(){
        console.log(`Hello my name ia ${this.name} and I am ${this.age} years old.`)
    },
    celebrate(){
        this.age+=1;
        console.log(`Happy Birthday! I'm now ${this.age} year old.`)
    }
};
module.exports = person;