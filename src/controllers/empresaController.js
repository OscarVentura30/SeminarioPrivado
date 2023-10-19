import { getConnection , sql , querys } from "../database";
import { queries,DALEmpresa} from "../database/querys";
import { token } from 'morgan';
import {serialize} from 'cookie';
import {datosToken} from '../helpers/getDatosToken';

export const usuarioEmpresaVista = (req, res) => {

    const {cookies} = req;

    const token = cookies.tkn;

    const data = datosToken(token);

    return res.render ('empresa', {
        usuario: data[0],
        titulo: 'Lista Empresas',
    });

};


export const getEmpresas = async (req, res) => {
    
    try {

        const pool = await getConnection();
        
        const result = await pool.request().execute(DALEmpresa.getEmpresas);

        res.json(result.recordset);



    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
};

export const getListaEmpresas = async (req, res) => {
    
    try {

        const pool = await getConnection();
        
        const result = await pool.request().execute(DALEmpresa.getListaEmpresas);

        res.json(result.recordset);



    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
};

export const insertEmpresa = async (req, res) => {

    const {
        nombreEmpresa, 
        direccionEmpresa, 
        telefonoEmpresa,} = req.body;

    try {
        const pool = await getConnection();
        
        const result = await pool.request().input('nombreEmpresa',sql.VarChar,nombreEmpresa)
                                            .input('direccionEmpresa', sql.VarChar, direccionEmpresa)
                                            .input('telefonoEmpresa' , sql.VarChar , telefonoEmpresa)
                                            .execute(DALEmpresa.insertEmpresa)

        return res.redirect ('/empresaVista');

    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
    
}

export const updateEmpresa = async (req, res) => {

    const {id} = req.params;

    const {
        nombreEmpresa, 
        direccionEmpresa, 
        telefonoEmpresa,} = req.body;

    try {
        const pool = await getConnection();
        
        const result = await pool.request() .input('codigoEmpresa',sql.VarChar,id)
                                            .input('nombreEmpresa',sql.VarChar,nombreEmpresa)
                                            .input('direccionEmpresa', sql.VarChar, direccionEmpresa)
                                            .input('telefonoEmpresa' , sql.VarChar , telefonoEmpresa)
                                            .execute(DALEmpresa.updateEmpresa)

        return res.redirect ('/empresaVista');

    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
    
}

export const getEmpresaPorId = async (req, res) => {

    const {id} = req.params;
    
    try {

        const pool = await getConnection();
        
        const result = await pool.request().input('codigoEmpresa',sql.Int,id)
                                            .execute(DALEmpresa.getEmpresaPorId);

        res.json(result.recordset);

    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
};

export const deleteEmpresa = async (req, res) => {

    const {id} = req.params;

    try {

        const pool = await getConnection();

        const result = await pool.request().input("idEmpresa", sql.Int, id)
                                            .execute(DALEmpresa.deletteEmpresaPorId);
        
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


