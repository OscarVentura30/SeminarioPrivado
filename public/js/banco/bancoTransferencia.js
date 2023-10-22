new DataTable('#tablaTransferencias', {
    
    language: {
        url: '/DataTable/es-MX.json'
    },

    ajax: {
        url: '/api/getTransferenciaBancos',
        dataSrc: ''
    },

    columns: [
        { data: 'codigoTransferencia' },
        { data: 'fecha' },
        { data: 'estado' },
        { data: 'monto' },
        { data: 'nombre' },
        { data: 'nombreBanco' }
       
    ]
});