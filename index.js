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

// var saludo = "hola"; //si se usa o no el color no 
// cambia por tratarse de una variable global?

// function sumar(a, b) {
    // mientras la variable no se usa tenda un color más
    // oscuro
    // var interna = "interna";
    // saludo = "adios"; //modifica saludo dentro y
    // fuera del scope
//     console.log(interna);
//     console.log("dentro del scope -> saludo: " + saludo);
// }

// function restablecer() {
//     saludo = "Hello!"
    // cambio el valor de la variable global
// }
// console.log("fuera del scope -> saludo: " + saludo);
// sumar(2, 3);
// console.log("fuera del scope -> saludo: " + saludo);
// restablecer();
// console.log("fuera del scope -> saludo restablecer: " + saludo);

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
//     return `Hola ${ nombre } ${ apellido }.`;
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


// var no respeta los scopes es como si no existieran...
// console.log("VAR");
// console.log("llamo a musica antes de ser definida.");
// console.log("Nota como se define despues de este llamado aparece");
// console.log("como undefined cuando debería mostrar error!: " + musica);
// es undefined si la variable se declara más adelante....
// si no se declara tira error.

// var musica = "Pop";
// console.log(musica); //"Pop"
// {
    // var musica = "rock";
    // console.log(musica); //"rock"
// }
// console.log(musica); // "rock"

// console.log("****************************");
// console.log("LET");
// console.log("llamo a musica antes de ser definida."); 
//console.log("Nota let tira error si no está definida con anterioridad!: "+musica1) //error
// let musica1 = "general";
// console.log(musica1); //"general"
// {
//     let musica1 = "dentro del scope";
//     console.log(musica1); //"dentro del scope"
// }
// console.log(musica1); // "general"

// console.log("****************************");
// console.log("CONST");
// console.log("llamo a musica antes de ser definida."); 
//console.log("Nota let tira error si no está definida con anterioridad!: "+musica1) //error
// const musica2 = "constanteGeneral";
// console.log(musica2); //"general"
// {
//     const musica2 = "dentro del scope con una constante";
//     console.log(musica2); //"dentro del scope"
// }
// console.log(musica2); // "general"

//Declaración de Funcion

//las constantes no se modifican
//en este caso la constante funcion no se
//altera, pero si lo hace nombre que es una
//variable....
// let saludo = function (nombre) {
    //funcion anónima que toma el nombre de
    //la variable que lo asigna
//     console.log("Hola", nombre);
// }
//llamar a la funcion anónima por el 
//nombre de la variable/constante
// saludo("Rocio");
// console.log(saludo);
// saludo = "hola";    //constante no se modifica... si fuera variable
                    // se hubiera perdido la funcion anónima
// saludo("Rocio"); //tira error si se hubiera tratado de una variable
                    // que se hubiera modificado

//las funciones anónimas no tienen el mismo
//efecto del izamiento, primero se declaran y 
//luego se llaman

//FUNCIONES DECLARADAS
//SE INVOCA EN CUALQUIER PARTE DEL CODIGO PORQUE TIENEN IZAMIENTO
funcionDeclarada();

function funcionDeclarada() {
    console.log("Hola mundo desde una funcion declarada!");
}

funcionDeclarada();
//FUNCIONES EXPRESADAS
//SE INVOCA SOLO DESPUES DE DECLARADA NO TIENE IZAMIENTO
//ES UNA VARIABLE CON CONSTANTE QUE SE LE ASIGNA UNA FUNCION ANÓNIMA
//SE LA LLAMA POR EL NOMBRE DE LA VARIABLE/CONSTANTE

//funcionExpresada(); //no llama a la funcion porque no se ha declarado
                    //sin izamiento o hoisting

const funcionExpresada = function () {
    console.log("Hola mundo desde una funcion expresada!");
}

funcionExpresada();


//FUNCIONES ARROW O FLECHA
//SE APLICA SOLO EN TIPO DE FUNCION EXPRESADA 
// NO SE APLICA COMO UNA FUNCION DECLARADA

// const funcionFlecha = function() {
     //console.log("....");
// }
// SU EQUIVALENTE PARA UNA FUNCION DE FLECHA
const funcionFlecha = () => {
    console.log("Hola mundo desde una función de flecha / arrow(funcion expresada)")
}

funcionFlecha();

//OTRO EJEMPLO
const numeroAlCuadrado = numero => {
    return numero * numero;
}

console.log("2 al cuadrado es: " + numeroAlCuadrado(2));

//OTRO EJEMPLO CON DOS VALORES
const sumaDeNumeros = (numero1, numero2) => {
    return numero1 + numero2;
}

console.log("2 + 3 es: " + sumaDeNumeros(2,3));


//superficie de un circulo pi*radio**2
// pi por radio al cuadrado

const PI = 3.14159;
const superficieCirculo = (radio) => {
    console.log("Superficie de un circulo de radio "+radio+" es: "+(PI * radio ** 2));
}

superficieCirculo(5);

//sin Return si los datos estan en la misma linea y sin llaves
//Math.PI es más exacto que 3.14159....
const superficieCirculo2 = (radio) => Math.PI * radio ** 2;

console.log(superficieCirculo2(4));



//FUNCION DE VARIAS LINEAS....

//function resta(a, b) {
//     var res = a - b;
//     console.log(res);
//     return 'La resta es: ' + res;
// }

const resta = (a, b) => {
    var res = a - b;
    console.log(res);
    return 'La resta es: ' + res;
};
console.log(resta(8, 4));


//funcion en una sola linea!!!!
const resta2 = (a, b) => 'La resta es: ' + (a-b);

console.log("RETORNO EL RESULTADO EN UNA LINEA: "+resta2(8, 4));


// // ????
//const superficieCirculoRedondeado = (radio) => console.log("sup circulo redondeo: "+Math.round((Math.PI*radio**2)*100/100));
//superficieCirculoRedondeado(5);

let numb = 123.23554;
console.log("numero original: "+numb)
numb = numb.toFixed(2);
console.log("Redondeo en 2 decimales: "+numb);

const supCirculoRedondeo = radio => console.log("Superficie de un circulo con radio "+radio+ ", es: "+(Math.PI * radio ** 2).toFixed(2));
supCirculoRedondeo(5); //78.54

//if-else

const ladoDeLaFuerza = (elegir) => {
    if (elegir === "oscuro") {
        return "Eres un Sith";
    } else if (elegir === "luminoso") {
        return "Eres un Jedi";
    } else {
        return "Eres un personaje irrelevante";
    }
}

console.log(ladoDeLaFuerza("luminoso"));
console.log(ladoDeLaFuerza("ocurito"));
console.log(ladoDeLaFuerza("oscuro"));

// numero aleatorio


// primero se calcula el numero aleatorio (1 a 5)
const numeroAleatorio = Math.ceil(Math.random() * 5);
console.log("numero aleatorio: " + numeroAleatorio);

// segundo creo una constante que corresponda a cada 
// casa según su personalidad
const valienteYAtrevido = 1,
    justicieroYAmable = 2,
    argumentativoYAnalitico = 3,
    astutoEinescrupuloso = 4;

// segun el nro aleatorio retorunara la 
    // escuela de la seleccion.

const sombreroSeleccionador = (test) => {
    switch (test) {
        case valienteYAtrevido:
            return "Griffindor";
        case justicieroYAmable:
            return "Hufflepuff";
        case argumentativoYAnalitico:
            return "Ravenclaw";
        case astutoEinescrupuloso:
            return "Slytherin";
        default:
            return "Azkaban";
    }
}

//llamo a la funcion sombreroSeleccionador y se le pasa
//como argumento el numero aleatorio o random
console.log(sombreroSeleccionador(numeroAleatorio));

//juego de las sillas
const juegoDeLasSillas = (alumnos, sillas) => {
    console.log("COMIENZA EL JUEGO!!!");
    for (let i = sillas; i > 1; i--) {
        console.log("Comienza la ronda!");
        console.log("Se enciende la música");
        console.log("Se apaga la música");
        console.log("Todos se sientan menos uno que sale del juego");
        console.log(`Quedan ${i} sillas`);
        alumnos = alumnos - 1;
        if (alumnos === 2) {
            alumnos = alumnos - 1;
        }
    }
    return alumnos;
}

console.log(juegoDeLasSillas(5, 4));

const llamadaTelefonica = (numero) => {
    //console.log("Ingrese un numero por favor...");
    switch (numero) {
        case 1: alert("Seleccionó el Sector Ventas"); break;
        case 2: alert("Seleccionó el Sector Administrativo"); break;
        case 3: alert("Seleccionó el Sector Compras"); break;
        default: alert("Opción Incorrecta"); break;
    }
};
let num = prompt("Ingrese un número por favor (switch)....");
// let num = 2;
llamadaTelefonica(Number(num));

const llamadaTelefonicaIfElse = (numero) => {
    //console.log("Ingrese un numero por favor...");
    if (numero === 1) {
        alert("Seleccionó el Sector Ventas");
    } else if (numero === 2) {
        alert("Seleccionó el Sector Administrativo");
    } else if (numero === 3) {
        alert("Seleccionó el Sector Compras");
    } else {
        alert("Opción Incorrecta");
    }
};
  
let numIfElse = prompt("Ingrese un número por favor (ifElse)....");
// let num = 2;
llamadaTelefonicaIfElse(Number(numIfElse));


//2:02