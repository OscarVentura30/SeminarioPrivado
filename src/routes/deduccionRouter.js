import {Router} from 'express';
import { deduccionesInicioVista,AportesVista,getListaAportes } from "../controllers/deduccionesController";
import {validarToken} from '../helpers/validarToken';

const router = Router();

router.get('/deduccion', deduccionesInicioVista);

router.get('/aportes', validarToken, AportesVista);

router.get('/api/listaAportes',getListaAportes);

export default router;