"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _validarToken = require("../helpers/validarToken");
var _bonificacionController = require("../controllers/bonificacionController");
var router = (0, _express.Router)();
router.get('/bonificacion', _validarToken.validarToken, _bonificacionController.bonificacionInicio);
router.get('/api/listaHoras', _bonificacionController.getListaHoras);
router.post('/api/insertHora', _bonificacionController.insertHoras);
router.get('/ventas', _validarToken.validarToken, _bonificacionController.ventasVista);
router.get('/api/listaVentas', _bonificacionController.getListaVentas);
router.post('/api/insertVenta', _bonificacionController.insertVenta);
router.get('/produccion', _validarToken.validarToken, _bonificacionController.produccionVista);
router.get('/api/listaProduccion', _bonificacionController.getListaProduccion);
router.post('/api/insertProduccion', _bonificacionController.insertProduccion);
var _default = router;
exports["default"] = _default;