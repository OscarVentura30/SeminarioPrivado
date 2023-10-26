new DataTable('#tablaCompras', {
    
    language: {
        url: '/DataTable/es-MX.json'
    },

    ajax: {
        url: '/api/Listaproductos',
        dataSrc: ''
    },

    columns: [
        { data: 'codigoProducto' },
        { data: 'nombreProducto' },
        { data: 'precio' },
        { data: 'descripcion' },
        {"data" : function(data){
            return '<button type="button" class="btn btn-warning" onclick="comprar('+data.codigoProducto+')"><img src="/icon/carrito.png" alt="" width="20vh"></button>'}
        }
    ]
});

async function comprar(id){

    const idUsuario = document.getElementById('idUsuario').value;

    const data = {

        idUsuario:idUsuario,
        codigoProducto: id
    }

    console.log(data);

    const url =('/api/insertVenta');

    Swal.fire({
        title: 'Desea Comprar producto No'+ id +'?',
        text: "se descuenta en planilla!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, Comprar!'
    }).then((result) => {
    if (result.isConfirmed) {

        fetch(url, {

            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
            })
            
            .then((res) => res)
            .then((dat) => {
                console.log('exito : ', dat);
    
                Swal.fire(
    
                    'Correcto !',
                    'Transaccion correcta',
                    'success'
                )
    
            })
            .catch((error) => {
    
                Swal.fire({
                    icon: 'Error',
                    title: 'Error',
                    text: 'No es comprar'  + error,
                })
                
            });    
    }
    })
}
