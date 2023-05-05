const container = document.querySelector(".container");
const gridInput = document.querySelector("#grid-input");
const gridInputSubmitButton = document.querySelector("#submit-button");
const rgbButton = document.querySelector("#rgb-toggle");
const blackButton = document.querySelector("#black-toggle");
const clearButton = document.querySelector(".clear-canvas");

let gridSize = 16;

let getRandomColor = () => {
	const red = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);

	return `rgb(${red}, ${blue}, ${green})`;
}

let clearGrid = () => {
	container.innerText = "";
}

let createDivs = (n) => {
	clearGrid();
	let gridColumns = [];
	for(let i = 0; i<n*n; i++){
		const div = document.createElement("div");
		container.appendChild(div);
		div.classList.add("child");
	}
	for(let i = 0; i<n; i++){
		gridColumns.push("1fr ");
	}
	container.style.gridTemplateColumns = gridColumns.join("");
	container.style.gridTemplateRows = gridColumns.join("");

	const gridChildren = document.querySelectorAll(".child");

	gridChildren.forEach((gridChild) => {
		gridChild.addEventListener("mousemove", () => {
			if(blackButton.className == "black-toggle-on"){
				gridChild.style.backgroundColor = "black";
			}
			else if(rgbButton.className == "rgb-toggle-on"){
				const randomColor = getRandomColor();
				gridChild.style.backgroundColor = randomColor;
			}
			else{
				gridChild.style.backgroundColor = "blue";
				// console.log(rgbButton.classList);
			}
		});
	})

}

let getInputValue = () => {
	gridSize = gridInput.value;
	if (gridSize > 100) { 
		gridSize = 100;
	}
	createDivs(gridSize);
}

gridInputSubmitButton.addEventListener("click", getInputValue);
createDivs(gridSize);


rgbButton.addEventListener("click", () => {
	rgbButton.classList.toggle("rgb-toggle-on");
	blackButton.classList.remove("black-toggle-on");
})

blackButton.addEventListener("click", () => {
	blackButton.classList.toggle("black-toggle-on");
	rgbButton.classList.remove("rgb-toggle-on");
})

clearButton.addEventListener("click", () => {
	clearGrid();
	createDivs(gridSize);
})