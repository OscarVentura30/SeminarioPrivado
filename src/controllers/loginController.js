import {validarUsuario} from '../helpers/validarUserName';

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

export const loginAutenticar = async (req, res) => {

    const {usuario, 
            clave, 
            codigoEmpresa} = req.body

    if (usuario == null || clave == null || codigoEmpresa == null) {

        res.status(400);
        res.send('Error 400')

    }

    const UsuarioValido = await validarUsuario(usuario,clave,codigoEmpresa);

    console.log(UsuarioValido);

    res.send(UsuarioValido);

    /*return res.render ('menuPrincipal', {
        user: 'oscar',
        titulo: 'Pagina Inicio',
    });*/

};
