import {Router} from 'express';
import {validarToken} from '../helpers/validarToken';
import { bonificacionInicio,ventasVista,getListaVentas,insertVenta,
         produccionVista, getListaProduccion,insertProduccion} from "../controllers/bonificacionController";

const router = Router();

router.get('/bonificacion',validarToken, bonificacionInicio);

router.get('/ventas',validarToken, ventasVista);

router.get('/api/listaVentas',getListaVentas);

router.post('/api/insertVenta',insertVenta);

router.get('/produccion',validarToken, produccionVista);

router.get('/api/listaProduccion',getListaProduccion);

router.post('/api/insertProduccion',insertProduccion);


export default router;