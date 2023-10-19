new DataTable('#tablaDepartamentos', {
    
    language: {
        url: '/DataTable/es-MX.json'
    },

    ajax: {
        url: '/api/departamentos',
        dataSrc: ''
    },

    columns: [
        { data: 'codigoDepartamento' },
        { data: 'nombreDepartamento' },
        { data: 'Descripcion' },
        {"data" : function(data){
        return '<button type="button" class="btn btn-warning" onclick="editar('+data.codigoDepartamento+')"><img src="/icon/editar.png" alt="" width="20vh"></button><button type="button" class="btn btn-danger" onclick="eliminar('+data.codigoDepartamento+')"><img src="/icon/borrar.png" alt="" width="20vh"></button>'}
    }
    ]
});

async function Nuevo(){

    var myModal = new bootstrap.Modal(document.getElementById('modalDepartamento'));
    myModal.show();

    document.getElementById('tituloModal').textContent = 'Nuevo Departamento';
}

async function guardarNuevo(){

    const departamento = document.getElementById('nombreDepartamento').value;
    const descripcion  = document.getElementById('descripcionArea').value 

    const url =('/api/insertDepartamento');

    const data = {
        departamento: departamento,
        descripcion: descripcion,
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

async function editar(id){

    var myModal = new bootstrap.Modal(document.getElementById('modalModificar'));
    myModal.show();

    const getId = ('/api/departamentoId/' + id);
    
    await fetch(getId)
        .then((res) => res.json())
        .then((dat) => {
            document.getElementById('idModificar').value = dat[0].codigoDepartamento;
            document.getElementById('Departamento').value =  dat[0].nombreDepartamento;
            document.getElementById('area').value = dat[0].Descripcion;
                
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

async function guardarEditar(){  

    const id = document.getElementById('idModificar').value
    const departamento = document.getElementById('Departamento').value
    const descripcion = document.getElementById('area').value

    const url =('/api/updateDepartamento/' + id);

    const data = {
        departamento:departamento,
        descripcion: descripcion,
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
        title: 'Desea Eliminar el registro '+ id +'?',
        text: "Esta accion no se puede revertir!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, borrar!'
    }).then((result) => {
    if (result.isConfirmed) {

        fetch('/api/deleteDepartamento/'+ id,{
        method: 'delete',
        })
        .then((res)=>{

        Swal.fire(
        'Borrado!',
        'eliminado Exitosamente !!!',
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
