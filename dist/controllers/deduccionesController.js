"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deduccionesInicioVista = void 0;
var deduccionesInicioVista = function deduccionesInicioVista(req, res) {
  return res.render('deduccionInicio', {
    usuario: 'oscar',
    titulo: 'Pagina Inicio'
  });
};
exports.deduccionesInicioVista = deduccionesInicioVista;