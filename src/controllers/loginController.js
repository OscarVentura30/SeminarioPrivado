export const paginaInicio = (req, res) => {

    return res.render ('login', {
        user: 'oscar',
        titulo: 'Pagina Inicio',
    });

};

export const menuPrincipal = (req, res) => {

    return res.render ('menuPrincipal', {
        user: 'oscar',
        titulo: 'Pagina Inicio',
    });

};