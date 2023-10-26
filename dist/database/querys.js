"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DALtienda = exports.DALsalario = exports.DALdeducciones = exports.DALbonificacion = exports.DALUsuario = exports.DALReferencias = exports.DALPuestoRol = exports.DALHelpers = exports.DALExpediente = exports.DALEmpresa = exports.DALDepartamento = exports.DALBanco = void 0;
var DALUsuario = {
  getListaUsuarios: 'sp_getListaUsuarios',
  insertUsuario: 'sp_insertUsuario',
  getListaUsuariosAccesos: 'sp_getListaAccesosUsuarios',
  insertAcces: 'sp_insertAccesoUsuario',
  getUsuarioPorUsername: 'sp_getUsuarioPorUserName',
  getUsuarioPorID: 'sp_getUsuarioPorID',
  updateUsuarioId: 'sp_updateUsuario',
  borrarUsuario: 'sp_borrarUsuario',
  getUserName: 'sp_getUserNamePorId',
  getUsuarioEmpresa: 'sp_getListaUsuarioEmpresa',
  getPuestoUsuario: 'sp_getPuesto',
  getUsuarioDepartamento: 'sp_getDepartamento',
  getUsuarioEmpresaPorID: 'sp_usuarioEmpresaPorId',
  InsertUpdateUsuarioEmpresa: 'sp_InsertUsuarioEmpresa'
};
exports.DALUsuario = DALUsuario;
var DALEmpresa = {
  getEmpresas: 'sp_getEmpresas',
  getListaEmpresas: 'sp_getListaEmpresas',
  insertEmpresa: 'sp_insertEmpresa',
  updateEmpresa: 'sp_updateEmpresa',
  getEmpresaPorId: 'sp_getEmpresaPorId',
  deletteEmpresaPorId: 'sp_deleteEmpresa'
};
exports.DALEmpresa = DALEmpresa;
var DALDepartamento = {
  getDepartamentos: 'sp_getDepartamentos',
  insertDepartamento: 'sp_insertDepartamento',
  updateDepartamento: 'sp_updateDepartamento',
  getDepartamentoPorId: 'sp_getDepartamentoPorId',
  deleteDepartamentoPorId: 'sp_deleteDepartamentoPorId'
};
exports.DALDepartamento = DALDepartamento;
var DALPuestoRol = {
  getPuestoRol: 'sp_getPuestoRol'
};
exports.DALPuestoRol = DALPuestoRol;
var DALExpediente = {
  getStatusExpedientes: 'sp_getListaEstatusExpediente',
  updateArchivoExpedienteUsuario: 'sp_insertArchivoExpediente',
  getArchivoExpedienteUsuario: 'sp_getArchivoExpediente',
  getStatusExpedienteUsuario: 'sp_getEstadoExpedienteUsuario'
};
exports.DALExpediente = DALExpediente;
var DALReferencias = {
  getListaReferencias: 'sp_getListaReferencias',
  insertReferencia: 'sp_insertReferencia',
  deleteReferencia: 'sp_deleteReferencias'
};
exports.DALReferencias = DALReferencias;
var DALsalario = {
  getListaSalario: 'sp_getEstadoSalarioUsuarios',
  insertSalarioUsuario: 'sp_insertSalario',
  getHistorialAumentos: 'sp_getHistorialAumentos',
  getListaLiquidacion: 'sp_getListadoLiquidacion'
};
exports.DALsalario = DALsalario;
var DALbonificacion = {
  getListaVentas: 'sp_getRegistroVentas',
  insertVenta: 'sp_insertVentas',
  getListaProduccion: 'sp_getRegistroProduccion',
  insertProduccion: 'sp_insertProduccion',
  getListaHoras: 'sp_getListaHoras',
  insertHora: 'sp_insertHora'
};
exports.DALbonificacion = DALbonificacion;
var DALdeducciones = {
  getListaAportes: 'sp_getRegistroAportes',
  getListaAportesId: 'sp_getRegistroAportesId',
  insertAporte: 'sp_insertAporte',
  getListaInstitucion: 'sp_getListaInstitucion',
  getListaAusencias: 'sp_getResgistroAusencias',
  getListaAusenciasId: 'sp_getResgistroAusenciasid',
  insertSolicituAusencia: 'sp_insertSolicitudAusencia',
  aprobarSolicituAusencia: 'sp_aprobarSolicitudAusencia',
  getRegistroCompras: 'sp_getRegistroCompras'
};
exports.DALdeducciones = DALdeducciones;
var DALtienda = {
  getProductosTienda: 'sp_getProductosTienda',
  InsertCompraTienda: 'sp_insertCompra',
  getRegistroComprasId: 'sp_getRegistroComprasId'
};
exports.DALtienda = DALtienda;
var DALBanco = {
  getEstadoPrestamoId: 'sp_getPrestamoId',
  getCuotasPorIdUsuario: 'sp_getCuotasPorIdUsuario',
  insertCreditoUsuario: 'sp_insertPrestamo',
  getTransferenciasBancos: 'sp_getTransferenciasBancos'
};
exports.DALBanco = DALBanco;
var DALHelpers = {
  getIdUserName: 'sp_getIdporUserName'
};
exports.DALHelpers = DALHelpers;