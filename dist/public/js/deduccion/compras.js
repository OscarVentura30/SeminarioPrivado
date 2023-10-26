new DataTable('#tablaCompras', {
    
    language: {
        url: '/DataTable/es-MX.json'
    },

    ajax: {
        url: '/api/listaCompras',
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
