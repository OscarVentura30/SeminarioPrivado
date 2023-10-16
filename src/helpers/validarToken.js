import {config} from 'dotenv';
const jwt = require('jsonwebtoken');

export const validarToken = async (req, res, next) => {

    const {cookies} = req ;

    const tokenUser = cookies.tkn;

    if (!tokenUser) {

        return  res.redirect ('/');
        
    }

    const decoded = jwt.verify(tokenUser, process.env.KEY03, (error, auth) => {

        if (error) {
    
            res.clearCookie('xtoken');

            return res.status(403).json({

                auth : false ,

                message: 'Token Invalido'

            });
            
        } 
        else 
        {
            
            const dataToken = jwt.decode(tokenUser)

            next();
        }
    });
    
}