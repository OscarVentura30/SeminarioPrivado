import {Router} from 'express';
import { deduccionesInicioVista,AportesVista,getListaAportes,getListaAusencias,autorizarAusencia, 
         registroComprasVista, getListaCompras} from "../controllers/deduccionesController";
import {validarToken} from '../helpers/validarToken';

const router = Router();

router.get('/deduccion',validarToken, deduccionesInicioVista);

router.get('/api/listaAusencias',getListaAusencias);

router.put('/api/autorizarAusencia/:id',autorizarAusencia);

router.get('/aportes', validarToken, AportesVista);

router.get('/api/listaAportes',getListaAportes);

router.get('/compras', validarToken, registroComprasVista);

router.get('/api/listaCompras',getListaCompras);


export default router;