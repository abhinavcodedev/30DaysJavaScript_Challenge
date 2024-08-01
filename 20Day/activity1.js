
//Activity 1: Understanding LocalStorage

// Task 1: Write a script to save a string value to localstorage and retrieve it. Log the retrieved value.
localStorage.setItem("string", "Test");
myValue = localStorage.getItem("string");
console.log(myValue);
//Define a string value to save
// const myString = "Hello, localStorage!";

// // Save the string value to localStorage
// localStorage.setItem('myStringKey', myString);

// // Retrieve the string value from localStorage
// const retrievedString = localStorage.getItem('myStringKey');

// // Log the retrieved value
// console.log("Retrieved value from localStorage:", retrievedString);

//Task 2: Write a script to save an object to localstorage by converting it to a JSON string. Retrieve and parse the object, then log it.
let person = {
  name: "Abhinav",
  country: "India",
  age: 23,
};

localStorage.setItem("objectPerson", JSON.stringify(person));
console.log(JSON.parse(localStorage.getItem("objectPerson")));