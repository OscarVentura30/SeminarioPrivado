"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _bancoController = require("../controllers/bancoController");
var _validarToken = require("../helpers/validarToken");
var router = (0, _express.Router)();
router.get('/banco', _validarToken.validarToken, _bancoController.bancoInicioVista);
router.get('/bancoTransferencias', _validarToken.validarToken, _bancoController.bancoTransferenciaVista);
router.get('/api/getEstadoPrestamo/:id', _bancoController.getEstadoCredito);
router.get('/api/getCuotasUsuario/:id', _bancoController.getCuotasPorIdUsuario);
router.post('/api/insertCreditoUsuario', _bancoController.insertCreditoUsuario);
router.get('/api/getTransferenciaBancos', _bancoController.getTransferenciasBancos);
var _default = router;
exports["default"] = _default;