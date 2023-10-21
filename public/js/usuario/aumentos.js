new DataTable('#tablaAumentos', {
    
    language: {
        url: '/DataTable/es-MX.json'
    },

    ajax: {
        url: '/api/historialAumentos',
        dataSrc: ''
    },

    columns: [
        { data: 'codigoUsuario' },
        { data: 'nombre' },
        { data: 'SalarioActual' },
        { data: 'BonificacionActual' },
        { data: 'SalarioNuevo' },
        { data: 'BonificacionNuevo' },
        { data: 'fecha' }
    ]
});