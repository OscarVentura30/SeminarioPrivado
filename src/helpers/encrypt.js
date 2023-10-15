import {config} from 'dotenv';

const bcrypt =  require('bcryptjs');
const CryptoJS = require('crypto-js');

const clave = CryptoJS.enc.Hex.parse(process.env.KEY01);
const iv = CryptoJS.enc.Hex.parse(process.env.KEY02);

export const encryptPass = async (pass) => {

    const hash = await bcrypt.hash(pass, 10)
    return hash

};

export const comparePass = async (passPlain, hashPass) => {

    return await bcrypt.compare(passPlain, hashPass)

};

export const encryptText = async (text) => {

    const textoCifrado = CryptoJS.AES.encrypt(text, clave, { iv: iv });
    return textoCifrado.toString();

};

export const desencryptText = async (text) => {

    const bytes = CryptoJS.AES.decrypt(text, clave, { iv: iv });
    const _text = bytes.toString(CryptoJS.enc.Utf8);
    return _text;

};
