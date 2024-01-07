// function dividir(dividendo, divisor) {
//     if (divisor === 0) {
//         console.error("Error: Division por cero no permitida");
//         return undefined;
//     }
//     return dividendo / divisor;
// }

// const resultado = dividir(10, 10);
// //console.log(resultado);
// if (resultado !== undefined) {
//     console.log("El resultado de la division es: ", resultado);
// }


// se crea una funcion con dos parámetros
function dividir(dividendo, divisor) {
    // se retorna una nueva promesa con sus dos parametros por defecto
    return new Promise((resolve, reject) => {
        // se codifica la especificidad de la funcion
        if (divisor === 0) {
            // por el rechazo de la promesa
            reject(new Error("Error: Division por cero no esta permitida"));
        } else {
            const resultado = dividendo / divisor;
            // por la resolucion de la promesa
            resolve(resultado);
        }
    })
}
// const dividendo_ = 10;
// const divisor_ = 2;

// dividir(dividendo_, divisor_)
//     .then((resultado) => { resultado })
//     .catch((error) => { console.error(error.message); });

// Ejemplo de uso
const dividendo_ = 10;
const divisor_ = 0;

// llamo a la funcion y le paso los parametros
dividir(dividendo_, divisor_)
// por la resoulcion de la promesa en este caso el resultado de 
    // "resolve(resultado)" es enviado al resultado de ".then(resultado)"
    // y aqui es donde muestran dichos resultados por pantalla
    .then((resultado) => {
    console.log("El resultado de la división es:", resultado);
    })
    // por la resoulcion de la promesa en este caso el resultado de 
// "reject(new Error("Error: Division por cero no esta permitida"));"
// es enviado al resultado de ".catch(error)"
    // y aqui es donde muestran dichos resultados por pantalla
  .catch((error) => {
    console.error(error.message);
  });