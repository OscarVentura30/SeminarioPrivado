new DataTable('#tablaEmpresas', {
    
    language: {
        url: '/DataTable/es-MX.json'
    },

    ajax: {
        url: '/api/empresaLista',
        dataSrc: ''
    },

    columns: [
        { data: 'codigoEmpresa' },
        { data: 'nombreEmpresa' },
        { data: 'direccion' },
        { data: 'telefono' },
        {"data" : function(data){
        return '<button type="button" class="btn btn-warning" onclick="editar('+data.codigoEmpresa+')"><img src="/icon/editar.png" alt="" width="20vh"></button><button type="button" class="btn btn-danger" onclick="eliminar('+data.codigoEmpresa+')"><img src="/icon/borrar.png" alt="" width="20vh"></button>'}
    }
    ]
});

async function NuevaEmpresa(){

    var myModal = new bootstrap.Modal(document.getElementById('modalEmpresa'));
    myModal.show();

    document.getElementById('tituloModal').textContent = 'Nueva Empresa';
}

async function editar(id){

    var myModal = new bootstrap.Modal(document.getElementById('modalmodificarEmpresa'));
    myModal.show();

    const getId = ('/api/empresaId/' + id);
    
    await fetch(getId)
        .then((res) => res.json())
        .then((dat) => {
            document.getElementById('idEmpresa').value = dat[0].codigoEmpresa;
            document.getElementById('empresa').value =  dat[0].nombreEmpresa;
            document.getElementById('direccion').value = dat[0].direccion;
            document.getElementById('telefono').value = dat[0].telefono;
                
        })
        .catch((error) => {
            if(error == 400){
            Swal.fire({
                icon: 'Error',
                title: 'Error de conexion',
                text: 'No hay conexion a la base de datos',
            })

        }

        console.log(error)

        });       
}


async function guardarEmpresa(){

    const empresa = document.getElementById('nombreEmpresa').value;
    const direccion = document.getElementById('direccionEmpresa').value 
    const telefono = document.getElementById('telefonoEmpresa').value

    const url =('/api/insertEmpresa');

    const data = {
        nombreEmpresa: empresa,
        direccionEmpresa: direccion,
        telefonoEmpresa: telefono,
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


async function modificarEmpresa(){  

    const idEmpresa = document.getElementById('idEmpresa').value;
    const empresa = document.getElementById('empresa').value;
    const direccion = document.getElementById('direccion').value 
    const telefono = document.getElementById('telefono').value

    const url =('/api/updateEmpresa/' + idEmpresa);

    const data = {
        codigoEmpresa:idEmpresa,
        nombreEmpresa: empresa,
        direccionEmpresa: direccion,
        telefonoEmpresa: telefono,
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

function eliminar(id){

    Swal.fire({
        title: 'Desea Eliminar el Empresa '+ id +'?',
        text: "Esta accion no se puede revertir!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, borrar Empresa!'
    }).then((result) => {
    if (result.isConfirmed) {

        fetch('/api/deleteEmpresa/'+ id,{
        method: 'delete',
        })
        .then((res)=>{

        Swal.fire(
        'Borrado!',
        'Empresa eliminado Exitosamente !!!',
        'success'
        )
        res.json()
        location.reload();
        })
        .catch(err => {
        Swal.fire({
            icon: 'Error',
            title: 'Oops...',
            text: 'Error al eliminar Cliente !',
            footer: '<a href="">Por qué aparece el error?</a>'
        })
        console.log(err)
        
        });
    }
    })

    
}