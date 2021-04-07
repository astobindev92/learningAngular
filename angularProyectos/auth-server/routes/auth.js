const { Router } = require('express');
const { crearUsuario, loginUsuario, renovarToken } = require('../controllers/auth');



const router = Router();


/// Crear un nuevo usuario
router.post('/new', crearUsuario);


/// Login de usuario
router.post('/', loginUsuario)

/// Renew token de usuario
router.get('/renew', renovarToken);



module.exports = router;