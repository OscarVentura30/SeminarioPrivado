import {Router} from 'express';
import { bancoInicioVista , getEstadoCredito,getCuotasPorIdUsuario,insertCreditoUsuario} from "../controllers/bancoController";
import {validarToken} from '../helpers/validarToken';

const router = Router();

router.get('/banco',validarToken, bancoInicioVista);

router.get('/api/getEstadoPrestamo/:id', getEstadoCredito);

router.get('/api/getCuotasUsuario/:id', getCuotasPorIdUsuario);

router.post('/api/insertCreditoUsuario', insertCreditoUsuario);

export default router;