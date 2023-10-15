import {Router} from 'express';
import { aporteInicioVista  } from "../controllers/aporteController";

const router = Router();

router.get('/aporte', aporteInicioVista);

export default router;