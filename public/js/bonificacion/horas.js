new DataTable('#tablaHoras', {
    
    language: {
        url: '/DataTable/es-MX.json'
    },

    ajax: {
        url: '/api/listaHoras',
        dataSrc: ''
    },

    columns: [
        { data: 'codigoDetalle' },
        { data: 'nombre' },
        { data: 'fechaVenta' },
        { data: 'horas' },
        { data: 'tipoHora' },
        { data: 'costoHora' },
        { data: 'resultado' },
       
    ]
});


getUsuario();

async function Nuevo(){

    var myModal = new bootstrap.Modal(document.getElementById('modalNuevo'));
    myModal.show();

    document.getElementById('tituloModal').textContent = 'Nuevo registro Horas Extras';
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

async function postNuevo(){

    const idUsuario = document.getElementById('usuario').value;
    const horas = document.getElementById('horas').value;
    const tipoHora = document.getElementById('tipoHora').value;

    const url =('/api/insertHora');

    const data = {
        idUsuario: idUsuario,
        horas: horas,
        tipoHora: tipoHora
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