const bcrypt =  require('bcryptjs');
const Cryptr = require('cryptr');
import {config} from 'dotenv';

const cryptr = new Cryptr(process.env.KEY01, { encoding: 'hex', pbkdf2Iterations: 10000, saltLength: 10 }); 

export const encryptPass = async (pass) => {

    const hash = await bcrypt.hash(pass, 10)
    return hash

};

export const comparePass = async (passPlain, hashPass) => {

    return await bcrypt.compare(passPlain, hashPass)

};

export const encryptText = async (text) => {

    return cryptr.encrypt(text);

};

export const desencryptText = async (text) => {

    return cryptr.decrypt(text);

};



