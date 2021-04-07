const { response } = require('express')

const crearUsuario = (req, res = response) => {

    return res.json({
        ok: true,
        msg: 'crear Usuario /new'
    });
};


const loginUsuario = (req, res) => {

    return res.json({
        ok: true,
        msg: 'Login de usuario'
    });
};



const renovarToken = (req, res) => {

    return res.json({
        ok: true,
        msg: 'Renew de sesión'
    });
}

module.exports = {
    crearUsuario,
    loginUsuario,
    renovarToken
}