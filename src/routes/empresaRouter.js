import {Router} from 'express';
import { getEmpresas,usuarioEmpresaVista,getListaEmpresas,
         insertEmpresa, updateEmpresa, getEmpresaPorId, deleteEmpresa} from "../controllers/empresaController";

const router = Router();

router.get('/empresaVista', usuarioEmpresaVista);

router.get('/empresa', getEmpresas);

router.get('/api/empresaLista' , getListaEmpresas);

router.get('/api/empresaId/:id' , getEmpresaPorId);

router.post('/api/insertEmpresa' , insertEmpresa);

router.put('/api/updateEmpresa/:id' , updateEmpresa);

router.delete('/api/deleteEmpresa/:id' , deleteEmpresa);

export default router;