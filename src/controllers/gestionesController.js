import { getConnection , sql , querys } from "../database";
import { queries, DALtienda, DALdeducciones} from "../database/querys";
import { token } from 'morgan';
import {serialize} from 'cookie';
import {datosToken} from '../helpers/getDatosToken';
import {datosPorUserName} from '../helpers/getIdUserName';

export const gestionInicioVista = async (req, res) => {

    const {cookies} = req;

    const token = cookies.tkn;

    const data = datosToken(token);

    const id = await datosPorUserName(data[0])

    return res.render ('gestionInicio', {
        usuario: data[0],
        codigoUsuario: id
    });

};

export const getListaAusenciasId = async (req, res) => {

    const {id} = req.params ;
    
    try {

        const pool = await getConnection();
        
        const result = await pool.request().input('codigoUsuario', sql.Int , id)
                                            .execute(DALdeducciones.getListaAusenciasId);

        res.json(result.recordset);


    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
};

export const insertAusenciaId = async (req, res) => {

    const {codigoUsuario, numeroDias} = req.body ;
    
    try {

        const pool = await getConnection();
        
        const result = await pool.request().input('codigoUsuario', sql.Int , codigoUsuario)
                                            .input('diasAusencia', sql.Int , numeroDias)
                                            .execute(DALdeducciones.insertSolicituAusencia);

        if (result.rowsAffected == 0)
        {
            return res.status(400).json({ msg: 'Error: Error al ingresar'});
        }

        res.status(200).json({ msg: 'Ok: registro ok'})


    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
};