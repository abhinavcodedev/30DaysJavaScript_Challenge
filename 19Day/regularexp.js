
//Activity 1: Basic Regular Expressions

//Task 1: Write a regular experssion to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.

const text = "JavaScript is great. I love JavaScript for web development. JavaScript is versatile.";
const regex = /JavaScript/g;
const matches = text.match(regex);
console.log(matches);


//Task 2: Write a regular experssion to match all digits in a string. Log the matches.

const texts = "The year is 2024 and the time is 15:30.";
const regexs = /\d+/g;
const matchess = texts.match(regexs);
console.log(matchess);


//Activity 2: Character claasses and Qnatifiers 

//Task 3: Write a regular experssion to match all words in a string that start with a capital letter. Log the matches.

const textses = "Hello World! JavaScript is a powerful language. Enjoy Learning.";
const regexes = /\b[A-Z][a-zA-Z]*\b/g;
const matcheses = textses.match(regexes);
console.log(matcheses);


//Task 4: Write a regular experssion to match all sequences of one or more digits in a string. Log the matches.

const textsss = "The address is 1234 Elm St. and the zip code is 56789. Call 800-555-1234 for info.";
const regexsss = /\d+/g;
const matchesss = textsss.match(regexsss);
console.log(matchess);


//Activity 3: Grouping and Capturing

//Task 5: Write a regular expression to capture the area code, central office code, and line number from a US Phone number format(e.g., (123) 456-7890). Log the captures 

const text5 = "Call us at (123) 456-7890 or (987) 654-3210 for more information.";
const regex5 = /\((\d{3})\) (\d{3})-(\d{4})/g;
const matches5 = [...text5.matchAll(regex5)];
matches5.forEach(match => {
    const [fullMatch, areaCode, centralOfficeCode, lineNumber] = match;
    console.log(`Full match: ${fullMatch}`);
    console.log(`Area Code: ${areaCode}`);
    console.log(`Central Office Code: ${centralOfficeCode}`);
    console.log(`Line Number: ${lineNumber}`);
});

//Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.

const text6 = "Please contact us at support@example.com or admin@domain.org for more information.";
const regex6 = /(\w+@\w+\.\w+)/g;
const matches6 = [...text6.matchAll(regex6)];

// Log the captures
matches6.forEach(match => {
    const [fullMatch] = match;
    // Extract username and domain
    const [username, domain] = fullMatch.split('@');
    console.log(`Full match: ${fullMatch}`);
    console.log(`Username: ${username}`);
    console.log(`Domain: ${domain}`);
});


//Activity 4: Assertions and Boundaries

//Task 7:Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.

const texts7 = [
    "Hello world! This is a test.",
    "Another example starts here.",
    "Test at the beginning.",
    "No match here."
];
const regex7 = /^\w+/;
texts7.forEach(text => {
    const match = text.match(regex7);
    console.log(`String: "${text}"`);
    if (match) {
        console.log(`Match: ${match[0]}`);
    } else {
        console.log("No match");
    }
    console.log('---');
});

//Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches

// Sample strings
const texts8 = [
    "This is the end word",
    "Just a sample",
    "Another example here",
    "No match here",
    "Ends with Word"
];

const regex8 = /\b(\w+)\b$/;

texts8.forEach(text => {
    const match = text.match(regex8);
    console.log(`String: "${text}"`);
    if (match) {
        console.log(`Match: ${match[1]}`);
    } else {
        console.log("No match");
    }
    console.log('---');
});


//Activity 5: Practical Applications

//Task 9:Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercae letter, one digit, and one specia character). Log whether the password is valid

const passwords = [
    "Password123!",
    "password123", 
    "PASSWORD123!",  
    "Passw@rd",      
    "P@ssw0rd",      
    "12345678",     
    "P@ssw0rd!"     
];


const regex9 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*()_+!])[A-Za-z\d@#$%^&*()_+!]{8,}$/;
passwords.forEach(password => {
    const isValid = regex9.test(password);
    console.log(`Password: "${password}"`);
    console.log(`Valid: ${isValid}`);
    console.log('---');
});


//Task 10:Write a regular expression to validate a URL. Log whether the URL is valid.

const urls = [
    "http://example.com",
    "https://www.example.com",
    "ftp://files.example.com/path/to/file",
    "http://example.com:8080",
    "http://example.com/path?query=1#fragment",
    "http://example",
    "https://.com",
    "http://example.com:99999", // Invalid port
    "http://256.256.256.256", // Invalid IP
    "https://example.com/path/to/resource"
];

// Regular expression to validate a URL
const regex10 = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w\.-]*)*(\?[;&=\w\.-]*)?(#[\w\-]*)?$/i;

urls.forEach(url => {
    const isValid = regex10.test(url);
    console.log(`URL: "${url}"`);
    console.log(`Valid: ${isValid}`);
    console.log('---');
});
