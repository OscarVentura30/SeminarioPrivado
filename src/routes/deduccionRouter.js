import {Router} from 'express';
import { deduccionesInicioVista  } from "../controllers/deduccionesController";

const router = Router();

router.get('/deduccion', deduccionesInicioVista);

export default router;