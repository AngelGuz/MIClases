$(document).ready(function () {
	$("#btn_delete").click(function () {
		deleteFunction()
	})

	readFuntion();

	$("#btn_save").click(function () {

		let name = $("#txt_name").val()
		let lastName = $("#txt_last_name").val()
		let phone = $("#txt_phone").val()

		var persona = new Persona(name, lastName, phone)

		saveFunction(persona)
	})

	$("#txt_name").focus()

})

// VERSION DE JAVASCRIPT
// Clase ----- // Contructor
var Producto = function (string01, string02, obj) {

	this.string01 = "string01"
	this.string02 = "string02"
	this.obj = {
		childObj01: "",
		childObj02: " ",
		childObj03: "string",
		childObj04: 1,
	}
}


Producto.prototype = {
	agregar: function (name) {
		/*FUNCTION 01*/
	},
	eliminar: function (element) {
		/*FUNCTION 02*/
	}
}
///////////////////////////////////////



//// VERSION JSON

var prodJSON = {
	String01: string01,
	String02: string02,
	obj: {
		
	},
	guardar: function () {
		/*Funcion 01*/
	},
	eliminar: function () {
		/*Funcion 02*/
	}
}

/////////////////

function saveFunction(persona) {

	var oldItems = JSON.parse(localStorage.getItem('personas')) || [];

	var newItem = {
		'name': persona.name,
		'lastName': persona.lastName,
		'phone': persona.phone
	};

	oldItems.push(newItem);

	localStorage.setItem('personas', JSON.stringify(oldItems));


	console.log(localStorage)
	var ul = $("#peopleList");
	ul.append(
		`
		<li onclick="_showDetail(this)">
			<span class=""> ${persona.name}</span>	
			<span class="not-showing"> ${persona.lastName}</span>	
			<span class="not-showing">${persona.phone}</span>	
		</li>
	`
	)

}

function readFuntion() {
	debugger
	var persona = new Persona(
		localStorage.getItem("name"),
		localStorage.getItem("lastName"),
		localStorage.getItem("phone")
	)

	var ul = $("#peopleList");


	if (localStorage.personas) {
		var elements = JSON.parse(localStorage.personas)
		for (var i = 0; i < elements.length; i++) {
			ul.append(
				`
					<li onclick="_showDetail(this)">
						<span class=""> ${elements[i].name}</span>	
						<span class="not-showing"> ${elements[i].lastName}</span>	
						<span class="not-showing">${elements[i].phone}</span>	
					</li>
				`
			)
		}
	}
}

function deleteFunction() {
	localStorage.clear()
	var ul = $("#peopleList *");
	ul.remove()
}

function _showDetail(element) {
	$(element.children).toggleClass("not-showing")
}
