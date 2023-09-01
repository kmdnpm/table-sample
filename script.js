// Get references to elements
const dataInput = document.getElementById('dataInput');
const displayValue = document.getElementById('displayValue');

// Add event listener to input element
dataInput.addEventListener('input', updateDisplay);

// Function to update the display value
function updateDisplay() {
    const inputValue = parseFloat(dataInput.value);

    // Check if the input is a valid number
    if (!isNaN(inputValue)) {
        displayValue.textContent = inputValue.toFixed(2);
    } else {
        displayValue.textContent = 'Invalid';
    }
}
