// Select all squares
const squares = document.querySelectorAll(".square");

// Function to change other squares to Coffee color
function handleHover(event) {
    squares.forEach(square => {
        if (square !== event.target) {
            square.style.backgroundColor = "#6F4E37"; // Coffee color
        }
    });
}

// Function to reset squares to Lavender
function resetColors() {
    squares.forEach(square => {
        square.style.backgroundColor = "#E6E6FA"; // Lavender color
    });
}

// Add event listeners for hover and mouse out
squares.forEach(square => {
    square.addEventListener("mouseenter", handleHover);
    square.addEventListener("mouseleave", resetColors);
});
