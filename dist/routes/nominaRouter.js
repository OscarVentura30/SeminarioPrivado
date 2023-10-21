"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _nominaController = require("../controllers/nominaController");
var router = (0, _express.Router)();
router.get('/nomina', _nominaController.nominaInicioVista);
var _default = router;
exports["default"] = _default;