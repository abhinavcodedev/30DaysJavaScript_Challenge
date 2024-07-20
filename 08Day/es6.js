//Activity 1

//Task 1 : Use template literals to create a string that includes variables for a person's name and age, and log the string to the consol
const person = {
    name: "Abhinav",
    age: 24
}
console.log(`Person details:- name: ${person.name}, age: ${person.age}`);

//Task 2: Create a multi-line string using template literals and log it to the console.
console.log(`This is a multi line string
where this line will print second with spaces added as it is 
using template literals`);

//Activity 2: Destreucting

//Task 3: Use array destructuring to extract the first and second element from an array of numbers and log them to the console.
// const arr = [1, 2, 3, 4, 5]
// const [x, y] = arr
const [x, y, z] = [1, 2, 3, 4, 5]
console.log(x, y);
console.log(x, y, z);

//Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
    title: "Ramayan",
    author: "Valmiki"
}

const { title, author } = book;
console.log(`title: ${title}, author: ${author}`);

// Activity 3: Spread and Rest Operators
// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const arr = [1, 2, 3, 4, 5]
const arr2 = [0, ...arr, 6, 7]
console.log(arr2);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum:", sum(1, 2, 3, 4, 5));
console.log("Sum:", sum(10, 20));

// Activity 4: Default Parameters
// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1.Log the result of calling this function with and without the second parameter.
const product = (n1, n2 = 1) => n1 * n2;
console.log("product: " + product(2, 5));
console.log("product: " + product(99));

// Activity 5: Enhanced Object Literals

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

const name = "Calvin";
const color = "Blonde";
const age = 3;

// object literal
const yetAnotherDog = {
    name,
    color,
    age,
    barkWithName() {
        console.log('Bakk Bakk!!, I am '
            + this.name + ' and I am a '
            + this.age + ' years old, '
            + this.color + ' coloured dog.Bakk Bakk!!');
    }
};

console.log(yetAnotherDog);
yetAnotherDog.barkWithName();

// Task 9: Create an object with computed property names based on variables and log the object to the console.
const prop1 = 'title';
const prop2 = 'author';
const prop3 = 'year';


const bookDetails = {
    [prop1]: "Sherlock Holmes",
    [prop2]: "Arthur Conan Doyle",
    [prop3]: 1902,
    getDetails() {
        return `${this[prop1]} by ${this[prop2]}, published in ${this[prop3]}`;
    }
};

console.log(bookDetails);
console.log(bookDetails.getDetails());
