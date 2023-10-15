import {Router} from 'express';
import { bancoInicioVista  } from "../controllers/bancoController";

const router = Router();

router.get('/banco', bancoInicioVista);

export default router;