const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');
require('dotenv').config();

///Crear servidor/Aplicacion de express
const app = express();

/// Base de datos
dbConnection();

/// Directorio Publico
app.use(express.static('public'));

///Cors
app.use(cors());

///lectura y parseo del Body
app.use(express.json());


app.use('/api/auth', require('./routes/auth'));



app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});