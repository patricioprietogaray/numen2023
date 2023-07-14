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
// var nombre = prompt("¿Cual es tu nombre (First Name)?", '');
// var apellido = prompt("¿Cuál es tu apellido (Last Name)?", '');

// mostrar los datos cargados
// alert(`Hola ${nombre} ${apellido}.`);
//el prompt como el alert pausan 
//la ejecución del código


/////
// LA FUNCION SE PUEDE LLAMAR ANTES QUE SU 
// PROPIA DECLARACION: A ESTO SE LE LLAMA IZAMIENTO
// (hoisting), en otras palabras todas las funciones que 
// se encuentran en el archivo js las sube al principio
// para que se puedan cargar antes de utilizarlas.

// var a = prompt("Bienvenido a la calculadora. Ingrese el primer número...", 0);
// var b = prompt("Ingrese el segundo número", 0);

// alert("El resultado de la suma es: " + suma(a, b));


// function suma(a, b) {
//     // convierto a numero por defecto prompt es string
//     a = Number(a);
//     b = Number(b);
//     return a + b;
// }

// Ambito (scope) de una funcion
// .todo lo que se define dentro de una funcion
// es válido dentro del scope (entre {}) pero es
// inválido fuera de este
// function resta(a, b) {
//     var res = a - b;
//     console.log(res);
//     return 'La resta es: ' + res;
// }

// console.log(resta(8, 3));
// console.log(res);  //error porque se encuentra fuera 
// del ambito y el sistema no lo reconoce como variable
// ya que al salir del scope vscode elimina dichas
// variables
// index.js:75 Uncaught ReferenceError: res is not defined


// variable global es la que se define fuera de cualquier
// scope, fuera de todo, esta variable tiene alcance
// global

var saludo = "hola"; //si se usa o no el color no 
// cambia por tratarse de una variable global?

function sumar(a, b) {
    // mientras la variable no se usa tenda un color más
    // oscuro
    var interna = "interna";
    saludo = "adios"; //modifica saludo dentro y 
    // fuera del scope
    console.log(interna);
    console.log("dentro del scope -> saludo: " + saludo);
}

function restablecer() {
    saludo = "Hello!"
    // cambio el valor de la variable global
}
console.log("fuera del scope -> saludo: " + saludo);
sumar(2, 3);
console.log("fuera del scope -> saludo: " + saludo);
restablecer();
console.log("fuera del scope -> saludo restablecer: " + saludo);

//1:00:00