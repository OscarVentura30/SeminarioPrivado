new DataTable('#tablaAusencias', {
    
    language: {
        url: '/DataTable/es-MX.json'
    },

    ajax: {
        url: '/api/listaAusencias',
        dataSrc: ''
    },

    columns: [
        { data: 'codigoDetalle' },
        { data: 'usuarioSolicita' },
        { data: 'fechaSolicitud' },
        { data: 'diasAusencia' },
        { data: 'resultado' },
        { data: 'aprobado' },
        { data: 'codigoUsuarioAprueba' },

        {"data" : function(data){
            return '<button type="button" class="btn btn-warning" onclick="editar('+data.codigoDetalle+')">Aprobar</button>'}
        }
    ]
});

async function editar(id){

    const idUsuarioAprueba = document.getElementById('idUsuario').value


    const url =('/api/autorizarAusencia/' + id);

    const data = {
        idUsuarioAprueba:idUsuarioAprueba,
    }
    
    await fetch(url, {

        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
        })
        
        .then((res) => res)
        .then((dat) => {
            console.log('exito : ', dat);

            Swal.fire(

                'Correcto !',
                'Datos Guardados',
                'success'
            )
            location.reload();

        })
        .catch((error) => {

            Swal.fire({
                icon: 'Error',
                title: 'Error',
                text: 'No es posible guardar'  + error,
            })
            
        });    
}

