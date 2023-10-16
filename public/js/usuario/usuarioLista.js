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
        return '<button type="button" class="btn btn-warning" onclick="editar('+data.codigoUsuario+')">Editar</button>'}
    }
    ]
});

async function editar(id){

console.log(id);

}