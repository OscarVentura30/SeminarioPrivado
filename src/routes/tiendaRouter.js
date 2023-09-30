import {Router} from 'express';
import { tiendaInicio, getProductos } from "../controllers/tiendaController";

const router = Router();

router.get('/tienda', tiendaInicio);

router.get('/productos', getProductos);


export default router;

