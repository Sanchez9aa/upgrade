let users = [];
const userContainer = document.querySelector("#user-row");
const emailContainer = document.querySelector("#email-row");
const telContainer = document.querySelector("#tel-row");

function displayAllUsers() {
	users = JSON.parse(localStorage.getItem("users"));
	users.forEach((user) => {
		const userName = document.createElement("p");
		userName.textContent = user.name;
		userName.addEventListener("click", () => {
			console.log("clicked");
			createModalToShowUserInfo(user);
		});

		const email = document.createElement("p");
		email.textContent = user.email;

		const tel = document.createElement("p");
		tel.textContent = user.tel;

		userContainer.appendChild(userName);
		emailContainer.appendChild(email);
		telContainer.appendChild(tel);
	});
}

if (userContainer.children.length === 1) {
	displayAllUsers();
}

function addUser(event) {
	event.preventDefault();

	const userValue = event.target.elements;
	const { user, email, tel } = userValue;

	if (!checkIfUserExists(email.value, tel.value)) {
		users.push({ name: user.value, email: email.value, tel: tel.value });
		localStorage.setItem("users", JSON.stringify(users));
		displayNewUser();
	} else {
		alert("User already exists");
	}

	event.target.reset();
}

function checkIfUserExists(email, tel) {
	return users.some((user) => user.tel === tel || user.email === email);
}

function displayNewUser() {
	const lastUser = users[users.length - 1];

	const userName = document.createElement("p").addEventListener("click", () => {
		console.log(clicked);
		createModalToShowUserInfo(lastUser);
	});
	userName.textContent = lastUser.name;

	const email = document.createElement("p");
	email.textContent = lastUser.email;

	const tel = document.createElement("p");
	tel.textContent = lastUser.tel;

	userContainer.appendChild(userName);
	emailContainer.appendChild(email);
	telContainer.appendChild(tel);
}

function closeModalOnOutsideClick(event) {
	const modal = document.querySelector(".modal");
	if (
		event.target.className === "modal" ||
		event.target.className === "close"
	) {
		modal.remove();
	}
}

document.addEventListener("click", closeModalOnOutsideClick);

function createModalToShowUserInfo(user) {
	const body = document.querySelector("main");

	const modal = document.createElement("div");
	modal.classList.add("modal");
	modal.innerHTML = `
		<div class="modal-content">
			<span class="close">&times;</span>
			<p>${user.name}</p>
			<p>${user.email}</p>
			<p>${user.tel}</p>
		</div>
	`;

	body.appendChild(modal);
}
