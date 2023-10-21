"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nominaInicioVista = void 0;
var nominaInicioVista = function nominaInicioVista(req, res) {
  return res.render('nominaInicio', {
    usuario: 'oscar',
    titulo: 'Pagina Inicio'
  });
};
exports.nominaInicioVista = nominaInicioVista;