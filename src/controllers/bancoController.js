import { getConnection , sql , querys } from "../database";
import { queries, DALBanco} from "../database/querys";
import { token } from 'morgan';
import {serialize} from 'cookie';
import {datosToken} from '../helpers/getDatosToken';
import {datosPorUserName} from '../helpers/getIdUserName';


export const bancoInicioVista =  async (req, res) => {

    const {cookies} = req;

    const token = cookies.tkn;

    const data = datosToken(token);

    const id = await datosPorUserName(data[0])

    return res.render ('bancoInicio', {
        usuario: data[0],
        codigoUsuario: id
    });

};

export const bancoTransferenciaVista =  async (req, res) => {

    const {cookies} = req;

    const token = cookies.tkn;

    const data = datosToken(token);

    const id = await datosPorUserName(data[0])

    return res.render ('bancosTransferencias', {
        usuario: data[0],
        codigoUsuario: id
    });

};

export const getEstadoCredito = async (req, res) => {

    const {id} = req.params;
    
    try {

        const pool = await getConnection();
        
        const result = await pool.request().input('codigoUsuario', sql.Int ,id )
                                            .execute(DALBanco.getEstadoPrestamoId);

        res.json(result.recordset);


    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
};



export const getCuotasPorIdUsuario = async (req, res) => {

    const {id} = req.params;
    
    try {

        const pool = await getConnection();
        
        const result = await pool.request().input('codigoUsuario', sql.Int ,id )
                                            .execute(DALBanco.getCuotasPorIdUsuario);

        res.json(result.recordset);


    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
};

export const insertCreditoUsuario = async (req, res) => {

    const {codigoBanco, codigoUsuario, plazo, monto} = req.body;
    
    try {

        const pool = await getConnection();
        
        const result = await pool.request().input('codigoBanco', sql.Int ,codigoBanco )
                                            .input('codigoUsuario', sql.Int ,codigoUsuario )
                                            .input('plazo', sql.Int ,plazo )
                                            .input('monto', sql.Numeric ,monto )
                                            .execute(DALBanco.insertCreditoUsuario);

        res.json(result.recordset);


    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
};



export const getTransferenciasBancos = async (req, res) => {
    
    try {

        const pool = await getConnection();
        
        const result = await pool.request().execute(DALBanco.getTransferenciasBancos);

        res.json(result.recordset);


    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
};