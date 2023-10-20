new DataTable('#tablaExpediente', {
    
    language: {
        url: '/DataTable/es-MX.json'
    },

    ajax: {
        url: '/api/listaExpediente',
        dataSrc: ''
    },

    columns: [
        { data: 'codigoUsuario' },
        { data: 'nombre' },
        { data: 'ESTADO' },
        {"data" : function(data){
        return '<button type="button" class="btn btn-warning" onclick="editar('+data.codigoUsuario+')"><img src="/icon/cargar.png" alt="" width="20vh"></button>'}
    }
    ]
});

async function editar(id){

    var myModal = new bootstrap.Modal(document.getElementById('modalModificar'));
    myModal.show();
    document.getElementById('idUsuario').value = id
    console.log(id);

}


async function cargarArchivo(numeroDocumento) 
{
    var idCampo = null;
    var idSpiner = null

    switch (numeroDocumento) {
        case 1: {
            idCampo = 'DPI';
            idSpiner = 'spinerDPI';
        }
        break;

        case 2: {
            idCampo = 'diploma';
            idSpiner = 'spinerDiploma';
        }
        break;
        case 3: {
            idCampo = 'titulo';
            idSpiner = 'spinerTitulo';
        }
        break;
        case 4: {
            idCampo = 'policiacos';
            idSpiner = 'spinerPoliciacos';
        }
        break;
        case 5: {
            idCampo = 'penales';
            idSpiner = 'spinerPenales';
        }
        break;
    
        default: console.log(error);
            break; 
    }

    document.getElementById(idSpiner).style = 'visibility: visible';
    const inputArchivo = document.getElementById(idCampo);
    const idRegistro  = document.getElementById('idUsuario').value;

    const archivo = inputArchivo.files[0];
    const formData = new FormData();

    formData.append('nombreArchivo', idCampo);
    formData.append("uploaded_file",archivo);

    const url = '/api/subirArchivoUsuario/' + idRegistro;

    await fetch(url, {

        method: 'PUT',
        body: formData,
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));

    document.getElementById(idSpiner).style = 'visibility: hidden';
    
}



