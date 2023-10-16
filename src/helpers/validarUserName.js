import { getConnection , sql , querys } from "../database";
import { DALUsuario } from "../database/querys";
import { comparePass, encryptText } from "../helpers/encrypt";

export const validarUsuario = async (usuario, clave, codigoEmpresa) => {
    //console.log(usuario);
    const _usuario = await encryptText(usuario);
    //console.log(_usuario);

    try {

        const pool = await getConnection();

        const result = await pool.request()
                                             .input("userName", sql.VarChar , _usuario)
                                             .execute(DALUsuario.getUsuarioPorUsername);

        if (result.recordset[0] == null) 
        {
            return '404' // codigo de error 1 interno que no existe usuario
        }
        else
        {
            const compararClave = await comparePass(clave, result.recordset[0].col03);

            if (compararClave == 0) {

                return '400' // codigo de error 2 interno , clave incorrecta
            }
            else if(result.recordset[0].codigoEmpresa == codigoEmpresa)
            {
                return '200' // codigo interno usuario correcto
            }
            return '400 E'

        }
        
    } catch (error) {

        return '500'
    }

};