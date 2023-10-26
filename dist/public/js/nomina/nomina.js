new DataTable('#tablaSalario', {
    
    language: {
        url: '/DataTable/es-MX.json'
    },

    ajax: {
        url: '/api/listaSalario',
        dataSrc: ''
    },

    columns: [
        { data: 'codigoUsuario' },
        { data: 'nombre' },
        { data: 'SalarioOrdinario' },
        { data: 'SalarioExtraordinario' },
        { data: 'anticipo' },
        { data: 'bono14' },
        { data: 'Aguinaldo' },
        { data: 'IGSS' },
    ]
});

new DataTable('#tablaHoras', {
    
    language: {
        url: '/DataTable/es-MX.json'
    },

    ajax: {
        url: '/api/listaHoras',
        dataSrc: ''
    },

    columns: [
        { data: 'codigoDetalle' },
        { data: 'nombre' },
        { data: 'fechaVenta' },
        { data: 'horas' },
        { data: 'tipoHora' },
        { data: 'costoHora' },
        { data: 'resultado' },
       
    ]
});

new DataTable('#tablaVentas', {
    
    language: {
        url: '/DataTable/es-MX.json'
    },

    ajax: {
        url: '/api/listaVentas',
        dataSrc: ''
    },

    columns: [
        { data: 'codigoDetalle' },
        { data: 'nombre' },
        { data: 'fechaVenta' },
        { data: 'montoVenta' },
        { data: 'porcentaje' },
        { data: 'resultado' },
       
    ]
});
