import { getConnection , sql , querys } from "../database";
import { queries, DALdeducciones} from "../database/querys";
import { token } from 'morgan';
import {serialize} from 'cookie';
import {datosToken} from '../helpers/getDatosToken';
import {datosPorUserName} from '../helpers/getIdUserName';


export const aporteInicioVista = async (req, res) => {

    const {cookies} = req;

    const token = cookies.tkn;

    const data = datosToken(token);

    const id = await datosPorUserName(data[0])

    return res.render ('aporteInicio', {
        usuario: data[0],
        codigoUsuario: id
    });

};

export const getAportesId = async (req, res) => {

    const {id} = req.params;

    try {

        const pool = await getConnection();

        const result = await pool
                                .request()
                                .input("id", sql.Int, id)
                                .execute(DALdeducciones.getListaAportesId);
        
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

export const insertAporte = async (req, res) => {

    const {
        idUsuario, 
        idInstitucion,
        monto} = req.body;


    try {
        const pool = await getConnection();
        
        const result = await pool.request().input('codigoUsuario',sql.Int,idUsuario)
                                            .input('codigoInstitucion', sql.Int, idInstitucion)
                                            .input('monto', sql.Int, monto)
                                            .execute(DALdeducciones.insertAporte)

        return res.redirect ('/aporte');

    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
    
}

export const getInstituciones = async (req, res) => {

    try {

        const pool = await getConnection();

        const result = await pool
                                .request()
                                .execute(DALdeducciones.getListaInstitucion);
        
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

