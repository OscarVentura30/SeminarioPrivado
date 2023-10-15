export const nominaInicioVista = (req, res) => {

    return res.render ('nominaInicio', {
        usuario: 'oscar',
        titulo: 'Pagina Inicio',
    });

};