let tasks = [];

const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	addTask(input.value);
	input.value = "";
});

function addTask(value) {
	tasks.push(input.value);

	displayTasks();
}

function displayTasks() {
	const main = document.querySelector("main");

	const section = document.createElement("section");
	section.classList.add("tareas-container");

	const h2 = document.createElement("h2");
	h2.innerText = "Tareas:";

	const ul = document.createElement("ul");
	ul.addEventListener("click", (event) => {
		tacharTask(event.target);
	});

	section.appendChild(h2);
	section.appendChild(ul);
	main.appendChild(section);

	tasks.forEach((task) => {
		const li = `<li>${task}</li>`;
		ul.innerHTML += li;
	});
}

function tacharTask(li) {
	console.log(li);
	if (li.classList.contains("tachado")) {
		li.classList.remove("tachado");
	} else {
		li.classList.add("tachado");
	}
}
