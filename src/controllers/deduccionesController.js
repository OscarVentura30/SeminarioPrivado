import { getConnection , sql , querys } from "../database";
import { queries, DALdeducciones} from "../database/querys";
import { token } from 'morgan';
import {serialize} from 'cookie';
import {datosToken} from '../helpers/getDatosToken';
import {datosPorUserName} from '../helpers/getIdUserName';

export const deduccionesInicioVista = async (req, res) => {

    const {cookies} = req;

    const token = cookies.tkn;

    const data = datosToken(token);

    const id = await datosPorUserName(data[0]);

    return res.render ('deduccionInicio', {
        usuario: data[0],
        codigoUsuario: id
    });

};

export const getListaAusencias = async (req, res) => {
    
    try {

        const pool = await getConnection();
        
        const result = await pool.request().execute(DALdeducciones.getListaAusencias);

        res.json(result.recordset);


    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
};

export const autorizarAusencia = async (req, res) => {

    const {id} = req.params;

    const { idUsuarioAprueba } = req.body;

    try {

        const pool = await getConnection();

        const result = await pool.request().input("codigoDetalle", sql.Int, id)
                                            .input("codigoUsuarioAprueba", sql.Int, idUsuarioAprueba)
                                            .execute(DALdeducciones.aprobarSolicituAusencia);
        
        if (result.rowsAffected == 0)
        {
            return res.status(400).json({ msg: 'Error: Error al Actualizar'});
        }

        res.status(200).json({ msg: 'Ok: Actualizar ok'})
        
    } catch (error) {

        res.status(500);
        res.send(error.message); 
        
    }
}




export const AportesVista = (req, res) => {

    const {cookies} = req;

    const token = cookies.tkn;

    const data = datosToken(token);

    return res.render ('aportesRegistro', {
        usuario: data[0],
        titulo: 'Pagina Inicio',
    });

};

export const getListaAportes = async (req, res) => {
    
    try {

        const pool = await getConnection();
        
        const result = await pool.request().execute(DALdeducciones.getListaAportes);

        res.json(result.recordset);


    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
};

