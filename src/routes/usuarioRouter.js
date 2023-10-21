import {Router} from 'express';
import {validarToken} from '../helpers/validarToken';
import { getListaUsuarios,usuarioVista, usuarioNuevo, insertUsuario,accesoUsuario,getListaUsuariosAccesos, InsertuserName,
        getUsuarioPorId, updateUsuarioPorID, borrarUsuario, getUserNameId} from "../controllers/usuarioController";

import {usuarioEmpresaVista,getListaUsuarioEmpresa,getListaUsuarioPuesto, 
        getListaUsuarioDepartamento, getUsuarioEmpresaPorId, insertUsuarioEmpresa} from '../controllers/usuarioEmpresaController';

import {expedienteVista, getListaExpedienteEstatus,insertArchivoExpediente,
        descargarArchivoExpediente,getEstatusExpedienteUsuario} from '../controllers/expedienteController';

import {referenciaVista, getListaReferencias,insertReferencia,deleteReferencia} from '../controllers/referenciaController';

const multer = require('multer');

const storage = multer.diskStorage({

    destination: function (req, file, cb) {

      cb(null, './public/data/uploads/')

    },
    filename: function (req, file, cb) {

        cb(null, Date.now() + '-' + file.originalname);

    }
})

const upload = multer({ storage: storage });

const router = Router();

router.get('/usuarios',validarToken,usuarioVista);

router.get('/listaUsuarios',validarToken, getListaUsuarios);

router.get('/nuevoUsuario',validarToken, usuarioNuevo);

router.get('/accesoUsuario',validarToken, accesoUsuario);

router.get('/listaUsuariosAccesos',validarToken, getListaUsuariosAccesos);

router.get('/api/usuario/:id',validarToken,getUsuarioPorId);

router.get('/api/username/:id',validarToken,getUserNameId);

router.post('/insertUsuario',validarToken, upload.single('uploaded_file'), insertUsuario); 

router.post('/InsertAcceso',validarToken, InsertuserName);

router.put('/api/updateUsuario/:id',validarToken, updateUsuarioPorID);

router.delete('/api/borrarUsuario/:id',validarToken, borrarUsuario);

////////////////////////////////////////////////// RUTAS USUARIO EMPRESA

router.get('/usuarioEmpresa',validarToken,usuarioEmpresaVista);

router.get('/api/listaUsurioEmpresa',getListaUsuarioEmpresa);

router.get('/api/listaUsurioPuesto',getListaUsuarioPuesto);

router.get('/api/listaUsurioDepartemanto',getListaUsuarioDepartamento);

router.get('/api/usuarioEmpresa/:id', getUsuarioEmpresaPorId);

router.post('/api/usuarioEmpresa', insertUsuarioEmpresa);

////////////////////////////////////////////////// EXPEDIENTE USUARIO

router.get('/expediente',validarToken,expedienteVista);

router.get('/api/listaExpediente',getListaExpedienteEstatus);

router.put('/api/subirArchivoUsuario/:id', upload.single('uploaded_file'), insertArchivoExpediente);

router.post('/api/descargarArchivoUsuario/:id', descargarArchivoExpediente);

router.get('/api/expedienteUsuario/:id',getEstatusExpedienteUsuario);

////////////////////////////////////////////////// REFERENCIAS USUARIO

router.get('/referencia',validarToken,referenciaVista);

router.get('/api/listaReferencias',getListaReferencias);

router.post('/api/insertReferencia', insertReferencia);

router.delete('/api/borrarReferencia/:id', deleteReferencia);

export default router;