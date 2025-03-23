// Select all squares
const squares = document.querySelectorAll(".square");

// Function to change other squares to Coffee color on hover
squares.forEach((square, index) => {
    square.addEventListener("mouseenter", () => {
        squares.forEach((s, i) => {
            if (i !== index) s.style.backgroundColor = "#6F4E37"; // Coffee
        });
    });

    // Reset colors on mouseout
    square.addEventListener("mouseleave", () => {
        squares.forEach((s) => s.style.backgroundColor = "#E6E6FA"); // Lavender
    });
});
