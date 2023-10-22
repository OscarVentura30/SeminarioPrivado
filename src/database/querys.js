export const DALUsuario =  {

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

}

export const DALEmpresa =  {
    getEmpresas: 'sp_getEmpresas',
    getListaEmpresas: 'sp_getListaEmpresas',
    insertEmpresa: 'sp_insertEmpresa',
    updateEmpresa: 'sp_updateEmpresa',
    getEmpresaPorId: 'sp_getEmpresaPorId',
    deletteEmpresaPorId: 'sp_deleteEmpresa'
}

export const DALDepartamento = {
    getDepartamentos:'sp_getDepartamentos',
    insertDepartamento: 'sp_insertDepartamento',
    updateDepartamento: 'sp_updateDepartamento',
    getDepartamentoPorId: 'sp_getDepartamentoPorId',
    deleteDepartamentoPorId: 'sp_deleteDepartamentoPorId'
}

export const DALPuestoRol ={
    getPuestoRol: 'sp_getPuestoRol'
} 

export const DALExpediente = {

    getStatusExpedientes:'sp_getListaEstatusExpediente',
    updateArchivoExpedienteUsuario : 'sp_insertArchivoExpediente',
    getArchivoExpedienteUsuario: 'sp_getArchivoExpediente',
    getStatusExpedienteUsuario: 'sp_getEstadoExpedienteUsuario'

}

export const DALReferencias = {
    getListaReferencias : 'sp_getListaReferencias',
    insertReferencia: 'sp_insertReferencia',
    deleteReferencia: 'sp_deleteReferencias'
}

export const DALsalario = {
    getListaSalario : 'sp_getEstadoSalarioUsuarios',
    insertSalarioUsuario: 'sp_insertSalario',
    getHistorialAumentos: 'sp_getHistorialAumentos',
    getListaLiquidacion: 'sp_getListadoLiquidacion'

}

export const DALbonificacion = {
    getListaVentas : 'sp_getRegistroVentas',
    insertVenta: 'sp_insertVentas',

    getListaProduccion: 'sp_getRegistroProduccion',
    insertProduccion: 'sp_insertProduccion',

    getListaHoras: 'sp_getListaHoras',
    insertHora: 'sp_insertHora',

}

export const DALdeducciones = {
    getListaAportes : 'sp_getRegistroAportes',
    getListaAportesId : 'sp_getRegistroAportesId',
    insertAporte: 'sp_insertAporte',

    getListaInstitucion: 'sp_getListaInstitucion',

    getListaAusencias: 'sp_getResgistroAusencias',
    getListaAusenciasId:'sp_getResgistroAusenciasid',
    insertSolicituAusencia: 'sp_insertSolicitudAusencia',
    aprobarSolicituAusencia : 'sp_aprobarSolicitudAusencia',

    getRegistroCompras : 'sp_getRegistroCompras'

}

export const DALtienda = {
    getProductosTienda : 'sp_getProductosTienda',
    InsertCompraTienda: 'sp_insertCompra',
    getRegistroComprasId : 'sp_getRegistroComprasId'

}



export const DALHelpers = {
    getIdUserName : 'sp_getIdporUserName',

}
