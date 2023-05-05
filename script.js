const container = document.querySelector(".container");

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
}

createDivs(64);
const divs = document.querySelectorAll(".child");

divs.forEach((div) => {
	div.addEventListener("mouseover", () => {
		div.style.backgroundColor = 'blue';
	});
})