import { getConnection , sql , querys } from "../database";
import { queries, DALtienda} from "../database/querys";
import { token } from 'morgan';
import {serialize} from 'cookie';
import {datosToken} from '../helpers/getDatosToken';
import {datosPorUserName} from '../helpers/getIdUserName';

export const tiendaInicioVista = async (req, res) => {

    const {cookies} = req;

    const token = cookies.tkn;

    const data = datosToken(token);

    const id = await datosPorUserName(data[0])

    return res.render ('tiendaInicio', {
        usuario: data[0],
        codigoUsuario: id
    });

};

export const comprasUsuarioVista = async (req, res) => {

    const {cookies} = req;

    const token = cookies.tkn;

    const data = datosToken(token);

    const id = await datosPorUserName(data[0])

    return res.render ('comprasUsuario', {
        usuario: data[0],
        codigoUsuario: id
    });

};


export const getListaProductos = async (req, res) => {
    
    try {

        const pool = await getConnection();
        
        const result = await pool.request().execute(DALtienda.getProductosTienda);

        res.json(result.recordset);


    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
};

export const getListaProductosId = async (req, res) => {

    const {id} = req.params; 
    
    try {

        const pool = await getConnection();
        
        const result = await pool.request().input('codigoUsuario',sql.Int,id)
                                            .execute(DALtienda.getRegistroComprasId);

        res.json(result.recordset);


    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
};

export const insertVentaTienda = async (req, res) => {

    const {idUsuario, codigoProducto} = req.body;
    
    try {

        const pool = await getConnection();
        
        const result = await pool.request().input('codigoProducto',sql.Int,codigoProducto)
                                            .input('codigoUsuario',sql.Int,idUsuario)
                                            .execute(DALtienda.InsertCompraTienda);

        return res.redirect ('/comprasEmpleado');


    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
};



