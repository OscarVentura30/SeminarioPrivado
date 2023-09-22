export const tiendaInicio = (req, res) => {

    return res.render ('tienda', {
        user: 'oscar',
        titulo: 'Tienda Colaboradores',
    });

};
