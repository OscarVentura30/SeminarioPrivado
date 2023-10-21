new DataTable('#tablaReferencias', {
    
    language: {
        url: '/DataTable/es-MX.json'
    },

    ajax: {
        url: '/api/listaReferencias',
        dataSrc: ''
    },

    columns: [
        { data: 'codigoUsuario' },
        { data: 'nombre' },
        { data: 'vinculoFamiliar' },
        { data: 'nombreCompleto' },
        { data: 'telefono' },
        { data: 'direccion' },
        {"data" : function(data){
        return '<button type="button" class="btn btn-danger" onclick="eliminar('+data.codigoUsuario+')"><img src="/icon/borrar.png" alt="" width="20vh"></button>'}
    }
    ]
});

getUsuario();

async function Nuevo(){

    var myModal = new bootstrap.Modal(document.getElementById('modalNuevo'));
    myModal.show();

    document.getElementById('tituloModal').textContent = 'Nueva Referencia';
}

async function postNuevo(){

    const idUsuario = document.getElementById('usuario').value;
    const referencia = document.getElementById('referencia').value
    const vinculo = document.getElementById('vinculo').value
    const direccion = document.getElementById('direccion').value
    const telefono = document.getElementById('telefono').value

    const url =('/api/insertReferencia');

    const data = {
        idUsuario: idUsuario,
        referencia: referencia,
        vinculo: vinculo,
        direccion: direccion,
        telefono: telefono
    }
    console.log(data);

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


async function getUsuario(){
    const url = '/listaUsuarios';
    await fetch(url)
    .then((res)=> res.json() )
    .then((datos)=>{

        let select = document.getElementById("usuario");
        for(x of datos) {

            let option = document.createElement("option");
            option.setAttribute("value", x.codigoUsuario );
            let option1Text = document.createTextNode(x.nombre);
            option.appendChild(option1Text);
            select.appendChild(option);

        }

    })
    .catch((error) => { 
        console.log('error al obtener datos, ', error)
    })
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

        fetch('/api/borrarReferencia/'+ id,{
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