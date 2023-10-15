import {Router} from 'express';
import { nominaInicioVista  } from "../controllers/nominaController";

const router = Router();

router.get('/nomina', nominaInicioVista);

export default router;