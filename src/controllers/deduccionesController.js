export const deduccionesInicioVista = (req, res) => {

    return res.render ('deduccionInicio', {
        user: 'oscar',
        titulo: 'Pagina Inicio',
    });

};