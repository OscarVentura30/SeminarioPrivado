import {Router} from 'express';
import { deduccionesInicioVista,AportesVista,getListaAportes,getListaAusencias,autorizarAusencia } from "../controllers/deduccionesController";
import {validarToken} from '../helpers/validarToken';

const router = Router();

router.get('/deduccion', deduccionesInicioVista);

router.get('/api/listaAusencias',getListaAusencias);

router.put('/api/autorizarAusencia/:id',autorizarAusencia);

router.get('/aportes', validarToken, AportesVista);

router.get('/api/listaAportes',getListaAportes);



export default router;