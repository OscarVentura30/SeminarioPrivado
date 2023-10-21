"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _deduccionesController = require("../controllers/deduccionesController");
var router = (0, _express.Router)();
router.get('/deduccion', _deduccionesController.deduccionesInicioVista);
var _default = router;
exports["default"] = _default;