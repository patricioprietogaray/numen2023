// aplicacion


// importar el modulo express
// const express = require('express');

// app de mi servidor -> retorno de express ejecutado como una función
// const app = express();

// usar el parseo a Json "express.json()", para que el servidor entineda json 
// middleware son herramientas que se agregan para que comprenda los archivos json
// si no esta el parseo no se va a poder procesar get, post, put, delete
// app.use(express.json());

// importo las tareas (task.js) el route ya tiene una ruta asignada  
//   router.get('/', (req, res) => {

// const taskRouter = require('./routes/task');

// le agrego la ruta principal, como va a empezar esta ruta de tareas 
// para que devuelva (creo un endpoint) y luego le paso el ruteador 
// que necesito para esa tarea....
//Aunque en task.js la ruta sea /; en app se reconfigura la ruta 
//   a / tasks -> http://localhost:3000/tasks y se puede ver 
//el arreglo

//[
//{ "id": 1, "tarea": "tarea1" },
//{ "id": 2, "tarea": "tarea2" }
//]


// inicio de la ruta como primer argumento y luego el ruteador (taskRouter) como segundo
//   osea: en task.js defino el endpoint
//    router.get('/pepe', ---> a taskRouter    ==> pepe es el endpoint (terminacion de la ruta)
//    /tasks/pepe  ---> ahi es donde voy a encontrar el arreglo 

// en la realidad no se necesita especificar más las cosas con '/'  
// en task.js es más que suficiente


// funciona:    http://localhost:3000/tasks
//              http://localhost:3000/tasks/
//              http://localhost:3000/tasks//
// no funciona  http://localhost:3000/tasks///    
// app.use('/tasks', taskRouter);

//exportar app
// app es un módulo que fue asignado desde express() que es otro modulo importado
// en server.js importo app
// module.exports = app;

////

// importar el modulo express
const express = require('express');
// app de mi servidor -> retorno de express ejecutado como una función
const app = express();
// parseo a json para que pueda procesar get, put, delete y post
app.use(express.json());
// importo las funciones que se declaran en task
const taskRouter = require('./routes/task');
// asigno la ruta http://localhost:3000/tasks
app.use('/tasks', taskRouter);
// exporto app par que todos puedan acceder a este archivo (app.js)
module.exports = app;