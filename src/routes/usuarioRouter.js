import {Router} from 'express';
import { getListaUsuarios,usuarioVista, usuarioNuevo, insertUsuario, 
        accesoUsuario,getListaUsuariosAccesos, InsertuserName} from "../controllers/usuarioController";

const multer = require('multer');

const storage = multer.diskStorage({

    destination: function (req, file, cb) {

      cb(null, './public/data/uploads/')

    },
    filename: function (req, file, cb) {

        cb(null, Date.now() + '-' + file.originalname); // Nombre de archivo único

    }
  })

const upload = multer({ storage: storage });

const router = Router();

router.get('/usuarios',usuarioVista);

router.get('/listaUsuarios', getListaUsuarios);

router.get('/nuevoUsuario', usuarioNuevo);

router.get('/accesoUsuario', accesoUsuario);

router.get('/listaUsuariosAccesos', getListaUsuariosAccesos);

router.post('/insertUsuario', upload.single('uploaded_file'), insertUsuario); 

router.post('/InsertAcceso', InsertuserName);

export default router;