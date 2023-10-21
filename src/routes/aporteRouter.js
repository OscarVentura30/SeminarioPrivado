import {Router} from 'express';
import { aporteInicioVista, getAportesId,getInstituciones,insertAporte} from "../controllers/aporteController";
import {validarToken} from '../helpers/validarToken';

const router = Router();

router.get('/aporte', validarToken, aporteInicioVista);

router.get('/api/listaAportes/:id',getAportesId);

router.get('/api/listaInstituciones',getInstituciones);

router.post('/api/InsertAporte',insertAporte);

export default router;