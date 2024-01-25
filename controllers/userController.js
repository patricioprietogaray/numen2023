const bcrypt = require('bcrypt');
const User = require('../models/User');




const createUsers = async (req, res) => {
    try {
        //encriptar la contraseña
        const saltRounds = 10; 
        const salt = genSaltSync(saltRounds)// cantidad de rondas de encriptacion + rondas + seguro
        const hashedPassword = bcrypt.hashSync(req.body.password); // genera la contraseña encriptada 
        // ingresa el pasword por req.body.password; genera la encriptacion (hashSync); y guarda el password encriptado en hashedPassword

        // nuevo usuario cargo toda el esquema del usuaior y cargo la password encriptada
        const newUser = { ...req.body, password: hashedPassword };

        const user = await User.create(newUser); //creacion del usuario + password encriptada

        res
            .status(201)
            .json({ user, msg: 'Tarea agregada exitosamente!' });
    } catch(e) {
        res
            .status(500)
            .json({ msg: "Error al cargar la nueva tarea - " + e.message });
    }

}

const getAllUsers = async (req, res) => {

    try {

        const allUsers = await User.find();  // trae todas las tareas de la coleccion
        res.status(200).json({ User: allUsers, msg: 'OK' });
    } catch (error) { 
        //error generico del servidor (500)
        res.status(500).json({User: [], msg: `Error en el servidor - ${error.message}`})  //500 error del servidor
    }

}

module.exports = { createUsers, getAllUsers };