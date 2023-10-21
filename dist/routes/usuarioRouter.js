"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _validarToken = require("../helpers/validarToken");
var _usuarioController = require("../controllers/usuarioController");
var _usuarioEmpresaController = require("../controllers/usuarioEmpresaController");
var _expedienteController = require("../controllers/expedienteController");
var _referenciaController = require("../controllers/referenciaController");
var _salarioController = require("../controllers/salarioController");
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, './public/data/uploads/');
  },
  filename: function filename(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
var upload = multer({
  storage: storage
});
var router = (0, _express.Router)();
router.get('/usuarios', _validarToken.validarToken, _usuarioController.usuarioVista);
router.get('/listaUsuarios', _validarToken.validarToken, _usuarioController.getListaUsuarios);
router.get('/nuevoUsuario', _validarToken.validarToken, _usuarioController.usuarioNuevo);
router.get('/accesoUsuario', _validarToken.validarToken, _usuarioController.accesoUsuario);
router.get('/listaUsuariosAccesos', _validarToken.validarToken, _usuarioController.getListaUsuariosAccesos);
router.get('/api/usuario/:id', _validarToken.validarToken, _usuarioController.getUsuarioPorId);
router.get('/api/username/:id', _validarToken.validarToken, _usuarioController.getUserNameId);
router.post('/insertUsuario', _validarToken.validarToken, upload.single('uploaded_file'), _usuarioController.insertUsuario);
router.post('/InsertAcceso', _validarToken.validarToken, _usuarioController.InsertuserName);
router.put('/api/updateUsuario/:id', _validarToken.validarToken, _usuarioController.updateUsuarioPorID);
router["delete"]('/api/borrarUsuario/:id', _validarToken.validarToken, _usuarioController.borrarUsuario);

////////////////////////////////////////////////// RUTAS USUARIO EMPRESA

router.get('/usuarioEmpresa', _validarToken.validarToken, _usuarioEmpresaController.usuarioEmpresaVista);
router.get('/api/listaUsurioEmpresa', _usuarioEmpresaController.getListaUsuarioEmpresa);
router.get('/api/listaUsurioPuesto', _usuarioEmpresaController.getListaUsuarioPuesto);
router.get('/api/listaUsurioDepartemanto', _usuarioEmpresaController.getListaUsuarioDepartamento);
router.get('/api/usuarioEmpresa/:id', _usuarioEmpresaController.getUsuarioEmpresaPorId);
router.post('/api/usuarioEmpresa', _usuarioEmpresaController.insertUsuarioEmpresa);

////////////////////////////////////////////////// EXPEDIENTE USUARIO

router.get('/expediente', _validarToken.validarToken, _expedienteController.expedienteVista);
router.get('/api/listaExpediente', _expedienteController.getListaExpedienteEstatus);
router.put('/api/subirArchivoUsuario/:id', upload.single('uploaded_file'), _expedienteController.insertArchivoExpediente);
router.post('/api/descargarArchivoUsuario/:id', _expedienteController.descargarArchivoExpediente);
router.get('/api/expedienteUsuario/:id', _expedienteController.getEstatusExpedienteUsuario);

////////////////////////////////////////////////// REFERENCIAS USUARIO

router.get('/referencia', _validarToken.validarToken, _referenciaController.referenciaVista);
router.get('/api/listaReferencias', _referenciaController.getListaReferencias);
router.post('/api/insertReferencia', _referenciaController.insertReferencia);
router["delete"]('/api/borrarReferencia/:id', _referenciaController.deleteReferencia);

////////////////////////////////////////////////// SALARIO USUARIO

router.get('/salario', _validarToken.validarToken, _salarioController.salarioVista);
router.get('/api/listaSalario', _salarioController.getListaSalarioUsuario);
router.post('/api/insertSalario', _salarioController.insertSalarioUsuario);
router.get('/aumentos', _validarToken.validarToken, _salarioController.aumentosVista);
router.get('/api/historialAumentos', _salarioController.getHistorialAumentos);
router.get('/liquidacion', _validarToken.validarToken, _salarioController.liquidacionVista);
router.get('/api/listaLiquidacion', _salarioController.getListaLiquidacion);
var _default = router;
exports["default"] = _default;