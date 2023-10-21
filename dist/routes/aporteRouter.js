"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _aporteController = require("../controllers/aporteController");
var router = (0, _express.Router)();
router.get('/aporte', _aporteController.aporteInicioVista);
var _default = router;
exports["default"] = _default;