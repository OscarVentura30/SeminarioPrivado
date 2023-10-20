import { getConnection , sql , querys } from "../database";
import { queries,DALExpediente} from "../database/querys";
import { token } from 'morgan';
import {serialize} from 'cookie';
import {datosToken} from '../helpers/getDatosToken';

const path = require('path');

export const expedienteVista = (req, res) => {

    const {cookies} = req;

    const token = cookies.tkn;

    const data = datosToken(token);

    return res.render ('expediente', {
        usuario: data[0],
        titulo: 'Lista expedientes',
    });

};


export const getListaExpedienteEstatus = async (req, res) => {
    
    try {

        const pool = await getConnection();
        
        const result = await pool.request().execute(DALExpediente.getStatusExpedientes);

        res.json(result.recordset);



    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
};


export const insertArchivoExpediente = async (req, res) => {

    const {id} = req.params;

    const {filename} = req.file;

    const {
        nombreArchivo } = req.body;

    try {
        const pool = await getConnection();
        
        const result = await pool.request().input('idUsuario',sql.Int,id)
                                            .input('nombreArchivo',sql.VarChar,nombreArchivo)
                                            .input('archivoInterno', sql.VarChar, filename)
                                            .execute(DALExpediente.updateArchivoExpedienteUsuario)

        return res.redirect ('/expediente');

    } catch (error) {
        console.log(error);
        res.status(500);
        res.send(error.message);
        
    }
    
}

export const descargarArchivoExpediente = async (req, res) => {

    const {id} = req.params;

    const {nombreArchivo} = req.body;

    const pathDescargas = './public/data/';

    try {
        const pool = await getConnection();
        
        const result = await pool.request().input('idUsuario',sql.Int,id)
                                            .input('nombreArchivo',sql.VarChar,nombreArchivo)
                                            .execute(DALExpediente.getArchivoExpedienteUsuario)

        if (result.rowsAffected == 0) {

            return res.status(404).send('Archivo no encontrado');

        }

        const archivoInterno = result.recordset[0].archivoInterno;

        const archivoPath = path.join(pathDescargas,'uploads',archivoInterno);

        res.download(archivoPath, archivoInterno, (error) => {

            if (error) {

              res.status(404).send('Archivo no encontrado');

            }
        });


    } catch (error) {
        console.log(error);
        res.status(500);
        res.send(error.message);
        
    }

}

export const getEstatusExpedienteUsuario = async (req, res) => {

    const {id} = req.params;
    
    try {

        const pool = await getConnection();
        
        const result = await pool.request().input('condigoUsuario',sql.Int,id)
                                            .execute(DALExpediente.getStatusExpedienteUsuario);

        res.json(result.recordset[0]);

    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
};