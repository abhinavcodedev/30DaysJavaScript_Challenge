// Task 7:Form submit event listener
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from being submitted

    const formData = new FormData(event.target); // Create FormData object from the form
    const data = Object.fromEntries(formData.entries()); // Convert FormData to a plain object

    console.log(data); // Log the form data
});

// Task 8: Select change event listener
document.getElementById('mySelect').addEventListener('change', function() {
    const selectedValue = this.value; // Get the selected value
    document.getElementById('selectedValue').textContent = `Selected value: ${selectedValue}`; // Display the selected value
});