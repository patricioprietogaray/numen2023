// Middleware: un middleware es "algo" que está en funcionamiento en el medio del controlador y la ruta.
// entre que recibe la peticion de la ruta y el controlador (controller) puede haber un middleware

// creo una estampas a las peticiones para que queden guardadas en el servidor
// ej: necesito un registro que haya un registro de todas las peticiones (fecha hora y de donde)
// y cual fue su respuesta 

//next significa "paso al siguiente"

const logTimeStamp = (req, res, next) => {
    const timeStamp = new Date().toLocaleDateString();
    console.log(`[${timeStamp}] Solicitud entrante: ${req.method} ${res.originalUrl}`)

    next();
}

// para importar desde app
module.exports = logTimeStamp;


// Respuesta en la consola:
// App funcionando en el puerto 3000
// [19/1/2024] Solicitud entrante: GET undefined -> undefined es porque no se genera desde ninguna pagina web
// [19/1/2024] Solicitud entrante: GET undefined
// [19/1/2024] Solicitud entrante: GET undefined
// [19/1/2024] Solicitud entrante: POST undefined
// [19/1/2024] Solicitud entrante: PUT undefined
// [19/1/2024] Solicitud entrante: GET undefined
// [19/1/2024] Solicitud entrante: DELETE undefined
// [19/1/2024] Solicitud entrante: GET undefined
              