import app from './app';

/* rutas */

import inicioRutas from "./routes/loginRouter";
import tiendaRutas from "./routes/tiendaRouter";
import empresaRutas from "./routes/empresaRouter";
import usuarioRutas from './routes/usuarioRouter';

/*
import {getConnection} from './database/conection';*/

app.use(inicioRutas);
app.use(tiendaRutas);
app.use(empresaRutas);
app.use(usuarioRutas);


async function init() {

    await app.listen(app.get('port'));

    console.log('servidor en puerto',app.get('port'));
    
}


init();