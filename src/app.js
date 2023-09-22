import express from 'express'
import config from './config'

const app = express();

// archivos estaticos

 app.use(express.static('public'));

//ajustes

app.set('port', config.port);

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views/partials');

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

export default app;