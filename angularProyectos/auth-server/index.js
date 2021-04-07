const express = require('express');

///Crear servidor/Aplicacion de express

const app = express();


//GET
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Todo Melaniiiiii'
    });
});


app.use('/api/auth', require('./routes/auth'));



app.listen(4000, () => {
    console.log(`Servidor corriendo en puerto ${4000}`);
});