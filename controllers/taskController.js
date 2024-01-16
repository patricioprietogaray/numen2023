// el controlador se encarga del procesamiento de los datos para que se muestren

const taskDB = [
    { id: '1', tarea: 'tarea1', hecha: false },
    { id: '2', tarea: 'tarea2', hecha: false },
    { id: '3', tarea: 'hacer las compras', hecha: false },
    { id: '4', tarea: 'estudiar para el examen', hecha: true },
    { id: '5', tarea: 'trabajar', hecha: false }
];

// funcion obtener tareas
const getTasks = (req, res) => {
    res.status(200).json(taskDB)
}

// funcion obtener tareas por id 
// el id viene por la ruta desde task.js
const getTaskById = (req, res) => {
    //ojo con los tipos       navegador 1, bd id:'1' -> ok
    //                        navegador 1, bd id:1,   Number(req.params.id)  => ok
    const id = req.params.id;
    //buscar en el array
    const task = taskDB.find(tarea => tarea.id === id);    // 1:28
    // enconre alguna tarea que viene con ese id?
    if (task) {
        res.status(200).json({ task: task, msg: 'Ok' })
    } else {
        // ojo con los tipos
        res.status(404).json({ task: null, msg: 'Recurso no encontrado' })
    }
}


// puedo exportar una sola funcion
//module.exports = getTasks;

// puedo exportar un objeto con muchas funciones
module.exports = { getTasks, getTaskById };   // se debe importar en task.js