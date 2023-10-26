const id = document.getElementById('idUsuario').value;

new DataTable('#tablaComprasUsuario', {
    
    language: {
        url: '/DataTable/es-MX.json'
    },

    ajax: {
        url: '/api/ListaCompras/' + id,
        dataSrc: ''
    },

    columns: [
        { data: 'codigoDetalle' },
        { data: 'nombreProducto' },
        { data: 'nombre' },
        { data: 'fechaCompra' },
        { data: 'Monto' }
    ]
});
