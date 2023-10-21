"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bancoInicioVista = void 0;
var bancoInicioVista = function bancoInicioVista(req, res) {
  return res.render('bancoInicio', {
    usuario: 'oscar',
    titulo: 'Pagina Inicio'
  });
};
exports.bancoInicioVista = bancoInicioVista;