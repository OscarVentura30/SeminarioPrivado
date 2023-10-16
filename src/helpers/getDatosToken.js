const jwt = require('jsonwebtoken');

export const datosToken = (token) => {

    const dataToken = jwt.decode(token);

    return [dataToken.id , dataToken.id2];

}