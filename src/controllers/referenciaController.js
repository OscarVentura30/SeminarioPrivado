import { getConnection , sql , querys } from "../database";
import { queries, DALReferencias} from "../database/querys";
import { token } from 'morgan';
import {serialize} from 'cookie';
import {datosToken} from '../helpers/getDatosToken';

export const referenciaVista = (req, res) => {

    const {cookies} = req;

    const token = cookies.tkn;

    const data = datosToken(token);

    return res.render ('referencias', {
        usuario: data[0],
        titulo: 'Lista referencias',
    });

};


export const getListaReferencias = async (req, res) => {
    
    try {

        const pool = await getConnection();
        
        const result = await pool.request().execute(DALReferencias.getListaReferencias);

        res.json(result.recordset);


    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
};

export const insertReferencia = async (req, res) => {

    const {
        idUsuario, 
        referencia, 
        vinculo,
        direccion,
        telefono} = req.body;

    try {
        const pool = await getConnection();
        
        const result = await pool.request().input('idUsuario',sql.Int,idUsuario)
                                            .input('nombreReferencia', sql.VarChar, referencia)
                                            .input('telefono' , sql.VarChar , telefono)
                                            .input('dereccion' , sql.VarChar , direccion)
                                            .input('vinculo' , sql.VarChar , vinculo)
                                            .execute(DALReferencias.insertReferencia)

        res.send('Ok')

    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
    
}

export const deleteReferencia = async (req, res) => {

    const {id} = req.params;

    try {

        const pool = await getConnection();

        const result = await pool.request().input("idUsuario", sql.Int, id)
                                            .execute(DALReferencias.deleteReferencia);
        
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
