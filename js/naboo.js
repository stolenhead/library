;(function(window, document) {
	/** FUNCIONES REUTILIZABLES **/

	window.$naboo = {};

	// Devuelve el padre "n" del elemento

	$naboo.padres = function (elemento, numero) {
		while(numero > 0) {
			elemento = elemento.parentElement;
			numero--;
		}
		return elemento;
	};

	// Elimina elemento

	$naboo.eliminar = function (elemento) {
		elemento.parentElement.removeChild(elemento);
	};

	// Devuelve el elemento creado con clases

	$naboo.crearConClases = function (etiqueta, clases = []) {
		var elemento = document.createElement(etiqueta);
		this.agregarClases(elemento, clases);
		return elemento;
	};

	// Devuelve el elemento creado con atributos

	$naboo.crearConAtributos = function (etiqueta, atributo = {}) {
		var elemento = document.createElement(etiqueta);
		for (var llave in atributo) {
			// Array.isArray -> Método para validar si es un arreglo
			if (Array.isArray(atributo[llave])) {
				this.agregarClases(elemento, atributo[llave]);
			} else {
				elemento.setAttribute(llave, atributo[llave]);
			}
		}
		return elemento;
	};

	// Función para agregar clases a un elemento

	$naboo.agregarClases = function (elemento, clases) {
		var l = clases.length;
		if (l > 0) {
			for (var i = 0; i < l; i++) {
				elemento.classList.add(clases[i]);
			}
		}
	};
})(window, document);