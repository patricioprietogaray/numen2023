// var dobleIgual = 1 == 1;
// var dobleIgual2 = false == '0';
// var tripleIgual = 1 === 1;
// var tripleIgual2 = 1 === '1';

// false == 'false'   da false
// false == 0 da true
// false == '0' da true
// not: a es distinto a b... a !== b


// console.log("dobleIgual: ", dobleIgual);
// console.log("dobleIgual2: ", dobleIgual2);
// console.log("tripleIgual (estrictamente igual: igual en valor e igual en tipo): ",  tripleIgual);
// console.log("tripleIgual2: ", tripleIgual2);

// var uno = "1";
// console.log("tipo de variable de uno:", typeof uno);

// console.log("uno + 11:", uno + 11);

// uno = Number(uno);
// console.log("tipo de variable de uno:", typeof uno);
// console.log("uno + 11:", uno + 11);


/// ESTRUCTURA CONDICIONAL
/// IF - IF/ELSE

// var panzaLlena = false;
// if (panzaLlena === false) {
    // if(false===false)   ---> true entonces se ejecuta la instrucion
    // dentro del if
    // console.log("Voy a comer porque tengo hambre.");
    // poner una bandera o flag se utiliza para el control
    // en este caso se cambia el valor de panzaLlena a verdadero.
    // panzaLlena = true;
// } else {
    // if(false===true)   ---> false
    // console.log("No tengo hambre y no como");
// }
// 1:21:00
// aca se ejecuta si o si, porque esta fuera del if
// console.log("No voy a comer porque no tengo hambre.");

// var kioscoAbierto = true;
// console.log("kioscoAbierto: ", kioscoAbierto);
// console.log("evaluo kioscoAbierto == true:", kioscoAbierto == true);
// if (kioscoAbierto == true) {
//     console.log("(true)Entro y compro");
// } else {
//     console.log("(false)busco otro kiosco");
// }

// var numero = 11;
// if (numero > 10) {
//     console.log("Mayor que 10");
// } else {
//     console.log("Menor que 10")
// }

/////////////////////////////////////////////////
// si numero es igual a 1
// if (numero === 1) {
    // hacer las instrucciones que se encuentran en este scope
//     console.log("Numero 1");
// } else if (numero === 2) {
    // si no hacer las intrucciones cuando numero sea igual a 2
//     console.log("Numero 2");
// } else if (numero === 3) {
    // si no hacer las intrucciones cuando numero sea igual a 3
//     console.log("Numero 3");
// } else if (numero === 4) {
//     console.log("Numero 4");
// } else if (numero === 5) {
//     console.log("Numero 5");
// } else if (numero === 6) {
//     console.log("Numero 6");
// } else if (numero === 7) {
//     console.log("Numero 7");
// } else if (numero === 8) {
//     console.log("Numero 8");
// } else if (numero === 9) {
//     console.log("Numero 9");
// } else if (numero === 10) {
//     console.log("Numero 10");
// } else {
//     // si las demás no se cumplen hacer las siguientes intrucciones...
//     console.log("Numero x");
// }

//FUNCIONES
// las funciones delegan tarea, es un autómata

//funcion que no recibe ni devuelve datos, solo muestra por consola
// un mensaje, dicho mensaje es siempre el mismo.
function muestraHolaMundo() {
    console.log("Hola Mundo!");
}

muestraHolaMundo(); //llamo a una funcion, se puede llamar muchas veces
//y siempre se ejecutará el mismo código...
                    



//funcion con parámetros de forma directa
function saludar(nombre) { //el valor que se pasa se llama argumento
    console.log('Hola ' + nombre);
}

saludar('pepe'); //llamo a la funcion y le paso un argumento



//funcion con parámetros desde una variable
var nombres='Patricio Sebastián'
function saludar(nombre) { //el valor que se pasa se llama argumento
    console.log('Hola ' + nombre);
}

saludar(nombres); //llamo a la funcion y le paso un argumento

var ingresa = "2";

function resuelve(ingreso) {
    return Number(ingreso) + 1;
}

// var respuesta = resuelve(ingresa);
// console.log("la respuesta es: " + respuesta);
console.log(resuelve(ingresa));

console.log("sumar dos numeros 10 y 15");

function sumar(num1, num2) {
    return num1 + num2;
}

var numero1 = 10;
var numero2 = 15;

var resultado = sumar(numero1, numero2);

console.log("el resultado es: " + resultado);
console.log("resultado directo de la función es: " + sumar(numero1, numero2));
console.log("*****************************************");
console.log("Calculadora");
function calculadoraSuma(n1, n2) {
    return n1 + n2;
}

function calculadoraResta(n1, n2) {
    return n1 - n2;
}

function calculadoraMultiplicar(n1, n2) {
    return n1 * n2;
}

console.log("suma entre 2 y 3: " + calculadoraSuma(2, 3));
console.log("resta entre 8 y 4: " + calculadoraResta(8, 4));

var resultadoOperacionAritmetica = calculadoraMultiplicar(calculadoraSuma(2, 3), calculadoraResta(8, 4));
console.log("multiplicacion entre los resultados anteriores: " + resultadoOperacionAritmetica);
console.log("*****************************************");
console.log("Son iguales con dos funciones distintas");
console.log("primera: solo retorna si 5 === 5");
function sonIgualesRetorno(n1, n2) {
    return n1 === n2;
}
console.log("5 === 5?: " + sonIgualesRetorno(5, 5));
console.log("5 === 4?: " + sonIgualesRetorno(5, 4));

console.log("segunda: solo retorna si 5 === 5 condicion if");
function sonIgualesRetornoIF(n1, n2) {
    if (n1 === n2) {
        // return true;
        return 'Los argumentos son extrictamente iguales';
    } else {
        // return false;
        return 'Los argumentos no son extrictamente iguales'
    }
}
console.log("5 === 5?: " + sonIgualesRetornoIF(5, 5));
console.log("5 === 4?: " + sonIgualesRetornoIF(5, 4));






console.log("*****************************************");
// cebar mate
console.log("Cebar Mate");
// encender la hornalla
var hornallaEncendida = false;
var aguaEnLaPava = false;
var mateConYerba = false;
var paqueteConYerba = false;
var gasEnLaCocina = false;
var llavePasoGas = false;
var canillaAgua = false;
var yerba = "frutosRojos"

// tipo de yerba
// if (yerba === 'frutosRojos') {
//     console.log("Yerba Mate sabor Frutos Rojos");
// } else if (yerba === 'naranja') {
//     console.log("Yerba Mate sabor a Naranja");
// } else if (yerba === 'pomelo') {
//     console.log("Yerba Mate sabor a Pomelo");
// } else {
//     console.log("Yerba Mate sabor tradicional");
// }

// switch case - tipo de yerba
switch (yerba) { //evalua la expresion con switch
    case 'frutosRojos':
        console.log("Yerba Mate sabor Frutos Rojos");
        // sin el brake sige y muestra naranja y luego pomelo, etc
        // por decirlo de alguna manera el case es la entrada y se
        // queda hasta que se termina el ámbito del switch, el 
        // brake le da salida del switch.
        break;
    case 'naranja':
        console.log("Yerba Mate sabor a Naranja");
        break; //romper
    case 'pomelo':
        console.log("Yerba Mate sabor a Pomelo");
        break;
    default:    
        console.log("Yerba Mate sabor tradicional");
        break;
}


//llenar con yerba el mate
if (paqueteConYerba === true) {
    mateConYerba = true;
    console.log("Se llenó con yerba el mate");
} else { 
    console.log("Hay que comprar yerba en el almacén.");
}

//1:56:00

