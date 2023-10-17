import { getConnection , sql , querys } from "../database";
import { DALUsuario } from "../database/querys";
import { encryptPass,encryptText,desencryptText } from "../helpers/encrypt";
import {datosToken} from '../helpers/getDatosToken';
import { token } from 'morgan';
import {serialize} from 'cookie';



export const usuarioVista = (req, res) => {

    const {cookies} = req;

    const token = cookies.tkn;

    const data = datosToken(token);

    return res.render ('usuarioLista', {
        usuario: data[0],
        titulo: 'Lista de usuarios',
    });

};

export const usuarioNuevo = (req, res) => {

    const {cookies} = req;

    const token = cookies.tkn;

    const data = datosToken(token);

    return res.render ('usuarioNuevo', {
        usuario: data[0],
        titulo: 'Lista de usuarios',
    });

};

export const accesoUsuario = (req, res) => {

    const {cookies} = req;

    const token = cookies.tkn;

    const data = datosToken(token);

    return res.render ('usuarioAcceso', {
        usuario: data[0],
        titulo: 'ACCESOS AL SISTEMA',
        descripcion: 'seleccione el usuario para configurar Acceso', 
        codigoGestion: 'acceso'
    });

};




export const getListaUsuarios = async (req, res) => {
    
    try {

        const pool = await getConnection();
        
        const result = await pool.request().execute(DALUsuario.getListaUsuarios);

        res.json(result.recordset);

    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
};

export const getListaUsuariosAccesos = async (req, res) => {
    
    try {

        const pool = await getConnection();
        
        const result = await pool.request().execute(DALUsuario.getListaUsuariosAccesos);

        res.status(200);
        res.json(result.recordset);

    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
};

export const insertUsuario = async (req, res) => {

    const {filename} = req.file;

    const {
        nombreUsuario, 
        apellidoUsuario, 
        NITUsuario,
        DPIUsuario,
        telfono1,
        telfono2, 
        direccionUsuario, 
        EstadoUsuario} = req.body;

    try {
        const pool = await getConnection();
        
        const result = await pool.request().input('nombreUsuario',sql.VarChar,nombreUsuario)
                                            .input('apellidoUsuario', sql.VarChar, apellidoUsuario)
                                            .input('NITUsuario' , sql.VarChar , NITUsuario)
                                            .input('DPIUsuario', sql.VarChar, DPIUsuario)
                                            .input('telfono1', sql.VarChar, telfono1)
                                            .input('telfono2', sql.VarChar, telfono2)
                                            .input('direccionUsuario', sql.VarChar , direccionUsuario)
                                            .input('fotoUsuario', sql.VarChar, filename)
                                            .input('EstadoUsuario', sql.Bit, EstadoUsuario)
                                            .execute(DALUsuario.insertUsuario)

        return res.redirect ('/usuarios');

    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
    
}

export const InsertuserName = async (req, res) => {

    const {
        id, 
        userName, 
        pass} = req.body;

    if (id == null || userName == null || pass == null) {

        res.status(400);
        res.send('Error 400')
        
    }
    const _usarName = await encryptText(userName);
    const _pass = await encryptPass(pass);
    
    try {
        const pool = await getConnection();
        
        const result = await pool.request().input('id',sql.Int ,id)
                                            .input('userName', sql.VarChar, _usarName)
                                            .input('password' , sql.VarChar , _pass)
                                            .execute(DALUsuario.insertAcces)
        return res.redirect ('/usuarios');

    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
    
}

export const getUsuarioPorId = async (req, res) => {

    const {id} = req.params;

    try {

        const pool = await getConnection();

        const result = await pool
                                .request()
                                .input("id", sql.Int, id)
                                .execute(DALUsuario.getUsuarioPorID);
        
        if (result.rowsAffected == 0)
        {
            return res.status(400).json({ msg: 'Error: No se encuentra recurso'});
        }

        res.json(result.recordset);

    } catch (error) {
        
        res.status(500);
        res.send(error.message);
    }

}

export const updateUsuarioPorID = async (req, res) => {

    const {id} = req.params; 

    const {
        nombreUsuario, 
        apellidoUsuario, 
        NITUsuario,
        DPIUsuario,
        telfono1,
        telfono2, 
        direccionUsuario, 
        EstadoUsuario} = req.body;

    try {
        const pool = await getConnection();
        
        const result = await pool.request().input('id',sql.Int,id)
                                            .input('nombreUsuario',sql.VarChar,nombreUsuario)
                                            .input('apellidoUsuario', sql.VarChar, apellidoUsuario)
                                            .input('NITUsuario' , sql.VarChar , NITUsuario)
                                            .input('DPIUsuario', sql.VarChar, DPIUsuario)
                                            .input('telfono1', sql.VarChar, telfono1)
                                            .input('telfono2', sql.VarChar, telfono2)
                                            .input('direccionUsuario', sql.VarChar , direccionUsuario)
                                            .input('EstadoUsuario', sql.Bit, EstadoUsuario)
                                            .execute(DALUsuario.updateUsuarioId)

        return res.redirect ('/usuarios');

    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
    
}

export const borrarUsuario = async (req, res) => {

    const {id} = req.params;

    try {

        const pool = await getConnection();

        const result = await pool.request().input("id", sql.Int, id)
                                            .execute(DALUsuario.borrarUsuario);
        
        if (result.rowsAffected == 0)
        {
            return res.status(400).json({ msg: 'Error: Error al eliminar'});
        }

        res.status(200).json({ msg: 'Ok: Eliminar ok'})
        
    } catch (error) {

        res.status(500);
        res.send(error.message); 
        
    }
}

export const getUserNameId = async (req, res) => {

    const {id} = req.params;

    try {

        const pool = await getConnection();

        const result = await pool
                                .request()
                                .input("id", sql.Int, id)
                                .execute(DALUsuario.getUserName);
        
        if (result.rowsAffected == 0)
        {
            return res.status(400).json({ msg: 'Error: 404 no encontrado'});
        }

        const _usarName = await desencryptText(result.recordset[0].username)

        res.json({usuario:_usarName});

    } catch (error) {
        
        res.status(500);
        res.send(error.message);
    }

}