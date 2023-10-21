import { getConnection , sql , querys } from "../database";
import { queries,DALbonificacion} from "../database/querys";
import { token } from 'morgan';
import {serialize} from 'cookie';
import {datosToken} from '../helpers/getDatosToken';

export const bonificacionInicio = (req, res) => {

    const {cookies} = req;

    const token = cookies.tkn;

    const data = datosToken(token);

    return res.render ('bonificacionInicio', {
        usuario: data[0],
        titulo: 'Pagina Inicio',
    });

};


export const ventasVista = (req, res) => {

    const {cookies} = req;

    const token = cookies.tkn;

    const data = datosToken(token);

    return res.render ('ventas', {
        usuario: data[0],
        titulo: 'Pagina Inicio',
    });

};

export const getListaVentas = async (req, res) => {
    
    try {

        const pool = await getConnection();
        
        const result = await pool.request().execute(DALbonificacion.getListaVentas);

        res.json(result.recordset);


    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
};

export const insertVenta = async (req, res) => {

    const {
        idUsuario, 
        venta } = req.body;


    try {
        const pool = await getConnection();
        
        const result = await pool.request().input('codigoUsuario',sql.VarChar,idUsuario)
                                            .input('montoVenta', sql.Numeric, venta)
                                            .execute(DALbonificacion.insertVenta)

        return res.redirect ('/ventas');

    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
    
}


export const produccionVista = (req, res) => {

    const {cookies} = req;

    const token = cookies.tkn;

    const data = datosToken(token);

    return res.render ('produccion', {
        usuario: data[0],
        titulo: 'Pagina Inicio',
    });

};

export const getListaProduccion = async (req, res) => {
    
    try {

        const pool = await getConnection();
        
        const result = await pool.request().execute(DALbonificacion.getListaProduccion);

        res.json(result.recordset);


    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
};

export const insertProduccion = async (req, res) => {

    const {
        idUsuario, 
        piezas } = req.body;


    try {
        const pool = await getConnection();
        
        const result = await pool.request().input('codigoUsuario',sql.Int,idUsuario)
                                            .input('numeroPiezas', sql.Int, piezas)
                                            .execute(DALbonificacion.insertProduccion)

        return res.redirect ('/ventas');

    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
    
}
