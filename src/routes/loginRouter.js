import {Router} from 'express';
import {paginaInicio, menuPrincipal, loginAutenticar} from '../controllers/loginController';

const router = Router();

router.get('/', paginaInicio);

router.post('/login', loginAutenticar);

router.get('/menu', menuPrincipal);

export default router;