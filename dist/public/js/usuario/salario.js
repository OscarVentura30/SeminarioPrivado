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
        { data: 'EstadoAcceso' },
        {"data" : function(data){
        return '<button type="button" class="btn btn-warning" onclick="editar('+data.codigoUsuario+')"><img src="/icon/llave.png" alt="" width="20vh"></button>'}
    }
    ]
});

async function editar(id){

    var myModal = new bootstrap.Modal(document.getElementById('modalSalario'));
    myModal.show();
    document.getElementById('idUsuario').value = id;
}


async function guardar(){

    const url = ('/api/insertSalario');

    const idUsuario = document.getElementById('idUsuario').value ;
    const SalarioBase = document.getElementById('salarioBase').value ;
    const SalarioExtra = document.getElementById('SalarioExtra').value ;

    const data = {
        idUsuario: idUsuario,
        SalarioBase: SalarioBase,
        SalarioExtra: SalarioExtra
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
