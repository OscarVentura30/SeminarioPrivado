import { getConnection , sql , querys } from "../database";
import { queries } from "../database/querys";

export const tiendaInicio = (req, res) => {

    return res.render ('tienda', {
        user: 'oscar',
        titulo: 'Tienda Colaboradores',
    });

};


export const getProductos = async (req, res) => {

    try {

        const pool = await getConnection();

        const result = await pool
                                .request()
                                .query(queries.getProductos)
        
        res.json(result.recordset);
        
    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }

};

