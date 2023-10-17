import {Router} from 'express';
import {validarToken} from '../helpers/validarToken';
import { getListaUsuarios,usuarioVista, usuarioNuevo, insertUsuario, 
        accesoUsuario,getListaUsuariosAccesos, InsertuserName,
        getUsuarioPorId, updateUsuarioPorID, borrarUsuario, getUserNameId} from "../controllers/usuarioController";

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

router.get('/listaUsuarios', getListaUsuarios);

router.get('/nuevoUsuario', usuarioNuevo);

router.get('/accesoUsuario', accesoUsuario);

router.get('/listaUsuariosAccesos', getListaUsuariosAccesos);

router.get('/api/usuario/:id',validarToken,getUsuarioPorId);

router.get('/api/username/:id',getUserNameId);

router.post('/insertUsuario', upload.single('uploaded_file'), insertUsuario); 

router.post('/InsertAcceso', InsertuserName);

router.put('/api/updateUsuario/:id',validarToken, updateUsuarioPorID);

router.delete('/api/borrarUsuario/:id',validarToken, borrarUsuario);

export default router;