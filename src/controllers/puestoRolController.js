import { getConnection , sql , querys } from "../database";
import { queries, DALPuestoRol} from "../database/querys";
import { token } from 'morgan';
import {serialize} from 'cookie';
import {datosToken} from '../helpers/getDatosToken';

export const puestoRolVista = (req, res) => {

    const {cookies} = req;

    const token = cookies.tkn;

    const data = datosToken(token);

    return res.render ('puestoRol', {
        usuario: data[0],
        titulo: 'Lista Empresas',
    });

};

export const getListaPuestoRol = async (req, res) => {
    
    try {

        const pool = await getConnection();
        
        const result = await pool.request().execute(DALPuestoRol.getPuestoRol);

        res.json(result.recordset);



    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
};