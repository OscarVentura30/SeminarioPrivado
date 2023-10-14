import {Router} from 'express';
import { bonificacionInicio  } from "../controllers/bonificacionController";

const router = Router();

router.get('/bonificacion', bonificacionInicio);

export default router;