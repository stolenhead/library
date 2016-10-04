window.addEventListener("load", cargaPagina);

var contador = 1;

function cargaPagina() {
	var boton = document.getElementById("enviar");
	boton.addEventListener("click", agregarMensaje);
}

function agregarMensaje(evento) {
	evento.preventDefault();

	var texto = document.getElementById("mensaje");
	var mensajes = document.getElementById("mensajes");

	var divHorizontal = $naboo.crearConClases("div", ["card", "horizontal"]);

	var divTarjeta = $naboo.crearConClases("div", ["card-stacked"]);

	var divContenido = $naboo.crearConClases("div", ["card-content"]);

	var checkbox = $naboo.crearConAtributos("input", {
		"type": "checkbox",
		"class": ["uno", "dos", "tres"],
		"id": "check" + contador
	});
	checkbox.addEventListener("click", tacharTexto);

	var etiqueta = $naboo.crearConAtributos("label", {
		"for": "check" + contador
	});
	etiqueta.textContent = texto.value;

	var icono = $naboo.crearConClases("i", ["material-icons", "right"]);
	icono.textContent = "delete";
	icono.addEventListener("click", eliminarMensaje);

	divContenido.appendChild(checkbox);
	divContenido.appendChild(etiqueta);
	divContenido.appendChild(icono);

	divTarjeta.appendChild(divContenido);

	divHorizontal.appendChild(divTarjeta);

	mensajes.appendChild(divHorizontal);

	texto.value = "";
	contador++;
}

function tacharTexto() {
	this.nextSibling.classList.toggle("tachado");
}

function eliminarMensaje() {
	var divHorizontal = $naboo.padres(this, 3);
	$naboo.eliminar(divHorizontal);
}