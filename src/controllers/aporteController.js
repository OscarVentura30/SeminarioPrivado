export const aporteInicioVista = (req, res) => {

    return res.render ('aporteInicio', {
        usuario: 'oscar',
        titulo: 'Pagina Inicio',
    });

};