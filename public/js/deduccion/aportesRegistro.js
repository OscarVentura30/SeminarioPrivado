new DataTable('#tablaAportes', {
    
    language: {
        url: '/DataTable/es-MX.json'
    },

    ajax: {
        url: '/api/listaAportes',
        dataSrc: ''
    },

    columns: [
        { data: 'codigoDetalle' },
        { data: 'nombreInstitucion' },
        { data: 'nombre' },
        { data: 'fecha' },
        { data: 'monto' },
    ]
});
