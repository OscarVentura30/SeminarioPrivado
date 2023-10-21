import { getConnection , sql , querys } from "../database";
import { queries, DALReferencias, DALsalario} from "../database/querys";
import { token } from 'morgan';
import {serialize} from 'cookie';
import {datosToken} from '../helpers/getDatosToken';

export const salarioVista = (req, res) => {

    const {cookies} = req;

    const token = cookies.tkn;

    const data = datosToken(token);

    return res.render ('salario', {
        usuario: data[0],
        titulo: 'Lista referencias',
    });

};

export const getListaSalarioUsuario = async (req, res) => {
    
    try {

        const pool = await getConnection();
        
        const result = await pool.request().execute(DALsalario.getListaSalario);

        res.json(result.recordset);


    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
};

export const insertSalarioUsuario = async (req, res) => {

    const { 
        idUsuario, 
        SalarioBase,
        SalarioExtra } = req.body;

    try {
        const pool = await getConnection();
        
        const result = await pool.request().input('idUsuario',sql.Int,idUsuario)
                                            .input('SalarioBase', sql.Numeric, SalarioBase)
                                            .input('SalarioExtra' , sql.Numeric , SalarioExtra)
                                            .execute(DALsalario.insertSalarioUsuario)

        return res.redirect ('/salario');

    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
    
}


export const aumentosVista = (req, res) => {

    const {cookies} = req;

    const token = cookies.tkn;

    const data = datosToken(token);

    return res.render ('aumentos', {
        usuario: data[0],
        titulo: 'Lista referencias',
    });

};

export const getHistorialAumentos = async (req, res) => {
    
    try {

        const pool = await getConnection();
        
        const result = await pool.request().execute(DALsalario.getHistorialAumentos);

        res.json(result.recordset);


    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
};

export const liquidacionVista = (req, res) => {

    const {cookies} = req;

    const token = cookies.tkn;

    const data = datosToken(token);

    return res.render ('liquidacion', {
        usuario: data[0],
        titulo: 'Lista referencias',
    });

};

export const getListaLiquidacion = async (req, res) => {
    
    try {

        const pool = await getConnection();
        
        const result = await pool.request().execute(DALsalario.getListaLiquidacion);

        res.json(result.recordset);


    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
};

