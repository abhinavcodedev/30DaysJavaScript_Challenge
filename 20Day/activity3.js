// Activity 3: Understanding SessionStorage

//Task 5: Write a script to save a string value to sessionstorage and retrieve it. Log the retrieved value.

sessionStorage.setItem("string", "Abhinav");
console.log(sessionStorage.getItem("string"));


//Task 6: Write a script to save an object to sessionstorage by converting it to a JSON string. Retrieve and parse the object, then log it.

let task6Object = {
  language: "JavaScript",
  version: "1.0",
  projectName: "JavaScript 30Days Challenge Chai aur code",
};
sessionStorage.setItem("object", JSON.stringify(task6Object));
console.log(JSON.parse(sessionStorage.getItem("object")));