// impoto el modelo mongoose
const mongoose = require('mongoose');
const { type } = require('os');

// clase "esquema" de mongoose (le da forma al modelo)
const Schema = mongoose.Schema;

// taskSchema será una instancia de Schema
// que contendrá las tareas, en otras palabras estoy 
// definiendo la estructura
const taskSchema = new Schema({
    // id: {      // id creado por el usuario
    //     type: String,     // tipo de datos que contendrá será caracter
    //     required: true,   // si se requiere que sea cargado se aclara que sea true (como por defecto es false no hace falta definir required en caso de que su valor sea falso.)
    //     unique: true
    // },

    //  este esquema tiene que coincidir con el esqueda de cloud.mongodb.com
    userID: {    // id del usuario que crea la tarea
        //type: mongoose.Types.ObjectId,   // id creado por mongoDB.com
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false   // tarea completada tipo booleano y por defecto cargará el valor falso
    },
    // primera forma
    // createAt: {
    //     default: new Date().toLocaleDateString(),
    //     type: String      // default -> se generará automaticamente cuando se
    // },                    // cargue una nueva tarea a la coleccion, el createAt es un string,
    // de esta manera no hay error desde mongodb.com

},
    // segunda forma para que el sistema agregue automaticamente createAt y updateAt
    {timestamps: true}
)

// con este clase voy a poder instanciar el modelo de tipo tarea e instanciarla en la base de datos.
// clase que sirve para trabajar con el modelo Task (tarea)
const Task = mongoose.model('Task', taskSchema); // nombre del modelo 'Task' y se cita el esquema (taskSchema)

// El programador crea el esquema de tarea (taskSchema)
// Task es el modelo de tarea 

//exporto el modelo
module.exports = Task;



// CLASE 30 -   23:40  tiene que editar el esquema y poner a createAt como type: String