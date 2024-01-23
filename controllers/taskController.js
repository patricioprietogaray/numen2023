// el controlador se encarga del procesamiento de los datos para que se muestren
// creo la BD, cada vez que inicio el server los datos que se carguen, 
// se actualicen o borren
// se perderán solo quedarán los datos que se declaran en este arreglo.
// let para poder modificar el arreglo
// let taskDB = [
//     { id: 1, tarea: 'tarea1', hecha: false },
//     { id: 2, tarea: 'tarea2', hecha: false },
//     { id: 3, tarea: 'hacer las compras', hecha: false },
//     { id: 4, tarea: 'estudiar para el examen', hecha: true },
//     { id: 5, tarea: 'trabajar', hecha: false }
// ];


// em reemplazo de taskDB, traigo el esquema
const Task = require('../models/Task');


// funcion para obtener los datos (en este caso se trata de tareas)
// dentro de la funcion el response le asigno un status 200 (server funcionando ok)
// y devuelvo la BD en formato Json al cliente.
// const getTasks = (req, res) => {
//     res.status(200).json({ taskDB })
// }
// En reemplazo con lo anterior (taskDB) ahora obtengo las tareas por otra fuente (internet)
// peticion de los datos arranca en app.js -->  dbConnect();
const getAllTasks = async (req, res) => {

    try {

        const allTasks = await Task.find();  // trae todas las tareas de la coleccion
        res.status(200).json({ tasks: allTasks, msg: 'OK' });
    } catch (error) { 
        res.status(500).json({tasks: [], msg: `Error en el servidor - ${error.message}`})  //500 error del servidor
    }

}



// obtener las tareas por id, virtualiza con Thunder Client
// colllections pepe -> new request (body para json)
const getTaskByID = (req, res) => {
    const idRecibido = req.params.id;
    // PRUEBA: muestro el tipo de dato "numero" 
    //         que se recibe no es un numero

    // if (isNumberObject(idRecibido)) {
        // res.send(`${idRecibido} es un numero`)
    // } else {
        // res.send(`${idRecibido} no es un numero`)
    // }
    //buscar en el array
    const taskSearch = taskDB.find(tarea => tarea.id == idRecibido);
    //res.send(taskSearch);

    // si la busqueda fue exitosa o no
    if (taskSearch) {
        res.status(200).json({ task: taskSearch, msg: 'Ok' })
    } else {
        // ojo con los tipos
        res.status(404).json({ task: null, msg: 'Recurso no encontrado' })
    }
}

// busqueda no texto 
const getTaskByTarea = (req, res) => {
    // recibo el texto por params  .../tarea/:tarea
    const tareaAbuscar = req.params.tarea;

    // paso a minusculas todo el texto que se encuentra en tarea
    // que tenga incluido en su texto el parametro pasado
    const taskTarea = taskDB.filter(item => item.tarea.toLowerCase().includes(tareaAbuscar.toLowerCase()))

    // si la busqueda fue exitosa o no
    if (taskTarea) {   // task es el objeto que se muestra por pantalla 
                       // y taskTarea es el objeto creado con filter
        res.status(200).json({ task: taskTarea, msg: 'Ok' })
    } else {
        // ojo con los tipos
        res.status(404).json({ task: null, msg: 'Recurso no encontrado' })
    }
}

// // crear una tarea desde un objeto local
// const createTask = (req, res) => {
//     // tarea corresponde al atributo de taskDB, 
//     // si se cambia el nombre "tarea" no se agregará al objeto
//     // el body lo voy a agregar a la lista de tareas (objeto)
//     const { tarea } = req.body;
    
//     // creo una constante tarea nueva de como
//     // quedaría el dato en el objeto (todavia no se sube)
//     const tareaNueva = {
//         id: taskDB.length + 1,
//         tarea: tarea,
//         hecha: false
//     }

//     // agrego la tarea al objeto
//     taskDB.push(tareaNueva);

//     // esta parte actualizará la BD taskDB y el dato pusheado quedará guardado en la BD
//     // en caso de ignorar este comando, el sistema quedará en un bucle infinito,
//     // posteriormente lanzara un mensaje de error:
//     // "Connection was forcibly closed by a peer."

//     //status 201 porque agrego algo 201 recurso creado
//     res.status(201).json({taskDB, msg : 'Tarea agregada exitosamente'})

// }

// crear una tarea desde mongodb.com
const createTask = async (req, res) => {
   
    try {
        // crear una nueva tarea a la base de datos
        //const { tarea } = req.body;
        //const task = await task.create(tarea);
        
        //unifico lo anterior
        const task = await task.create(req.body);

        res.status(201).json({task, msg: 'Tarea agregada exitosamente'});
    } catch (error) {
        res.status(500).json({ msg: `Error al cargar la nueva tarea - ${error.message}` });
    }
    
    

    // agrego la tarea al objeto
    taskDB.push(tareaNueva);

    // esta parte actualizará la BD taskDB y el dato pusheado quedará guardado en la BD
    // en caso de ignorar este comando, el sistema quedará en un bucle infinito,
    // posteriormente lanzara un mensaje de error:
    // "Connection was forcibly closed by a peer."

    //status 201 porque agrego algo 201 recurso creado
    res.status(201).json({taskDB, msg : 'Tarea agregada exitosamente'})

}

// actualizar una tarea SOLO EL NOMBRE DE LA TAREA
const updateTask = (req, res) => {
    // recibo el id a modificar -> localhost:3000/task/1 -> id=1
    const id = Number(req.params.id);
    // buscar el registro que coincida con el id ingresado
    let task = taskDB.find(tarea => tarea.id === id);
    
    
    if (task) {
        // si encuentro la tarea actualizo contenido de la tarea
        // cargo la tarea (a modificar) que se encuentra en el body
        const { tarea } = req.body;
        // modifico la variable (declarada con let)
        task = { ...task, tarea: tarea }
        // nuevo arreglo de tareas que no coincidan con el id del parametro
        const newTaskArray = taskDB.filter(task => task.id !== id);
        //defino de nuevo la BD con la newTaskArray + task
        taskDB = [...newTaskArray, task];
        res.status(200).json({ task: task, msg: 'Tarea actualizada exitosamente!' })
    } else {
        res.status(404).json({ task: null, msg: 'Recurso no encontrado' })
    }
}

const deleteTask = (req, res) => {
    // recibo el id a modificar -> localhost:3000/task/1 -> id=1
    // Number()  es igual que parseInt()
    const id = parseInt(req.params.id);
    // buscar el registro que coincida con el id ingresado
    let task = taskDB.find(tarea => tarea.id == id);
    // si encuentro la tarea la borro
    if (task) {
        // reemplazo todos los registros 
        // sin el id (que quiero borrar)
        // al mismo bd
        taskDB = taskDB.filter(task => task.id !== id);
        res.status(200).json({taskDB, msg: 'Tarea eliminada exitosamente!'})
    } else {
        res.status(404).json({ task: null, msg: 'Recurso no encontrado' })
    }
}
//1:43 se ve en el thunder en la previa, pero no se ve reflejado en la bd

// exporto getTasks para que otros modulos tengan acceso (en este caso task.js)
// module.exports = funcion;  -> exporto solo una función
// module.exports = { funciones };  -> exporto mas de una función
module.exports = { getAllTasks, getTaskByID, getTaskByTarea, createTask, updateTask, deleteTask };

//1:54