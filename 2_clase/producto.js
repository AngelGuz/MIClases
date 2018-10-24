//Clase  ----- Constructor
var Producto = function (pNombre) {
    this.nombre = pNombre;
}

Producto.prototype = {
    agregar: function (nombre) {
        $("ol").append(`
                        <li> 
                            ${nombre}<input type='button' value='Eliminar' class='removes'></input>
                        </li>
                        `);

    },
    modificar: function () {

    },
    eliminar: function (element) {
        element.parentElement.remove();
    }
}