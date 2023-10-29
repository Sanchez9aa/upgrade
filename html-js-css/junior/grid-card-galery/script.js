function printCards() {
	const cards = `<div class="card">
			<div class="card-image">
				<img src="https://picsum.photos/200/300" alt="" />
			</div>
			<div class="card-content">
				<h2>Título</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
					voluptatum.
				</p>
			</div>
			<div class="card-footer">
				<button>Leer más</button>
			</div>
		</div>`;

	const container = document.querySelector(".card-container");

	for (let i = 0; i < 6; i++) {
		container.innerHTML += cards;
	}
}

function showCardInfoOnClick() {
	const cards = document.querySelectorAll(".card");

	cards.forEach((card) => {
		console.log(card.children[2].children[0]);
		card.children[2].children[0].addEventListener("click", () => {
			alert(card.children[1].children[1].innerText);
		});
	});
}

printCards();
showCardInfoOnClick();
