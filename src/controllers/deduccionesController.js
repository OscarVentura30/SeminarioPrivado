export const deduccionesInicioVista = (req, res) => {

    return res.render ('deduccionInicio', {
        usuario: 'oscar',
        titulo: 'Pagina Inicio',
    });

};