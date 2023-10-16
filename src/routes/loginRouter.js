import {Router} from 'express';
import {validarToken} from '../helpers/validarToken';
import {paginaInicio, menuPrincipal, loginAutenticar, cerrarSesion} from '../controllers/loginController';

const router = Router();

router.get('/', paginaInicio);

router.get('/login', paginaInicio);

router.post('/login', loginAutenticar);

router.get('/menu',validarToken, menuPrincipal);

router.get('/cerrarSesion', cerrarSesion);

export default router;