"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _deduccionesController = require("../controllers/deduccionesController");
var _validarToken = require("../helpers/validarToken");
var router = (0, _express.Router)();
router.get('/deduccion', _validarToken.validarToken, _deduccionesController.deduccionesInicioVista);
router.get('/api/listaAusencias', _deduccionesController.getListaAusencias);
router.put('/api/autorizarAusencia/:id', _deduccionesController.autorizarAusencia);
router.get('/aportes', _validarToken.validarToken, _deduccionesController.AportesVista);
router.get('/api/listaAportes', _deduccionesController.getListaAportes);
router.get('/compras', _validarToken.validarToken, _deduccionesController.registroComprasVista);
router.get('/api/listaCompras', _deduccionesController.getListaCompras);
var _default = router;
exports["default"] = _default;