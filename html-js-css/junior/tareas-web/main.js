let tasks = [];

if (localStorage.getItem("tasks")) {
	tasks = JSON.parse(localStorage.getItem("tasks"));
	if (tasks.length > 0) {
		displayTasks();
	}
}

const form = document.querySelector("form");
const input = document.querySelector("input");

function checkTask(taskValue) {
	if (taskValue === "") {
		alert("Debes escribir una tarea");
		return false;
	}
	if (tasks.some((task) => task === taskValue)) {
		alert("La tarea ya existe");
		return false;
	}
	return true;
}

form.addEventListener("submit", (event) => {
	event.preventDefault();
	if (!checkTask(input.value)) {
		return;
	}
	addTask(input.value);
	localStorage.setItem("tasks", JSON.stringify(tasks));
	input.value = "";
});

function addTask(value) {
	tasks.push(value);

	displayTask(value);
}

function deleteTask(li) {
	const index = tasks.indexOf(li.innerText);
	tasks.splice(index, 1);
	localStorage.setItem("tasks", JSON.stringify(tasks));
	if (tasks.length === 0) {
		localStorage.removeItem("tasks");
	}
	li.remove();

	if (tasks.length === 0) {
		document.querySelector(".tareas-container").remove();
	}
}

function createTasksStructure() {
	const main = document.querySelector("main");

	const section = document.createElement("section");
	section.classList.add("tareas-container");

	const h2 = document.createElement("h2");
	h2.innerText = "Tareas:";

	const ul = document.createElement("ul");
	ul.addEventListener("click", (event) => {
		tacharTask(event.target);
	});
	ul.addEventListener("dblclick", (event) => {
		deleteTask(event.target);
	});

	section.appendChild(h2);
	section.appendChild(ul);

	main.appendChild(section);
}

function displayTasks() {
	if (!document.querySelector(".tareas-container")) {
		createTasksStructure();
	}

	const ul = document.querySelector("ul");

	tasks.forEach((task) => {
		const li = document.createElement("li");
		li.innerText = task;

		ul.appendChild(li);
	});
}

function displayTask(taskValue) {
	if (!document.querySelector(".tareas-container")) {
		console.log("hola");
		createTasksStructure();
	}

	const ul = document.querySelector("ul");

	const li = document.createElement("li");
	li.innerText = taskValue;

	ul.appendChild(li);
}

function tacharTask(li) {
	if (li.classList.contains("tachado")) {
		li.classList.remove("tachado");
	} else {
		li.classList.add("tachado");
	}
}
