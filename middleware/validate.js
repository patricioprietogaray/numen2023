// importar express validator que tome el cuerpo y el resultado de las validaciones
const { body, validationResult } = require('express-validator');

//funcion validar para middleware (requerimiento, respuesta y proximo middleware)
const validate = (req, res, next) => {
    //arreglo de errores -> validar la peticion
    const errors = validationResult(req);

    //pregunto si el arreglo de errores esta vacio va al siguiente middleware
    // por ejemplo viene de la llamada al controlador: check('userID').isNumeric().withMessage('El userID es un numero'),
    // si el error cae en isNumeric se cargara a la lista de errores
    if (errors.isEmpty()) {
        next(); //proximo middleware si no tira error y hace bien el ingreso
    } else {
        // en caso de error
        const extractedErrors = [];  //arreglo vacio
            // transforma errors en un arreglo y mapeo la lista de errores. por cada error agrego a extractErrors el error
        errors
            .array()
            .map(error => extractedErrors.push({ ['Ingresó: '+error.value]: error.msg })); 

        //respuesta al cliente  -- 400 bad request
        // puede pasar que envie un error
        // "connot ser headers after they are sent to the client", cuando se manda una peticion y hay un error y se encadena 
        // en el codigo con otro error, como se envia una sola peticion se debe recibir una sola respuesta (y no varias como este caso)
        res
            .status(400)
            .json({ errors: extractedErrors, msg: 'Error de validación' });
    }

   
    
}

//exportar para que el resto la vea - para usarlo en la ruta
module.exports = {validate, body};