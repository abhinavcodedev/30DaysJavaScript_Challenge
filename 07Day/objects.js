//Acticity 1:Object creation and Access

//Task 1 : Create an object representing a book with properties like title, author, and year, and log the object
const book = {
  title: "Concept of Physics",
  author: "H.C.Verma",
  year: "2000",
};

console.log(book);

//Task 2: Access and log the title and author properties of the object.
const title = book.title;
console.log(title);

const author = book.author;
console.log(author);

//Activity 2: Object Methods

//Task 3: Add a method to the book object that returns a string with the book's title and author and log the result of calling this method
book.titleAndauthorMethod = () => {
    return `Books title is ${book.title} and author is ${book.author}`;
  };
  console.log(book.titleAndauthorMethod());
  
//Task 4: Add a method to the book object that takes a parameter(year)  and updates the book's year property and log the updated object
book.updateYear = (year) => {
    book.year = year;
  };
  book.updateYear(2002);

//Activity 3: Nested Object

//Task 5: Create a nested object representing a library with properties like name and book(an array of book objects), and log the library object
book.library = {
  name: "libraryOfBooks",
  bookstitle: ["Chemistry", "Maths", "Python", "DBMS"],
};
console.log(book.library);

//Task 6: Access and log the name of the library and the titles of all the books in the library

const nameOfLibrary = book.library.name;
console.log(nameOfLibrary);
const bookstitle = book.library.bookstitle.forEach((bookName) => {
  console.log(bookName);
});

//Activity 4: The this keyword

//Task 7:Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method
book.thismethod = () => {
  return `Title of book is ${book.title} and year is ${book.year}`;
};
console.log(book.thismethod());


//Activity 5: Object Iteration

//Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value
for (const items in book) {
    typeof book[items] == "function" ? console.log(`${items} : ${book[items]()}`)
      : typeof book[items] == "object" ? console.log(`${items} : ${JSON.stringify(book[items])}`) 
      : console.log(`${items} : ${book[items]}`);
}

//Task 9: Use Object.keys and Object.values methods to log all the keys and value of the book object
console.log(Object.keys(book));
// console.log(Object.values(book));