new DataTable('#example', {
    
    language: {
        url: '/DataTable/es-MX.json'
    },

    ajax: {
        url: '/listaUsuarios',
        dataSrc: ''
    },

    columns: [
        { data: 'codigoUsuario' },
        { data: 'nombre' },
        { data: 'apellido' },
        { data: 'nit' },
        { data: 'dpi' },
        {"data" : function(data){
        return '<button type="button" class="btn btn-warning" onclick="editar('+data.codigoUsuario+')"><img src="/icon/editar.png" alt="" width="20vh"></button><button type="button" class="btn btn-danger" onclick="eliminar('+data.codigoUsuario+')"><img src="/icon/borrar.png" alt="" width="20vh"></button>'}
    }
    ]
});

async function editar(id){

    var myModal = new bootstrap.Modal(document.getElementById('modalUsuario'));
    myModal.show();

    const getId = ('/api/usuario/' + id);

    await fetch(getId)
        .then((res) => res.json())
        .then((dat) => {
            document.getElementById('idUsuario').value = dat[0].codigoUsuario;
            document.getElementById('imagenPerfil').src = '/data/uploads/' + dat[0].fotoUrl;
            document.getElementById('nombreUsuario').value = dat[0].nombre;
            document.getElementById('NITUsuario').value = dat[0].NIT;
            document.getElementById('apellidoUsuario').value = dat[0].apellido;
            document.getElementById('DPIUsuario').value = dat[0].DPI;
            document.getElementById('telfono1').value = dat[0].telefonoMovil;
            document.getElementById('telfono2').value = dat[0].telefonoFijo;
            document.getElementById('direccionUsuario').value = dat[0].dirrecion;

            if (dat[0].estatus == true) {
                document.getElementById('EstadoUsuario').value = 1;
            }
            else
            {
                document.getElementById('EstadoUsuario').value = 0;
            }
            
        })
        .catch((error) => {
            Swal.fire({
                icon: 'Error',
                title: 'Error de conexio',
                text: 'No hay conexion a la base de datos',
            })
        console.log(error);
        });

}

async function confirmarEditar(){

    const idUsuario = document.getElementById('idUsuario').value;
    const nombreUsuario = document.getElementById('nombreUsuario').value 
    const apellidoUsuario = document.getElementById('apellidoUsuario').value
    const NITUsuario = document.getElementById('NITUsuario').value
    const DPIUsuario = document.getElementById('DPIUsuario').value
    const telfono1 = document.getElementById('telfono1').value
    const telfono2 = document.getElementById('telfono2').value
    const direccionUsuario = document.getElementById('direccionUsuario').value
    const EstadoUsuario = document.getElementById('EstadoUsuario').value

    const url =('/api/updateUsuario/'+ idUsuario);
    const regex = /[A-Za-z\d$@$!%*?&]{1,50}$/;

    if (regex.test(nombreUsuario) == false) {

        document.getElementById('textoError').textContent = 'Error: Dato invalido';
        return;
    }

    const data = {
        nombreUsuario: nombreUsuario,
        apellidoUsuario: apellidoUsuario,
        NITUsuario: NITUsuario,
        DPIUsuario: DPIUsuario,
        telfono1: telfono1,
        telfono2: telfono2,
        direccionUsuario: direccionUsuario,
        EstadoUsuario: EstadoUsuario
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
        title: 'Desea Eliminar el usuario '+ id +'?',
        text: "Esta accion no se puede revertir!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, borrar usuario!'
    })
    .then((result) => {

    if (result.isConfirmed) {

        fetch('/api/borrarUsuario/'+ id,{
        method: 'delete',
        })
        .then((res)=>{

        Swal.fire(
        'Borrado!',
        'Cliente eliminado Exitosamente !!!',
        'success'
        )
        res.json()
        
        })
        .catch(err => {
        Swal.fire({
            icon: 'Error',
            title: 'Oops...',
            text: 'Error al eliminar Cliente !',
        })
        console.log(err)
        
        });
    }
    location.reload();
    })

    
}