import { getConnection , sql , querys } from "../database";
import { queries, DALHelpers} from "../database/querys";
import {encryptText} from './encrypt';

export const datosPorUserName = async (userName)  => {

    const _userName = await encryptText(userName);
    
        try {
            const pool = await getConnection();
            
            const result = await pool.request().input('user',sql.VarChar,_userName)
                                                .execute(DALHelpers.getIdUserName)
    
            return result.recordset[0].col01
    
        } catch (error) {
    
            res.status(500);
            res.send(error.message);
            
        }
        
    return null

} 