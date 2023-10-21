"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aporteInicioVista = void 0;
var aporteInicioVista = function aporteInicioVista(req, res) {
  return res.render('aporteInicio', {
    usuario: 'oscar',
    titulo: 'Pagina Inicio'
  });
};
exports.aporteInicioVista = aporteInicioVista;