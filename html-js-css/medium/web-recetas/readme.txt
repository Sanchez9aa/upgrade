Prueba Técnica: Reforzamiento de JS, HTML5 y CSS3

Dificultad: Medium

Objetivo:
Desarrollar una página web interactiva que permita al usuario visualizar y buscar recetas de cocina. La aplicación deberá mostrar una lista de recetas, con una imagen de referencia, nombre y breve descripción. Además, debe existir un buscador que permita filtrar las recetas por nombre.

Requisitos:

-Uso de JS, HTML5 y CSS3.
-Diseño responsive.
-Implementar un buscador que filtre las recetas por nombre.
-No es necesario un backend, pero se pueden utilizar datos estáticos en formato JSON para simular la información de las recetas.
Pasos a seguir:

Diseño de la Interfaz

Diseñe una maqueta básica (mockup) de cómo se verá la página principal. Considere dónde se ubicará el buscador, la lista de recetas y cualquier otro elemento que considere necesario.
Estructura Básica

- Cree una nueva página HTML y agregue la estructura básica: DOCTYPE, head, body, etc.
- Agregue las referencias a un archivo CSS y un archivo JS externos.
- Diseño de Estilos

- Utilice CSS3 para estilizar la página. Considere uso de flexbox o grid para el diseño responsive.
- Asegúrese de que el diseño sea atractivo y funcional en dispositivos móviles y de escritorio.
- Implementación de Datos Estáticos

- Crea un archivo recetas.json con al menos 10 recetas. Cada receta debe tener un id, nombre, imagen y descripción.
- En tu archivo JS, lee estos datos y almacénalos en una variable.
- Mostrar las Recetas

- Utilice JS para iterar sobre las recetas en el archivo JSON y mostrarlas en la página.
- Cada receta debe mostrarse con su imagen, nombre y descripción.
- Implementación del Buscador

Agregue un campo de texto y un botón para buscar.
Cuando el usuario escriba un término de búsqueda y pulse el botón (o presione 'Enter'), filtre las recetas que contengan ese término en el nombre y actualice la vista.
Si no se encuentran coincidencias, muestre un mensaje indicando que no hay recetas que coincidan con el término de búsqueda.


Pruebas

Asegúrese de probar la funcionalidad en diferentes dispositivos y navegadores.
Revise el diseño responsive, pruebe la funcionalidad de búsqueda y asegúrese de que se muestren correctamente las recetas.
Documentación

Agregue comentarios a su código para explicar las secciones clave o cualquier funcionalidad compleja.
En el archivo README.md de su proyecto, describa brevemente el propósito de la aplicación, cómo instalarla o ejecutarla, y cualquier otra información relevante para un desarrollador o usuario que vea su proyecto.
Consejos adicionales:

Para una mayor interactividad, puede agregar animaciones utilizando CSS3.
Puede considerar usar bibliotecas como lodash o jQuery para ayudar con algunas tareas, pero no es obligatorio.
¡Creatividad! Si siente que puede agregar alguna otra característica que enriquezca la aplicación sin desviarse demasiado del objetivo, ¡adelante!
Entrega:

Al finalizar, comprima su proyecto y envíelo a través del medio acordado. Asegúrese de que su proyecto incluya todos los archivos necesarios para su ejecución, incluido el archivo README.md.