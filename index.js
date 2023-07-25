//clase 13 Callback

//Programacion funcional

//INPUT -> PROCESS -> OUTPUT

// LA PROGRAMACION FUNCIONAL ES:
//  *  FUNCIONES AISLADAS: NO DEPENDE DE NINGUN PARAMETRO DEL SISTEMA PARA FUNCIONAR
//  *  FUNCIONES PURAS: MISMA ENTRADA, MISMA SALIDA
//  *  FUNCIONES CON EFECTOS SECUNDARIOS LIMITADOS: CUALQUIER CAMBIO O MUTACION EN EL ESTADO DEL PROGRAMA FUERA DE LA FUNCION SE CONTROLA CUIDADOSAMENTE
// SE CAMBIAN LOS ESTADOS DEL PROGRAMA. PUEDE HABER ERRORES, PERDIDA DE DATOS. LA FUNCION DEBE HACER SU PARTE DE FORMA LIMPIA. PARA ELLO SE ATOMIZAN LAS 
// TAREAS, SE ESPECIALIZA.

// ¿Que es una funcion callback ?
//     Son funciones que estan programadas para ser ejecutadas
//     luego de que se ejecute otra funcion.
//     Esperar que se ejecute una funcion para que se ejecute una segunda funcion
//     La segunda funcion depende de que se ejecute la primera si o si.
//     Ej: Quiero mostrar el resultado anual de una empresa con respecto al superabit o deficit, 
//     quiero mostrar el ejercicio 2023, ¿lo puedo mostrar al ejercicio anual cuando fantan 6 meses para que 
//         finalice el año ? No. 
//         Entonces programo una funcion para que fin de año muestre los resultados.Estoy programando una callback!
//         Si la funcion callback se ejecuta antes de tiempo arrojaria un undefined. El undefined se muestra porque se ejecuta o se pide 
//         datos a algo que no existe.    

// OTRO TEMA ES LA SINCRONIA... SE VERA MAS ADELANTE

// una funcion callback permite pasar otra funcion como argumento e invocarla a traves de esta 
// cuantas veces se requiera 

// FUNCION SALUDAR USUARIO se pasa como parámetro el nombre del usuario
function saludarUsuario(usuario) {
    console.log('Funcion saludarUsuario que se le pasa el parametro usuario con valor: ' + usuario);
    return `Hola ${usuario}`;
}

//pruebo que la funcion funcione correctamente....
// console.log(saludarUsuario("genaro"));

// FUNCION DESPEDIR USUARIO se pasa como parámetro el nombre del usuario
function despedirUsuario(usuario) {
    console.log('Funcion despedirUsuario que se le pasa el parametro usuario con valor: ' + usuario);
    return `Adios ${usuario}`;
}

// pruebo la funcion despedir
// console.log(despedirUsuario("pepe"));

// function nombreCallback(argumento, funcionCallback) {
//     return funcionCallback(argumento);
// }
// Una funcion callback pasará como argumento "al final" (importantisimo) la funcion que 
// llamara como callback, commo parametro se puede pasar una vairable, un arreglo,, unn objeto, una funcion, etc
// generalmente cuando se pasa como argumento un funcion es porque la queremos utilizar del callback


function crearSaludo(usuario, callback) {  //la funcion callback sin perentesis
    console.log('Funcion crearSaludo que se le pasa el parametro usuario con valor: ' + usuario + ", y el callback: "+callback);
    return callback(usuario);
}


console.log(crearSaludo("Marimer", saludarUsuario));  //la funcion callback sin paerentesis
console.log(crearSaludo("Marimer", despedirUsuario));
// la funcion callback no se le pone () para que se ejecute recien en el return.






// const options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0,
// };

// function success(pos) {
//   const crd = pos.coords;

//   console.log("Tu ubicación actual es:");
//   console.log(`Latitud : ${crd.latitude}`);
//   console.log(`Longitud: ${crd.longitude}`);
//   console.log(`Más o menos ${crd.accuracy} metros.`);
// }

// function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error, options);