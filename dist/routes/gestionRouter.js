"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _validarToken = require("../helpers/validarToken");
var _gestionesController = require("../controllers/gestionesController");
var router = (0, _express.Router)();
router.get('/gestion', _validarToken.validarToken, _gestionesController.gestionInicioVista);
router.get('/api/listaAusenciasId/:id', _gestionesController.getListaAusenciasId);
router.post('/api/insertAusencia', _gestionesController.insertAusenciaId);
var _default = router;
exports["default"] = _default;