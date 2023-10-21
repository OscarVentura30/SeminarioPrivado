"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _bancoController = require("../controllers/bancoController");
var router = (0, _express.Router)();
router.get('/banco', _bancoController.bancoInicioVista);
var _default = router;
exports["default"] = _default;