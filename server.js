// este es el archivo principal que levanta al servidor

// importar el modulo express
const express = require('express');

//importo app desde app.js
const app = require('./app');

// app de mi servidor -> retorno de express ejecutado como una función
//const app = express();

// configuro el puerto de salida del servidor en 3000
const port = 3000;

//listen: método de escuchar (inicio del funcionamiento del servidor) 
// listen viene de la libreria de express
// cuando llamo a app viene el código desde ./app.js
app.listen(port, () => {
    console.log(`App funcionando en el puerto ${port}`);
})

