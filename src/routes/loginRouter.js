import {Router} from 'express';
import {paginaInicio, menuPrincipal} from '../controllers/loginController';

const router = Router();

router.get('/', paginaInicio);

router.post('/menu', menuPrincipal);

router.get('/menu', menuPrincipal);

export default router;