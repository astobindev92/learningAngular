const { Router } = require('express');
const { crearUsuario, loginUsuario, renovarToken } = require('../controllers/auth');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');



const router = Router();


/// Crear un nuevo usuario
router.post('/new', [
    check('nombre', 'el nombre es obligatorio'),
    check('email', 'El Email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').isLength({ min: 6 }),
    validarCampos
], crearUsuario);


/// Login de usuario
router.post('/', [
    check('email', 'el Email es obligatorio').isEmail(),
    check('password', 'La contraseña es Obligatoria').isLength({ min: 6 }),
    validarCampos
], loginUsuario);

/// Renew token de usuario
router.get('/renew', validarJWT, renovarToken);



module.exports = router;