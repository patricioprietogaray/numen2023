var dobleIgual = 1 == 1;
var dobleIgual2 = false == '0';
var tripleIgual = 1 === 1;
var tripleIgual2 = 1 === '1';

// false == 'false'   da false
// false == 0 da true
// false == '0' da true
// not: a es distinto a b... a !== b


console.log("dobleIgual: ", dobleIgual);
console.log("dobleIgual2: ", dobleIgual2);
console.log("tripleIgual (estrictamente igual: igual en valor e igual en tipo): ",  tripleIgual);
console.log("tripleIgual2: ", tripleIgual2);

var uno = "1";
console.log("tipo de variable de uno:", typeof uno);

console.log("uno + 11:", uno + 11);

uno = Number(uno);
console.log("tipo de variable de uno:", typeof uno);
console.log("uno + 11:", uno + 11);


/// ESTRUCTURA CONDICIONAL
/// IF - IF/ELSE

var panzaLlena = false;
if (panzaLlena === false) {
    // if(false===false)   ---> true entonces se ejecuta la instrucion 
    // dentro del if
    console.log("Voy a comer porque tengo hambre.");
}
// 1:21:00
// aca se ejecuta si o si, porque esta fuera del if
console.log("No voy a comer porque no tengo hambre.");