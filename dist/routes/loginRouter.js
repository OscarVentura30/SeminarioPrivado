"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _validarToken = require("../helpers/validarToken");
var _loginController = require("../controllers/loginController");
var router = (0, _express.Router)();
router.get('/', _loginController.paginaInicio);
router.get('/login', _loginController.paginaInicio);
router.post('/login', _loginController.loginAutenticar);
router.get('/menu', _validarToken.validarToken, _loginController.menuPrincipal);
router.get('/cerrarSesion', _loginController.cerrarSesion);
var _default = router;
exports["default"] = _default;