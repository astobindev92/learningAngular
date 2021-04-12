const { response } = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');


const crearUsuario = async(req, res = response) => {

    const { email, nombre, password } = req.body;

    try {

        // Verificar Email
        const usuario = await Usuario.findOne({ email });

        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuarios ya existe en la aplicacion'
            });
        }
        //Crear usuario con el modelo
        const dbUser = new Usuario(req.body);

        // Hash password
        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync(password, salt);

        // Genera JSON WEBtoken
        const token = await generarJWT(dbUser.id, nombre);

        // Crear usuario de BD
        await dbUser.save();

        // Generar respuesta existosa

        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            nombre,
            token
        });

    } catch (error) {

        console.log(error);
        return res.status(500).json({
            ok: true,
            msg: 'Por favor hable con el administrador'
        });
    }

};


const loginUsuario = async(req, res = response) => {


    const { email, password } = req.body;

    try {

        const dbUser = await Usuario.findOne({ email });
        if (!dbUser) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo no existe'
            });
        };

        const validPassword = bcrypt.compareSync(password, dbUser.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'El password no es valido'
            });
        }

        // Genera JSON WEBtoken
        const token = await generarJWT(dbUser.id, dbUser.nombre);

        // Respuesta del servicio
        return res.json({
            oK: true,
            uid: dbUser.id,
            nombre: dbUser.nombre,
            MediaStreamTrackAudioSourceNode
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Haable con el admin'
        })
    }

    return res.json({
        ok: true,
        msg: 'Login de usuario'
    });
};



const renovarToken = async(req, res = response) => {

    const { uid, nombre } = req;

    const token = await generarJWT(uid, nombre);



    return res.json({
        ok: true,
        uid,
        nombre,
        //token
    });
}

module.exports = {
    crearUsuario,
    loginUsuario,
    renovarToken
}