new DataTable('#tablaUsuarioEmpresa', {
    
    language: {
        url: '/DataTable/es-MX.json'
    },

    ajax: {
        url: '/api/listaUsurioEmpresa',
        dataSrc: ''
    },

    columns: [
        { data: 'codigoUsuario' },
        { data: 'Nombres' },
        { data: 'Empresa' },
        { data: 'Puesto' },
        { data: 'Departamento' },
        { data: 'ESTATUS' },
        {"data" : function(data){
        return '<button type="button" class="btn btn-warning" onclick="editar('+data.codigoUsuario+')"><img src="/icon/llave.png" alt="" width="20vh"></button>'}
    }
    ]
});

getEmpresa();
getPuesto();
getDepar();

async function editar(idRegistro){

    var myModal = new bootstrap.Modal(document.getElementById('modalUsurioEmpresa'));
    myModal.show();
    
    document.getElementById('idUsuarioEmpresa').value = idRegistro;

    const getId = ('/api/usuarioEmpresa/' + idRegistro);
    
    await fetch(getId)
        .then((res) => res.json())
        .then((dat) => {

            const fechaInicio = dat[0].fechaInicio;
            const partesFecha = fechaInicio.split('/');
            const fechaFormateada = partesFecha[2] + '-' + partesFecha[1] + '-' + partesFecha[0];
            console.log(fechaFormateada)

        document.getElementById('empresaUsuario').value = dat[0].empresa;
        document.getElementById('puestoUsuario').value =  dat[0].puesto;
        document.getElementById('DepUsuario').value = dat[0].Departamento;
        document.getElementById('fechaInicio').value = fechaFormateada;
                
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

async function confirmarUsuarioEmpresa() {

    const empresa = document.getElementById('empresaUsuario').value

    const puesto = document.getElementById('puestoUsuario').value
    const area = document.getElementById('DepUsuario').value
    const fecha = document.getElementById('fechaInicio').value 
    const usuario = document.getElementById('idUsuarioEmpresa').value

    const url =('/api/usuarioEmpresa');

    const fechaFormatoApi = fechaAPI(fecha);

    const data = {
        codigoEmpresa: empresa,
        codigoUsuario: usuario,
        codigoDepartamento:area,
        codigoPuesto:puesto,
        fechaInicio:fechaFormatoApi
    }
    console.log(fecha);
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


function limpiarModal() {
    document.getElementById('empresaUsuario').value = '';
    document.getElementById('puestoUsuario').value = '';
    document.getElementById('DepUsuario').value = '';
    document.getElementById('fechaInicio').value = '';
  }
  

// LLENAR DATOS  

async function getEmpresa(){
    const url = '/empresa';
    await fetch(url)
    .then((res)=> res.json() )
    .then((datos)=>{

        let select = document.getElementById("empresaUsuario");
        for(x of datos) {

            let option = document.createElement("option");
            option.setAttribute("value", x.codigoEmpresa );
            let option1Text = document.createTextNode(x.nombreEmpresa);
            option.appendChild(option1Text);
            select.appendChild(option);

        }

    })
    .catch((error) => { 
        console.log('error al obtener datos, ', error)
    })
}

async function getPuesto(){
    const url = '/api/listaUsurioPuesto';
    await fetch(url)
    .then((res)=> res.json() )
    .then((datos)=>{

        let select = document.getElementById("puestoUsuario");
        for(x of datos) {

            let option = document.createElement("option");
            option.setAttribute("value", x.Codigo );
            let option1Text = document.createTextNode(x.Puesto);
            option.appendChild(option1Text);
            select.appendChild(option);

        }

    })
    .catch((error) => { 
        console.log('error al obtener datos, ', error)
    })
}

async function getPuesto(){
    const url = '/api/listaUsurioPuesto';
    await fetch(url)
    .then((res)=> res.json() )
    .then((datos)=>{

        let select = document.getElementById("puestoUsuario");
        for(x of datos) {

            let option = document.createElement("option");
            option.setAttribute("value", x.Codigo );
            let option1Text = document.createTextNode(x.Puesto);
            option.appendChild(option1Text);
            select.appendChild(option);

        }

    })
    .catch((error) => { 
        console.log('error al obtener datos, ', error)
    })
}

async function getDepar(){
    const url = '/api/listaUsurioDepartemanto';
    await fetch(url)
    .then((res)=> res.json() )
    .then((datos)=>{

        let select = document.getElementById("DepUsuario");
        for(x of datos) {

            let option = document.createElement("option");
            option.setAttribute("value", x.codigo );
            let option1Text = document.createTextNode(x.departamento);
            option.appendChild(option1Text);
            select.appendChild(option);

        }

    })
    .catch((error) => { 
        console.log('error al obtener datos, ', error)
    })
}

function fechaAPI(fecha) {

    const _fecha = fecha.split('-');

    if (_fecha.length === 3) {
        const año = _fecha[0];
        const mes = _fecha[1];
        const dia = _fecha[2];
      
        const fechaFormateada = `${dia}/${mes}/${año}`;

        return(fechaFormateada);
      } else {
        return("ERROR");
      }
}