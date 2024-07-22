// Attach a single event listener to the parent <ul> element
const dynamicList = document.getElementById('dynamicList');
const addItemButton = document.getElementById('addItemButton');

document.getElementById('myList').addEventListener('click', function(event) {
    // Check if the clicked element is an <li> element
    if (event.target && event.target.tagName === 'LI') {
        console.log('Clicked item content:', event.target.textContent);
    }
});
function addNewItem() {
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${dynamicList.children.length + 1}`;
    dynamicList.appendChild(newItem);
}

// Event delegation: handle clicks on dynamically added <li> elements
dynamicList.addEventListener('click', function(event) {
    if (event.target && event.target.tagName === 'LI') {
        alert(`Clicked item content: ${event.target.textContent}`);
    }
});

// Add click event listener to the button to add new items
addItemButton.addEventListener('click', addNewItem);