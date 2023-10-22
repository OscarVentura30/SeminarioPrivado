import {Router} from 'express';
import { tiendaInicioVista, getListaProductos, insertVentaTienda, getListaProductosId ,comprasUsuarioVista} from "../controllers/tiendaController";
import {validarToken} from '../helpers/validarToken';

const router = Router();

router.get('/tienda', validarToken, tiendaInicioVista);

router.get('/comprasEmpleado', validarToken, comprasUsuarioVista);

router.get('/api/Listaproductos', getListaProductos);

router.get('/api/ListaCompras/:id', getListaProductosId);

router.post('/api/insertVenta', insertVentaTienda);


export default router;

