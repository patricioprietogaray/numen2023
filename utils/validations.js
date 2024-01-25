// valido los datos ingresados a los compos (validate de la carpeta middleware)
const { check } = require('express-validator');

const userID = check("userID")
    .notEmpty()
    .withMessage("El userID es obligatorio")
    .isNumeric()
    .withMessage("El campo userID debe ser numerico")
    .isLength({ min: 3, max: 8 })
    .withMessage("La longitud del userID deberá tener entre 3 y 8 caracteres");

const title = check("title")
    .notEmpty()
    .withMessage("El titulo es obligatorio")
    .isString()
    .withMessage("El campo titulo debe ser una cadena de caracteres")
    .isLength({ min: 5, max: 20 })
    .withMessage("La longitud del titulo deberá tener entre 5 y 20 caracteres");



// debo exportar un objeto porque voy a cheqyuear el id y el titulo -> se debe exportar al routes/tasks.js
module.exports = { userID, title };