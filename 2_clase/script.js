$(document).ready(function () {

    $('#btnGuardar').click(function () {
        var nombre = $('#txtNombre').val();

        let miProductoClase = new Producto(nombre);
        miProductoClase.agregar(nombre);

    });

    $('ol').on('click', '.removes', function () {
        let miProductoClase = new Producto();
        miProductoClase.eliminar(this);
    });
});