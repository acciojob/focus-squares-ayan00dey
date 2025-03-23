//your JS code here. If required.
const squares = document.querySelectorAll(".square");

function handleHover(event){
	squares.forEach(square =>{
		if(square !== event.target){
			square.style.backgroundColor = "#6F4E37";
		}
	})
}

function resetColor(event){
	squares.forEach(square =>{
		
			square.style.backgroundColor = "#E6E6FA";
		
	})
}

squares.forEach(square =>{
	square.addEventListener("mouseenter",handleHover);
	square.addEventListener("mouseleave",resetColor);
})
