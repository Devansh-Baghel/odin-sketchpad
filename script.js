const container = document.querySelector(".container");
const gridInput = document.querySelector("#gridInput");
const gridInputSubmitButton = document.querySelector("button")

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
		gridChild.addEventListener("mouseover", () => {
			const randomColor = getRandomColor();
			gridChild.style.backgroundColor = randomColor;
		});
	})

}

let getInputValue = () => {
	gridSize = gridInput.value;
	if (gridSize > 100) { 
		gridSize = 100;
	}
	clearGrid();
	createDivs(gridSize);
}

gridInputSubmitButton.addEventListener("click", getInputValue);
createDivs(gridSize);
