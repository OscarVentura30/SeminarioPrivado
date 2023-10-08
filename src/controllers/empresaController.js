import { getConnection , sql , querys } from "../database";
import { queries, sprNombres } from "../database/querys";

export const getEmpresas = async (req, res) => {
    
    /*
    try {

        const pool = await getConnection();

        const result = await pool
                                .request()
                                .query(queries.getEmpresas)
        
        res.json(result.recordset);
        
    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
    */

    try {

        const pool = await getConnection();
        
        const result = await pool.request().execute(sprNombres.getEmpresas);

        res.json(result.recordset);



    } catch (error) {

        res.status(500);
        res.send(error.message);
        
    }
};

