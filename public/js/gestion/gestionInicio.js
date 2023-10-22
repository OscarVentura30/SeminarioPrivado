const id = document.getElementById('idUsuario').value ;

new DataTable('#tablaAusencias', {
    
    language: {
        url: '/DataTable/es-MX.json'
    },

    ajax: {
        url: '/api/listaAusenciasId/' + id,
        dataSrc: ''
    },

    columns: [
        { data: 'codigoDetalle' },
        { data: 'usuarioSolicita' },
        { data: 'fechaSolicitud' },
        { data: 'diasAusencia' },
        { data: 'resultado' },
        { data: 'estado' }
    ]
});
/*
/api/insertAusencia
*/
async function Nuevo(){

    var myModal = new bootstrap.Modal(document.getElementById('modalNuevo'));
    myModal.show();

    document.getElementById('tituloModal').textContent = 'Nueva Solicitud de Ausencias';
}

async function postNuevo(){

    const idUsuario = document.getElementById('idUsuario').value;
    const dias = document.getElementById('dias').value;

    const url =('/api/insertAusencia');

    const data = {
        codigoUsuario: idUsuario,
        numeroDias: dias,
    }


    await fetch(url, {

        method: 'POST',
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
