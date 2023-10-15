export const gestionInicioVista = (req, res) => {

    return res.render ('gestionInicio', {
        usuario: 'oscar',
        titulo: 'Pagina Inicio',
    });

};