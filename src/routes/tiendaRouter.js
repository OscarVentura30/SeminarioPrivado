import {Router} from 'express';
import { tiendaInicio } from "../controllers/tiendaController";

const router = Router();

router.get('/tienda', tiendaInicio);

export default router;

