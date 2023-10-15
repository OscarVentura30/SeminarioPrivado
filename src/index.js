import app from './app';

/* rutas */

import inicioRutas from "./routes/loginRouter";
import tiendaRutas from "./routes/tiendaRouter";
import empresaRutas from "./routes/empresaRouter";
import usuarioRutas from './routes/usuarioRouter';
import bonificacionRutas from './routes/bonificacionRouter';
import deduccionesRutas from './routes/deduccionRouter';
import gestionRutas from './routes/gestionRouter';
import bancoRutas from './routes/bancoRouter';
import aporteRutas from './routes/aporteRouter';
import nominaRutas from './routes/nominaRouter'

/*
import {getConnection} from './database/conection';*/

app.use(inicioRutas);
app.use(tiendaRutas);
app.use(empresaRutas);
app.use(usuarioRutas);
app.use(bonificacionRutas);
app.use(deduccionesRutas);
app.use(gestionRutas);
app.use(bancoRutas);
app.use(aporteRutas);
app.use(nominaRutas);

async function init() {

    await app.listen(app.get('port'));

    console.log('servidor en puerto',app.get('port'));
    
}

init();