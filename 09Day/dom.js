// Selectt and Manipulation Element:-

// Task One:-

document.getElementById('heading').innerText = "Change the Text by using ID "

// Task Two:-

document.getElementsByClassName('first_heading')[0].style.backgroundColor = "red"


// Creating and Appending Elements:-

// Task Three:-

let div = document.createElement('div')
let para = document.createElement('p')

// Method One:-
// para.innerText = "Hi, I'm Abhinav"


// Method Two:-

let textNodeThree = document.createTextNode("Hi, I'm Abhinav")
para.append(textNodeThree)
div.append(para)
document.body.append(div)


// Task Four:-
var li = document.createElement("li");
li.textContent = "Wednesday";
document.querySelector("ul").appendChild(li)

// Removing Element:-

// Task Five:-

const subHeading = document.getElementsByClassName('sub_heading')[0]
// subHeading.remove()

// Task Six:-

let lastElement = document.querySelector('.sub_heading')
lastElement.lastElementChild.remove()

// Modifying Attribute and Classes:-

// Task Seven:-

let img = document.querySelector('img')
img.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3kCrw3N9kzVNr-DwA0j-TGy80yQZrdOTAbQ&s")

// Task Eight:-

let firstHeading = document.getElementsByClassName('first_heading')
firstHeading[0].setAttribute('style','color:white; background-color:green; padding:20px; font-size:30px; border-radius:12px;');

firstHeading[0].setAttribute('style'," ")

// Event Handling:-

// Task Nine:-

let changeParagraph = document.querySelectorAll('p')[0]

function changePara(){

    // Method One:-

    changeParagraph.innerText = "This change in the paragraph occurs when the button is clicked."

    // Method Two:-

    // let textNode = document.createTextNode("This change in the paragraph is caused by clicking the button by using textNode")
    // changeParagraph.innerText = ""
    // changeParagraph.append(textNode)
    // console.log("Changed Successfully")
}

// Task Ten:- 

let changeBorder = document.querySelector('#changeBorder');

changeBorder.addEventListener('mouseover',()=>{
    changeBorder.style.border = "10px solid green"
})