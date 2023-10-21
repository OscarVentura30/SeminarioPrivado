"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _empresaController = require("../controllers/empresaController");
var _departamentoController = require("../controllers/departamentoController");
var _puestoRolController = require("../controllers/puestoRolController");
var router = (0, _express.Router)();
router.get('/empresaVista', _empresaController.usuarioEmpresaVista);
router.get('/empresa', _empresaController.getEmpresas);
router.get('/api/empresaLista', _empresaController.getListaEmpresas);
router.get('/api/empresaId/:id', _empresaController.getEmpresaPorId);
router.post('/api/insertEmpresa', _empresaController.insertEmpresa);
router.put('/api/updateEmpresa/:id', _empresaController.updateEmpresa);
router["delete"]('/api/deleteEmpresa/:id', _empresaController.deleteEmpresa);

//////////////////////////////////////////// DEPARTAMENTOS

router.get('/departamentoVista', _departamentoController.departamentoVista);
router.get('/api/departamentos', _departamentoController.getListaDepartamentos);
router.get('/api/departamentoId/:id', _departamentoController.getDepartamentoPorId);
router.post('/api/insertDepartamento', _departamentoController.insertDepartamento);
router.put('/api/updateDepartamento/:id', _departamentoController.updateDepartamento);
router["delete"]('/api/deleteDepartamento/:id', _departamentoController.deleteDepartamento);

//////////////////////////////////////////// ROLES

router.get('/puestoRolVista', _puestoRolController.puestoRolVista);
router.get('/api/listaPuestoRol', _puestoRolController.getListaPuestoRol);
var _default = router;
exports["default"] = _default;