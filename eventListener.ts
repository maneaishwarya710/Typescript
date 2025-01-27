// Get the button element by its ID
const button = document.getElementById('myButton');

// Check that the button is not null
if (button) {
    // Add an event listener to the button
    button.addEventListener('click', () => {
        alert('Button was clicked!');
    });
}
