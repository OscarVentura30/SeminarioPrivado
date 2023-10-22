import {Router} from 'express';
import {validarToken} from '../helpers/validarToken';
import { gestionInicioVista, getListaAusenciasId,insertAusenciaId  } from "../controllers/gestionesController";

const router = Router();

router.get('/gestion',validarToken, gestionInicioVista);

router.get('/api/listaAusenciasId/:id', getListaAusenciasId);

router.post('/api/insertAusencia', insertAusenciaId);


export default router;