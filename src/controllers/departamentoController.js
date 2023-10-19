import { getConnection , sql , querys } from "../database";
import { queries,DALEmpresa, DALDepartamento} from "../database/querys";
import { token } from 'morgan';
import {serialize} from 'cookie';
import {datosToken} from '../helpers/getDatosToken';

export const departamentoVista = (req, res) => {

    const {cookies} = req;

    const token = cookies.tkn;

    const data = datosToken(token);

    return res.render ('departamento', {
        usuario: data[0],
        titulo: 'Lista Departamento',
    });

};

export const getListaDepartamentos = async (req, res) => {
    
    try {

        const pool = await getConnection();
        
        const result = await pool.request().execute(DALDepartamento.getDepartamentos);

        res.json(result.recordset);



    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
};

export const insertDepartamento = async (req, res) => {

    const {
        departamento, 
        descripcion} = req.body;

    if (departamento == null || departamento == '') {

        return res.status(400).json({ msg: 'Error: datos invalidos '});
    }

    try {
        const pool = await getConnection();
        
        const result = await pool.request().input('nombreDepartamento',sql.VarChar,departamento)
                                            .input('descripcion', sql.VarChar, descripcion)
                                            .execute(DALDepartamento.insertDepartamento)

        return res.redirect ('/departamentoVista');

    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
    
}

export const getDepartamentoPorId = async (req, res) => {

    const {id} = req.params;

    try {

        const pool = await getConnection();

        const result = await pool
                                .request()
                                .input("codigoDepartamento", sql.Int, id)
                                .execute(DALDepartamento.getDepartamentoPorId);
        
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

export const updateDepartamento  = async (req, res) => {

    const {id} = req.params;

    const {
        departamento, 
        descripcion } = req.body;

    if (departamento == null || departamento == '') {

        return res.status(400).json({ msg: 'Error: datos invalidos '});
    }

    try {
        const pool = await getConnection();
        
        const result = await pool.request() .input('codigoDepartamento',sql.VarChar,id)
                                            .input('nombreDepartamento',sql.VarChar,departamento)
                                            .input('descripcion', sql.VarChar, descripcion)
                                            .execute(DALDepartamento.updateDepartamento)

        return res.redirect ('/departamentoVista');

    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
    
}

export const deleteDepartamento = async (req, res) => {

    const {id} = req.params;

    try {

        const pool = await getConnection();

        const result = await pool.request().input("codigoDepartamento", sql.Int, id)
                                            .execute(DALDepartamento.deleteDepartamentoPorId);
        
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