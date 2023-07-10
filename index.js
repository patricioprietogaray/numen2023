// FUNCIONES

//Definición de una función
// cuando se define la función, también se definen
// los parámetros. EJ.: Son dos parametros
// nombre y apellido. 
//los parámetros son los datos de los argumentos
//que se reciben.
// function saludar(nombre, apellido) {
    //datos locales nombre y apellido
    
    // instrucción (return)
    // return 'Hola ' + nombre + ' ' + apellido + '.';

    //datos de comunicacion es el string que
    //sale de la funcion,
    //ej: "Hola Laura Garcia"
    
    //con las comillas alrevés o ``
    // se denomina cadena templada o string template
    // return `Hola ${ nombre } ${ apellido }.`;
// }
//cuando se llama o se invoca a una funcion
//luego del nombre se pone los paréntesis
//en caso que sea necesario se pasan los 
//ARGUMENTOS a la función saludar.
//los argumentos son los datos que se envian
// console.log(saludar("Laura", "García"));


//otra forma de cargar los datos
//de manera interactiva

// carga de los datos
var nombre = prompt("¿Cual es tu nombre (First Name)?", '');
var apellido = prompt("¿Cuál es tu apellido (Last Name)?", '');

// mostrar los datos cargados
alert(`Hola ${nombre} ${apellido}.`);
//el prompt como el alert pausan 
//la ejecución del código
