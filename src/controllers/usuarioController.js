import { getConnection , sql , querys } from "../database";
import { queries, DALUsuario } from "../database/querys";
import { cargarImagen } from "../helpers/cargarArchivo";

export const usuarioVista = (req, res) => {

    return res.render ('usuarioLista', {
        user: 'usuario',
        titulo: 'Lista de usuarios',
    });

};

export const usuarioNuevo = (req, res) => {

    return res.render ('usuarioNuevo', {
        user: 'usuario',
        titulo: 'Lista de usuarios',
    });

};

export const accesoUsuario = (req, res) => {

    return res.render ('usuarioAcceso', {
        usuario: 'Usuario_conectado',
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

export const insertUsuario = async (req, res) => {

    console.log(req.body , req.file);

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

        return res.render ('usuarioLista', {
            user: 'usuario',
            titulo: 'Lista de usuarios',
        });

    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
    
}
