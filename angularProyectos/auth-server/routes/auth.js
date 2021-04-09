const { Router } = require('express');
const { crearUsuario, loginUsuario, renovarToken } = require('../controllers/auth');
const { check } = require('express-validator');



const router = Router();


/// Crear un nuevo usuario
router.post('/new', crearUsuario);


/// Login de usuario
router.post('/', [
    check('email', 'el Email es obligatorio').isEmail(),
    check('password', 'La contraseña es Obligatoria').isLength({ min: 6 }),
], loginUsuario);

/// Renew token de usuario
router.get('/renew', renovarToken);



module.exports = router;