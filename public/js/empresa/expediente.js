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

    const url = '/api/expedienteUsuario/' + id;
    const img = '/icon/correcto.png';

    await fetch(url)
    .then((res) => res.json())
    .then((dat) => {
        if(dat.DPI == 1) {
            document.getElementById('estadoArchivoDPI').src = img;
            document.getElementById('boton1').disabled = false;
        }
        if(dat.diploma == 1) {
            document.getElementById('estadoArchivoDiploma').src = img;
            document.getElementById('boton2').disabled = false;
        }
        if(dat.titulo == 1) {
            document.getElementById('estadoArchivoTitulo').src = img;
            document.getElementById('boton3').disabled = false;
        }
        if(dat.policiacos == 1) {
            document.getElementById('estadoArchivoPoliciacos').src = img;
            document.getElementById('boton4').disabled = false;
        }
        if(dat.penales == 1) {
            document.getElementById('estadoArchivoPenales').src = img;
            document.getElementById('boton5').disabled = false;
        }
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


async function cargarArchivo(numeroDocumento) 
{
    var idCampo = null;
    var idSpiner = null

    switch (numeroDocumento) {
        case 1: {
            idCampo = 'DPI';
            idSpiner = 'spinerDPI';
            idImagen = 'estadoArchivoDPI';
            idBoton = 'boton1';
        }
        break;

        case 2: {
            idCampo = 'diploma';
            idSpiner = 'spinerDiploma';
            idImagen = 'estadoArchivoDiploma';
            idBoton = 'boton2';
        }
        break;
        case 3: {
            idCampo = 'titulo';
            idSpiner = 'spinerTitulo';
            idImagen = 'estadoArchivoTitulo';
            idBoton = 'boton3';
        }
        break;
        case 4: {
            idCampo = 'policiacos';
            idSpiner = 'spinerPoliciacos';
            idImagen = 'estadoArchivoPoliciacos';
            idBoton = 'boton4';
        }
        break;
        case 5: {
            idCampo = 'penales';
            idSpiner = 'spinerPenales';
            idImagen = 'estadoArchivoPenales';
            idBoton = 'boton5';
        }
        break;
    
        default: console.log(error);
            break; 
    }

    document.getElementById(idSpiner).style = 'visibility: visible';
    const inputArchivo = document.getElementById(idCampo);
    const idRegistro  = document.getElementById('idUsuario').value;
    document.getElementById(idImagen).src = '/icon/correcto.png';
    document.getElementById(idBoton).disabled = false;

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

async function descargarArchivo(numeroDocumento) 
{
    var idCampo = null;
    var idSpiner = null;
    var idImagen = null;
    var idBoton = null;

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

    const idRegistro  = document.getElementById('idUsuario').value;

    const url = '/api/descargarArchivoUsuario/' + idRegistro;

    const data = {

        nombreArchivo:idCampo
    }

    await fetch(url, {

        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
        })
        
        .then((res) => res)
        .then((dat) => {

            dat.blob().then((blob) => {
                
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = idRegistro + idCampo; 
                a.style.display = 'none';
                document.body.appendChild(a);
        
                
                a.click();
        
                
                window.URL.revokeObjectURL(url);
              });

        })
        .catch((error) => {

            Swal.fire({
                icon: 'Error',
                title: 'Error',
                text: 'No es posible descargar'  + error,
            })
            
        });    

  document.getElementById(idSpiner).style = 'visibility: hidden';
}

function limpiarModal(){
    const img = '/icon/vacio.png'

        document.getElementById('estadoArchivoDPI').src = img;
        document.getElementById('boton1').disabled = true;
    

        document.getElementById('estadoArchivoDiploma').src = img;
        document.getElementById('boton2').disabled = true;
    

        document.getElementById('estadoArchivoTitulo').src = img;
        document.getElementById('boton3').disabled = true;
    

        document.getElementById('estadoArchivoPoliciacos').src = img;
        document.getElementById('boton4').disabled = true;
    

        document.getElementById('estadoArchivoPenales').src = img;
        document.getElementById('boton5').disabled = true;

        document.getElementById('guardar1').disabled = true;
        document.getElementById('guardar2').disabled = true;
        document.getElementById('guardar3').disabled = true;
        document.getElementById('guardar4').disabled = true;
        document.getElementById('guardar5').disabled = true;

        document.getElementById('DPI').value = '';
        document.getElementById('diploma').value = '';
        document.getElementById('titulo').value = '';
        document.getElementById('policiacos').value = '';
        document.getElementById('penales').value = '';

}

function activarBoton(numero) {

    switch (numero) {
        case 1: {
            document.getElementById('guardar1').disabled = false;
        }
        break;

        case 2: {
            document.getElementById('guardar2').disabled = false;
        }
        break;
        case 3: {
            document.getElementById('guardar3').disabled = false;
        }
        break;
        case 4: {
            document.getElementById('guardar4').disabled = false;
        }
        break;
        case 5: {
            document.getElementById('guardar5').disabled = false;
        }
        break;
    
        default: console.log(error);
            break; 
    }
}
