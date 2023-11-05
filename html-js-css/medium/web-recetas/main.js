let recetasArray = [];

fetch("./data/recetas.json")
	.then((response) => response.json())
	.then((recetas) => {
		recetasArray = recetas;
		displayRecetas(recetas);
	})
	.catch((error) => {
		console.error("Error al cargar el archivo JSON:", error);
	});

document.getElementsByTagName("button")[0].addEventListener("click", () => {
	filterRecetas(document.getElementsByTagName("input")[0].value);
});

function filterRecetas(texto) {
	const recetasFiltradas = recetasArray.filter((receta) => {
		return receta.nombre.toLowerCase().includes(texto.toLowerCase());
	});

	displayRecetas(recetasFiltradas);
}

function displayRecetas(recetas) {
	const recetasContainer = document.querySelector(".recetas-container");
	if (recetas.length === 0) {
		recetasContainer.innerHTML = "<h3>No se encontraron recetas</h3>";
	} else {
		recetasContainer.innerHTML = recetas
			.map((receta) => {
				return `
			<div class="receta">
				<div class="receta-header">
					<img src="${receta.imagen}" alt="${receta.nombre}" />
				</div>
				<div class="receta-body">
					<h3>${receta.nombre}</h3>
					<p>${receta.descripcion}</p>
				</div>
			</div>
			`;
			})
			.join("");
	}
}
