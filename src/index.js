import app from './app';

/* rutas */

import inicioRutas from "./routes/loginRouter";
import tiendaRutas from "./routes/tiendaRouter";

/*
import {getConnection} from './database/conection';*/

app.use(inicioRutas);
app.use(tiendaRutas);

async function init() {

    await app.listen(app.get('port'));

    console.log('servidor en puerto',app.get('port'));
    
}


init();