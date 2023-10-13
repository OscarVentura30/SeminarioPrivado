new DataTable('#example', {
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
        return '<button type="button" class="btn btn-warning" onclick="editar('+data.codigoUsuario+')">Editar</button>'}
    }
    ]
});

function editar(idUsuario){

    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    myModal.show();

    document.getElementById('id').value = idUsuario;

    console.log(idUsuario);

}

async function postAcceso() {

    const id = document.getElementById('id').value;
    const usuario = document.getElementById('userName').value;
    const clave = document.getElementById('pass').value;

    const url =('/InsertAcceso');

    if (id == null || usuario == null || clave == null) {

        document.getElementById('textoError').textContent = 'Error: Datos invalidos';
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