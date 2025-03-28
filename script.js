// Select all squares
const squares = document.querySelectorAll(".square");

// Function to change other squares to Coffee color on hover
squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        squares.forEach(s => s.style.backgroundColor = s === square ? "#E6E6FA" : "#6F4E37");
    });

    // Reset colors on mouseout
    square.addEventListener("mouseout", () => {
        squares.forEach((s) => s.style.backgroundColor = "#E6E6FA"); // Lavender
    });
});
