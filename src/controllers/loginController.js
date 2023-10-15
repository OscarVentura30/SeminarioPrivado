import {validarUsuario} from '../helpers/validarUserName';
import {generarToken} from '../helpers/getToken';
import { token } from 'morgan';
import {serialize} from 'cookie';


export const paginaInicio = (req, res) => {

    return res.render ('login', {
        usuario: 'oscar',
        titulo: 'Pagina Inicio',
    });

};

export const menuPrincipal = (req, res) => {

    return res.render ('menuPrincipal', {
        usuario: 'oscar',
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

    if (UsuarioValido == '200') {

        const tokenListo = await generarToken(usuario,codigoEmpresa);

        res.cookie('tkn', tokenListo);

        res.redirect ('/menu');
    }

    res.redirect ('/');

};
