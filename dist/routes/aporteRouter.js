"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _aporteController = require("../controllers/aporteController");
var _validarToken = require("../helpers/validarToken");
var router = (0, _express.Router)();
router.get('/aporte', _validarToken.validarToken, _aporteController.aporteInicioVista);
router.get('/api/listaAportes/:id', _aporteController.getAportesId);
router.get('/api/listaInstituciones', _aporteController.getInstituciones);
router.post('/api/InsertAporte', _aporteController.insertAporte);
var _default = router;
exports["default"] = _default;