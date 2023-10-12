const multer  = require('multer');

export const cargarImagen = (fotoUsuario) => {

    const storage = multer.diskStorage({
        
        destination: (req, file, cb) => { 

            cb(null, '/docs/img/');
        },

        filename: (req, file,cb) => {

            cb(null, Date.now() + '-' + file.originalname);
        }

    });

    const upload = multer({storage: storage});

    upload.single(fotoUsuario);
    
    return '/docs/img/' + fotoUsuario;
}



