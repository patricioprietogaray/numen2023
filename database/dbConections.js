// incluyo el módulo
const mongoose = require('mongoose');

// asi como esta incluyo el modulo dotenv NO SE GUARDA EN UNA VARIABLE  
require('dotenv').config();

// funcion para la conexion de la BD de mongoose asincrona
const dbConnect = async () => {
    try {
        // 
        await mongoose.connect(process.env.MONGO_URL);
        // si es exitosa la conexion 
        console.log('Conexión a la Base de Datos fue exitosa!');
    } catch (error) {
        Console.log('Error al conectarse a la base de datos: ' + error.message);
    }
}

module.exports = dbConnect;