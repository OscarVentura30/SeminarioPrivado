import {Router} from 'express';
import { tiendaInicioVista, getProductos } from "../controllers/tiendaController";

const router = Router();

router.get('/tienda', tiendaInicioVista);

router.get('/productos', getProductos);


export default router;

