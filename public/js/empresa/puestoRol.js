new DataTable('#tablaPuesto', {
    
    language: {
        url: '/DataTable/es-MX.json'
    },

    ajax: {
        url: '/api/listaPuestoRol',
        dataSrc: ''
    },

    columns: [
        { data: 'nombrePuesto' },
        { data: 'descripcion' },
    ]
});