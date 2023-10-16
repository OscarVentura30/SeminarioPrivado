const jwt = require('jsonwebtoken'); 
import {config} from 'dotenv';

export const generarToken = async (userName, idEmpresa)  => {

    const token = jwt.sign({id: userName, id2:idEmpresa }, process.env.KEY03,{ expiresIn: 60*60*24});

    return token

} 