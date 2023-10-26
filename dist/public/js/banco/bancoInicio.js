const id = document.getElementById('idUsuario').value ;

new DataTable('#tablaCredito', {
    
    language: {
        url: '/DataTable/es-MX.json'
    },

    ajax: {
        url: '/api/getEstadoPrestamo/' + id,
        dataSrc: ''
    },

    columns: [
        { data: 'codigoPrestamo' },
        { data: 'nombreBanco' },
        { data: 'nombre' },
        { data: 'fechaSolicitud' },
        { data: 'plazo' },
        { data: 'saldo' },
        { data: 'estado' },
       
    ]
});


new DataTable('#tablaCuotas', {
    
    language: {
        url: '/DataTable/es-MX.json'
    },

    ajax: {
        url: '/api/getCuotasUsuario/' + id,
        dataSrc: ''
    },

    columns: [
        { data: 'codigoCuota' },
        { data: 'fechaPago' },
        { data: 'Monto' },
        { data: 'estado' },
       
    ]
});

async function Nuevo(){

    var myModal = new bootstrap.Modal(document.getElementById('modalNuevo'));
    myModal.show();

    document.getElementById('tituloModal').textContent = 'Nueva Solicitud de Credito';
}


async function postNuevo(){

    const codigoUsuario = document.getElementById('idUsuario').value;
    const codigoBanco = document.getElementById('banco').value;
    const plazo = document.getElementById('plazo').value;
    const monto = document.getElementById('monto').value;

    const url =('/api/insertCreditoUsuario');

    const data = {
        codigoUsuario: codigoUsuario,
        codigoBanco: codigoBanco,
        plazo: plazo,
        monto: monto
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

