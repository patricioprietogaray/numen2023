// importo express
const express = require('express');

// importo rutas
// este sera el administrador de las rutas
const router = express.Router();

// importar desde taskController
const taskController = require('../controllers/taskController');


// la ruta slash o ruta raiz seguido con una callback con una respuesta 
// dicha respuesta se le envia un arreglo con dos objetos de tareas en formato json


// .get --> nos especifica que espera el métido get (obtener) y el callback es la respuesta
// el callback se va al controlador .....
//router.get('/', (req, res) => {
//    res.json([
//        {id:1, tarea: 'tarea1'}, {id:2, tarea: 'tarea2'}
//    ])
//})


//   '/pepe' puedo asignar un endpoint especifico que es llamado desde app.js,
//  sin embargo no es necesario porque no se necesita especificar más la ruta.
// cuando asigno '/' no asigno un endpoint especifico y me quedo con el endpoint de app.js
// '/' se podría especificar algun parámetro ..... 
router.get('/', taskController.getTasks)  // como segundo parametro viene  
                                            // la importacion de controller.funcion

// especifico el id (params) para su busqueda en controller (getTaskById)
router.get('/:id', taskController.getTaskById);


//se exporta para que otro archivo.js (app.js) lo pueda ver sin ()
module.exports = router;