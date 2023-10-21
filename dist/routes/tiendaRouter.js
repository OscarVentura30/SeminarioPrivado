"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tiendaController = require("../controllers/tiendaController");
var router = (0, _express.Router)();
router.get('/tienda', _tiendaController.tiendaInicioVista);
router.get('/productos', _tiendaController.getProductos);
var _default = router;
exports["default"] = _default;