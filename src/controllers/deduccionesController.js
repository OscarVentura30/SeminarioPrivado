import { getConnection , sql , querys } from "../database";
import { queries, DALdeducciones} from "../database/querys";
import { token } from 'morgan';
import {serialize} from 'cookie';
import {datosToken} from '../helpers/getDatosToken';

export const deduccionesInicioVista = (req, res) => {

    const {cookies} = req;

    const token = cookies.tkn;

    const data = datosToken(token);

    return res.render ('deduccionInicio', {
        usuario: data[0],
        titulo: 'Pagina Inicio',
    });

};

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