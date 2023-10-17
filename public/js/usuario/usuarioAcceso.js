new DataTable('#example', {

    language: {
        url: '/DataTable/es-MX.json'
    },
    
    ajax: {
        url: '/listaUsuariosAccesos',
        dataSrc: ''
    },
    columns: [
        { data: 'codigoUsuario' },
        { data: 'DPI' },
        { data: 'nombre' },
        { data: 'apellido' },
        { data: 'EstadoAcceso' },

        {"data" : function(data){
        return '<button type="button" class="btn btn-warning" onclick="editar('+data.codigoUsuario+')"><img src="/icon/llave.png" alt="" width="20vh"></button>'}
    }
    ]
});

async function editar(idUsuario){

    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    myModal.show();

    document.getElementById('id').value = idUsuario;
    const getId = ('/api/username/' + idUsuario);

    await fetch(getId)
        .then((res) => res.json())
        .then((dat) => {
            console.log(dat);

            if (dat.usuario != null) {
                document.getElementById('userName').value =  dat.usuario;
            }
            else
            {
                document.getElementById('userName').value =  ''
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

async function postAcceso() {

    const id = document.getElementById('id').value;
    const usuario = document.getElementById('userName').value;
    const clave = document.getElementById('pass').value;
    const clave2 = document.getElementById('pass2').value;

    const url =('/InsertAcceso');

    if (id == null || usuario == null || clave == null) {

        document.getElementById('textoError').textContent = 'Error: Datos invalidos';
        return;

    }

    if (clave != clave2) {
        document.getElementById('textoError').textContent = 'Error: Claves no coinciden';
        return;
    }

    const data = {
        id: id,
        userName: usuario,
        pass:clave
    }

    
    await fetch(url, {

        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),

        })
        .then((res) => res.json())
        .then((dat) => {

            console.log('exito : ', dat);

        })
        .catch((error) => {

            console.log(error);

        });    
    
}

function validarClave() {
    const clave = document.getElementById('pass').value;
    const clave2 = document.getElementById('pass2').value;

    if (clave == clave2)
    {
        document.getElementById('botonGuardar').disabled = false
    
    }
    else
    {
        document.getElementById('botonGuardar').disabled = true
    }
    
}

function limpiarModal() {
    document.getElementById('userName').value = '';
    document.getElementById('pass').value = '';
    document.getElementById('pass2').value = '';
    console.log('limpiar');

}