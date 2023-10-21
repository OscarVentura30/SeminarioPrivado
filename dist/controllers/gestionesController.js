"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gestionInicioVista = void 0;
var gestionInicioVista = function gestionInicioVista(req, res) {
  return res.render('gestionInicio', {
    usuario: 'oscar',
    titulo: 'Pagina Inicio'
  });
};
exports.gestionInicioVista = gestionInicioVista;