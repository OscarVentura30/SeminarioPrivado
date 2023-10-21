new DataTable('#tablaLiquidacion', {
    
    language: {
        url: '/DataTable/es-MX.json'
    },

    ajax: {
        url: '/api/listaLiquidacion',
        dataSrc: ''
    },

    columns: [
        { data: 'codigoUsuario' },
        { data: 'nombre' },
        { data: 'SalarioOrdinario' },
        { data: 'fechaInicio' },
        { data: 'DIAS' },
        { data: 'MontoLiquidar' },
    ]
});