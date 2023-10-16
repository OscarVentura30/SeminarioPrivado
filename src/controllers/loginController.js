import {validarUsuario} from '../helpers/validarUserName';
import {generarToken} from '../helpers/getToken';
import {datosToken} from '../helpers/getDatosToken';
import { token } from 'morgan';
import {serialize} from 'cookie';


export const paginaInicio = (req, res) => {

    const {cookies} = req;

    if ('tkn' in cookies) {
        
        return res.redirect ('/menu');

    }
    
    return res.render ('login', {
        mensaje: 'Inicia Sesion',
    });

};

export const menuPrincipal = (req, res) => {

    const {cookies} = req;

    const token = cookies.tkn;

    const data = datosToken(token);

    return res.render ('menuPrincipal', {
        usuario: data[0],
        titulo: 'Pagina Inicio',
    });

};

export const loginAutenticar = async (req, res) => {

    const {cookies} = req;

    if ('tkn' in cookies) {

        return res.redirect ('/menu');

    }

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
    
    return res.render ('login', {
        usuario: usuario,
        mensaje: 'Usario Invalido',
    });

};

export const cerrarSesion = (req, res) => {

    res.clearCookie('tkn');

    return res.render('login' ,{
        mensaje: 'Cerrar Sesion ok',
    });
}

const cookies = (tk) => {
    
}