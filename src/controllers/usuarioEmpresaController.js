import {datosToken} from '../helpers/getDatosToken';
import { getConnection , sql } from "../database";
import { DALUsuario } from "../database/querys";
import { token } from 'morgan';
import {serialize} from 'cookie';


export const usuarioEmpresaVista = (req, res) => {

    const {cookies} = req;

    const token = cookies.tkn;

    const data = datosToken(token);

    return res.render ('usuarioEmpresa', {
        usuario: data[0],
        titulo: 'Lista de usuarios',
    });

};

export const getListaUsuarioEmpresa = async (req, res) => {
    
    try {

        const pool = await getConnection();
        
        const result = await pool.request().execute(DALUsuario.getUsuarioEmpresa);

        res.status(200);
        res.json(result.recordset);

    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
};

export const getListaUsuarioPuesto = async (req, res) => {
    
    try {

        const pool = await getConnection();
        
        const result = await pool.request().execute(DALUsuario.getPuestoUsuario);

        res.status(200);
        res.json(result.recordset);

    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
};

export const getListaUsuarioDepartamento = async (req, res) => {
    
    try {

        const pool = await getConnection();
        
        const result = await pool.request().execute(DALUsuario.getUsuarioDepartamento);

        res.status(200);
        res.json(result.recordset);

    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
};

export const getUsuarioEmpresaPorId = async (req, res) => {

    const {id} = req.params;

    try {

        const pool = await getConnection();

        const result = await pool
                                .request()
                                .input("id", sql.Int, id)
                                .execute(DALUsuario.getUsuarioEmpresaPorID);
        
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
