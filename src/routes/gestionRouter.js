import {Router} from 'express';
import { gestionInicioVista  } from "../controllers/gestionesController";

const router = Router();

router.get('/gestion', gestionInicioVista);

export default router;