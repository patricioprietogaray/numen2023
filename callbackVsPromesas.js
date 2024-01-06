// ejemplo con callback
console.log("Callback");

function recuperarDinero(dinero, callback) {
    // si dinero es de tipo numero
    if (typeof dinero !== 'number') {
        // llamo a la funcion y le paso 
        // como primer parámetro nulo a dinero
        // y paso el error en formato texto (al segundo parámetro).
        // Error() es una clase que se instancia con new para crear
        // un nuevo objeto.
        callback(
            null, new Error(
                "Error de tipo: Dinero debe ser un número!"
            )
        )
    } else {
        // en caso de que dinero sea un numero paso
        // a la callback el dinero.
        // la callback tiene dos parámetros pero al
        // no pasar el segundo parametro se toma como null
        // callback(dinero); es igual a callback(dinero, null); 
        callback(dinero);
    }
}

//funcion calback
function cb(dinero, error) {
    // if (
        // dinero !== null &&   // si dinero es diferente a null
        // dinero !== undefined && // si dinero no esta difinido
        // dinero !== '' //si dinero es distinto a una cadena vacía
        // dinero !== false   //si dinero no es false
    // )    es igual a (dinero)

    if (dinero) {
        console.log(`Se recuperaron ${dinero} pesos`);
    } else {
        // en dinero se envió un contenido nulo (null)
        // hubo un error
        console.log("Hubo un error: " + error);

    }
}

console.log("Llamo la funcion recuperarDinero que llama a un Callback...");
recuperarDinero(1200, cb);
// recuperarDinero(null, cb);
// recuperarDinero(false, cb);

// mismo ejemplo con promesas

console.log("Promesa....");

function recuperarDineroPromise(dinero) {
    //clase promesa
    // instanciar la promesa
    //                      2 callback (primero resuleve luego rechaza)
    return new Promise((resuelve, rechaza) => {
       
        // si dinero es de tipo numero
        if (typeof dinero !== 'number') {
            //llamo al metodo rechaza y se le pasa la instancia del objeto de error
            rechaza(new Error('Error de tipo: Dinero debe ser un número!'));
        } else {
            // a resuelve se le pasa el parámetro dinero
            resuelve(dinero);
        }
    })
}

//llamar a la funcion recuperarDineroPromise paso argumento del dinero
// en caso de exito .then   traigo el parametro dinero del resuelve
console.log("Llamo la funcion recuperarDineroPromise que llama a una Promesa...");
recuperarDineroPromise(2000)
    .then(dinero => console.log(`Se recuperaron ${dinero} pesos`))
    // de error .catch
    .catch (error => console.log(error))
    //finaly en caso de ejecución obligada no importa si then o catch
    // se muestra primero el finally, luego then/catch
    // OJO DE ESTA FORMA SE EJECUTA ANTES DEL THEN / CATCH
// .finally(console.log("Fin de la promesa."))  
// PARA EJECUTARLO LUEGO DEL THEN/CATCH: ()=>....
    .finally(()=>console.log("Fin de la promesa."))

    // 1:25:00

// for (let i = 0; i < 10 && i !== 3; i++){
//     console.log("hola");
// }

// for (i = 0; i < 10 && i !==3; i++){
//     console.log("i !== 3, cuando i vale " + i + ":" + (i !== 3));
// }
// console.log("afuera del bucle");

const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if (divisor === 0) {
            reject(new Error("No se puede dividir por cero..."))
        } else {
            resolve(dividendo/divisor)
        }
    })
}



