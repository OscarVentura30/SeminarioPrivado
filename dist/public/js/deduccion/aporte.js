const id = document.getElementById('idUsuario').value;

new DataTable('#tablaAportes', {
    
    language: {
        url: '/DataTable/es-MX.json'
    },

    ajax: {
        url: '/api/listaAportes/'+id,
        dataSrc: ''
    },

    columns: [
        { data: 'codigoDetalle' },
        { data: 'nombreInstitucion' },
        { data: 'nombre' },
        { data: 'fecha' },
        { data: 'monto' },
    ]
});

getInstitucion()


async function Nuevo(){

    var myModal = new bootstrap.Modal(document.getElementById('modalNuevo'));
    myModal.show();

    document.getElementById('tituloModal').textContent = 'Nuevo Aporte';
}


async function getInstitucion(){
    const url = '/api/listaInstituciones';
    await fetch(url)
    .then((res)=> res.json() )
    .then((datos)=>{

        let select = document.getElementById("institucion");
        for(x of datos) {

            let option = document.createElement("option");
            option.setAttribute("value", x.codigoInstitucion );
            let option1Text = document.createTextNode(x.nombreInstitucion);
            option.appendChild(option1Text);
            select.appendChild(option);

        }

    })
    .catch((error) => { 
        console.log('error al obtener datos, ', error)
    })
}


async function postNuevo(){

    const idUsuario = document.getElementById('usuario').value;
    const idInstitucion = document.getElementById('institucion').value;
    const monto = document.getElementById('monto').value;

    const url =('/api/InsertAporte');

    const data = {
        idUsuario: idUsuario,
        idInstitucion: idInstitucion,
        monto: monto
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
