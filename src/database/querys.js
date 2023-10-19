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