import {Router} from 'express';
import { getEmpresas  } from "../controllers/empresaController";

const router = Router();

router.get('/empresa', getEmpresas);

export default router;