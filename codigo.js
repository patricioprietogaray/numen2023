// declarar una variable
var miPrimeraVariable= 'Pepe Argento es lo más';
console.log(miPrimeraVariable);

var cadena = 'Patricio Prieto Garay';
console.log(cadena);

var cadena2 = new String("Hola mundo!");
console.log(cadena2);

console.log("tamaño de cadena es de " + cadena.length + " caracteres. (concatenado por + y da como resultado una cadena de caracteres)");
console.log("tamaño de cadena2 es de " + cadena2.length + " caracteres.");

console.log("tamaño de cadena es de",cadena.length,"caracteres. (concatenado por , y no se dejan espacios y da como resultado una cadena de caracteres + el valor de color diferente si no es cadena de caracteres)");

console.log('¿cuantos caracteres tengo?:'.length);

var nombre = "Patricio";
var apellido = "Prieto Garay";
console.log("concatenado con +: Bienvenido " + nombre + " " + apellido);
console.log("concatenado con ,: Bienvenido", nombre, apellido);

console.log('Números: ');
// declaro varias variables a la vez
var numero = 2023,
    numeroNegativo = -32,
    numeroConDecimales = 3.14159;
console.log("numero:", numero);
console.log("numero negativo:", numeroNegativo);
console.log("decimal:", numeroConDecimales);
var numeroComoString = new Number("un string");
console.log("un numero como string (sin convertir):", numeroComoString);
console.log("un numero como string (convertido):", numeroComoString.toString());
var unNumero = 10.34; 
console.log("un numero como string (sin convertir):", unNumero);
console.log("un numero como string (convertido):", unNumero.toString());


console.log("aritmética");
console.log('1 + 1:',1 + 1);
console.log('1 - 10:',1 - 10);
console.log('10 / 2:',10 /2);
console.log('10 / 3:',10 / 3);
console.log('10 % 3:',10 % 3);
console.log('10 * 5:', 10 * 5);
console.log("lógica");
console.log('10 > 5:',10 > 5);
console.log('10 == 5:',10 == 15);
console.log('10 <= 5:', 10 <= 5);
console.log('tabla de verdad de lógica de boole');
console.log('true && true:', true && true);
console.log('true && false:', true && false);
console.log('false && true:', false && true);
console.log('false && false:',false && false);