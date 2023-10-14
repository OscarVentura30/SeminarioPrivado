export const gestionInicioVista = (req, res) => {

    return res.render ('gestionInicio', {
        user: 'oscar',
        titulo: 'Pagina Inicio',
    });

};