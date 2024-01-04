// callback debe estar definida al momento de ser llamada
// callback es una funcion
function Mensaje(callback) {
    console.log("Mensaje antes de la llamada a la callback");
    
    // acá le digo que callback es una funcion...
    callback();
}

// funcion callback
function Saludo() {
    console.log("Funcion saludo que la llama el callback");
}

Mensaje(Saludo);


// funcion principal
function Sumar(num1, num2, callback) {
    let resultadoSumar = num1 + num2;

    // la logica de la callback es que se llame
    // despues de la operacion porque envia el
    // resultado. Se llama callback internamente
    callback(resultadoSumar);
}

// funcion secundaria (callback)
function Resultado(resultado) {
    console.log("El resultado de la suma es: " + resultado);
}

// llammo a la funcion prinicipal y 
// esta a su vez llama a la callback (Resultado)
Sumar(3, 3, Resultado);

function solicitudAPI(url, callback) {
    // espera x tiempo para ejecutar una instruccion
    
    // setTimeOut
    // sale a la banquina(web api) y vuelve por el 
    // callback qeue una vez pasado el tiempo y luego al stack
    setTimeout(() => {
    
        const respuesta = "Contenido de la respuesta de la API (simulación)";
        console.log("Conexion a " + url);
        // llamo al callback: parametro error y respuesta
        // sin error (null) y respuesta
        // con error (1) y respuesta
        callback(1, respuesta);
        // seteo el tiempo en milisegundos
        // si quiero 30 segundos => 1000 * 30
        // asi se entiend mejor que 30000
    }, 1000);
}


// parametros error de comunicacion y respuesta
function manejarRespuesta(error, respuesta) {
    if (error) {
        console.log(new Error("Error al hacer la peticion a la API - " + error));
        // console.log("hubo un error en la comunicación: " + error);
    } else {
        console.log("Respuesta: " + respuesta);
    }
}

solicitudAPI("https://misitio.com.ar", manejarRespuesta);

// como se ejecuta?