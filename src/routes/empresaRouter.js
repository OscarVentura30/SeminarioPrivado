import {Router} from 'express';

import { getEmpresas,usuarioEmpresaVista,getListaEmpresas,
         insertEmpresa, updateEmpresa, getEmpresaPorId, deleteEmpresa} from "../controllers/empresaController";

import {departamentoVista, getListaDepartamentos,insertDepartamento,
        updateDepartamento, getDepartamentoPorId, deleteDepartamento} from '../controllers/departamentoController';

import {puestoRolVista, getListaPuestoRol} from '../controllers/puestoRolController';

const router = Router();

router.get('/empresaVista', usuarioEmpresaVista);

router.get('/empresa', getEmpresas);

router.get('/api/empresaLista' , getListaEmpresas);

router.get('/api/empresaId/:id' , getEmpresaPorId);

router.post('/api/insertEmpresa' , insertEmpresa);

router.put('/api/updateEmpresa/:id' , updateEmpresa);

router.delete('/api/deleteEmpresa/:id' , deleteEmpresa);

//////////////////////////////////////////// DEPARTAMENTOS

router.get('/departamentoVista', departamentoVista);

router.get('/api/departamentos', getListaDepartamentos);

router.get('/api/departamentoId/:id' , getDepartamentoPorId);

router.post('/api/insertDepartamento' ,insertDepartamento);

router.put('/api/updateDepartamento/:id' , updateDepartamento);

router.delete('/api/deleteDepartamento/:id' , deleteDepartamento);

//////////////////////////////////////////// ROLES

router.get('/puestoRolVista', puestoRolVista);

router.get('/api/listaPuestoRol', getListaPuestoRol);

export default router;