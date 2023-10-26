"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tiendaController = require("../controllers/tiendaController");
var _validarToken = require("../helpers/validarToken");
var router = (0, _express.Router)();
router.get('/tienda', _validarToken.validarToken, _tiendaController.tiendaInicioVista);
router.get('/comprasEmpleado', _validarToken.validarToken, _tiendaController.comprasUsuarioVista);
router.get('/api/Listaproductos', _tiendaController.getListaProductos);
router.get('/api/ListaCompras/:id', _tiendaController.getListaProductosId);
router.post('/api/insertVenta', _tiendaController.insertVentaTienda);
var _default = router;
exports["default"] = _default;