"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cargarImagen = void 0;
var multer = require('multer');
var cargarImagen = function cargarImagen(fotoUsuario) {
  var storage = multer.diskStorage({
    destination: function destination(req, file, cb) {
      cb(null, '/docs/img/');
    },
    filename: function filename(req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  var upload = multer({
    storage: storage
  });
  upload.single(fotoUsuario);
  return '/docs/img/' + fotoUsuario;
};
exports.cargarImagen = cargarImagen;