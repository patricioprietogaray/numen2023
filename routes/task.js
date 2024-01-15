// importo express
const express = require('express');

// importo rutas
// este sera el administrador de las rutas
const router = express.Router();

// la ruta slash o ruta raiz seguido con una callback con una respuesta 
// dicha respuesta se le envia un arreglo con dos objetos de tareas en formato json

//   '/pepe' puedo asignar un endpoint especifico que es llamado desde app.js,
//  sin embargo no es necesario porque no se necesita especificar más la ruta.
// cuando asigno '/' no asigno un endpoint especifico y me quedo con el endpoint de app.js
router.get('/', (req, res) => {
    res.json([
        {id:1, tarea: 'tarea1'}, {id:2, tarea: 'tarea2'}
    ])
})

//se exporta para que otro archivo.js (app.js) lo pueda ver sin ()
module.exports = router;