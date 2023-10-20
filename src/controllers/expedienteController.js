import { getConnection , sql , querys } from "../database";
import { queries,DALExpediente} from "../database/querys";
import { token } from 'morgan';
import {serialize} from 'cookie';
import {datosToken} from '../helpers/getDatosToken';

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