import {Router} from 'express';
import { bancoInicioVista , getEstadoCredito,getCuotasPorIdUsuario,insertCreditoUsuario,getTransferenciasBancos, bancoTransferenciaVista} from "../controllers/bancoController";
import {validarToken} from '../helpers/validarToken';

const router = Router();

router.get('/banco',validarToken, bancoInicioVista);

router.get('/bancoTransferencias',validarToken, bancoTransferenciaVista);

router.get('/api/getEstadoPrestamo/:id', getEstadoCredito);

router.get('/api/getCuotasUsuario/:id', getCuotasPorIdUsuario);

router.post('/api/insertCreditoUsuario', insertCreditoUsuario);

router.get('/api/getTransferenciaBancos', getTransferenciasBancos)

export default router;