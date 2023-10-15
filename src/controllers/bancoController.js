export const bancoInicioVista = (req, res) => {

    return res.render ('bancoInicio', {
        usuario: 'oscar',
        titulo: 'Pagina Inicio',
    });

};