// importo express
// const express = require('express');

// importo rutas
// este sera el administrador de las rutas
// const router = express.Router();

// importar desde taskController
// const taskController = require('../controllers/taskController');



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
// router.get('/', taskController)
// router.get('/', taskController.getTasks)  // como segundo parametro viene  
                                            // la importacion de controller.funcion

// especifico el id (params) para su busqueda en controller (getTaskById)
// router.get('/:id', taskController.getTaskById);

// crear una tarea post no pisa a get aun poniendo la misma ruta /
// router.post('/', taskController.createTask);

//actualizar
// router.put('/:id', taskController.updateTask);
//se exporta para que otro archivo.js (app.js) lo pueda ver sin ()
// module.exports = router;




////// pruebas
// importo express
const express = require('express');
//importo validate desde la carpeta middleware - express validator -> para chequear algun atributo (campo)
// tambien se puede importar el validate por un lado y el check (express-validator) por otro)
const { validate, body } = require('../middleware/validate');
// importo rutas, este sera el administrador de las rutas
const router = express.Router();
// importo las funciondes declaradas desde taskController
const taskController = require('../controllers/taskController');
const { route } = require('../app');

//importo las validaciones
const { title, userID } = require('../utils/validations');

// en app.js uso el endpoint /tasks  -> todos las tareas
//Validaciones: se hacen antres de llegar al modulo

router.get('/', taskController.getAllTasks)

// tareas por id
router.get('/:id', taskController.getTaskByID)

// buscar tarea por nombre de tarea
    // localhost:3000/tasks/tarea/hac
// -> { "id": "3", "tarea": "hacer las compras", "hecha": false }
router.get('/tarea/:tarea', taskController.getTaskByTarea)

//agregar una tarea         endpoint, middleware, controlador 
// voy a chequear que el campo userID no este vacio
router.post(
    '/',
    //check('userID').notEmpty().withMessage('El userID es obligatorio').isNumeric().withMessage('El user Id debe ser un numero'),
    // ahora uso body que viene de middleware/validate.js para que primero cumpla con las condiciones de la validacion y luego
    // llame a validate
    // body('userID')
    //     .notEmpty()
    //     .withMessage('El user Id debe ser ogligatorio!')
    //     .isNumeric()
    //     .withMessage('El userID debe ser numerico'),
    // validate,  //funcion de validacion    const validate = (req, res, next) => { .....
    // ........ ahora lo exporte de utils/validatios.js
    userID, title, validate,  //campo de validacion userID y title. funcion que valida (validate) - el return next pasa al controlador
    taskController.createTask
);

//actualizar una tarea por id
router.put('/:id', taskController.updateTask);

//eliminar un registro
router.delete('/:id', taskController.deleteTask);

module.exports = router;

