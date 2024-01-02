var testeo = "var testeo declarado en el ambito global";
var conteo = 2;
let saludo = "hola desde el ambito global";

function nuevaFuncion() {
    var dentro = "var dentro declarado en el ambito de una funcion";
    console.log("Llamado de la var dentro: " + dentro);
    let saludo = "hola dentro del ambito de una funcion";
    console.log("dentro de la funcion: " + saludo);
}
console.log("fuera de la funcion (global): " + saludo);

if (conteo > 1) {
    var despedida = "Adios, hasta luego!";
}

if (conteo > 1) {
    let despedidaConLet = "Adios var....";
}

console.log("En el ambito global");
console.log("Llamado a testeo (var): " + testeo);

console.log("No se puede hacer el Llamado a dentro: porque no está definida en el ambito global.");

console.log("Llamo a la funcion nuevaFuncion para que devuelva el valor de dentro:");
nuevaFuncion();
console.log("Leo variable (var) despedida: " + despedida);
console.log("Leo despedidaConLet (let): que no se puede: "); // + despedidaConLet);


// no existe el izamiento para una variable let / const por no estar definida no se muestra.
// console.log("izamiento de una variable: " + constanteIzada);
// const constanteIzada = 2;

// console.log("izamiento de una variable de tipo let: " + variableLetIzada);
// let variableLetIzada = 2;

console.log("izamiento / hoisting de una variable con var: (indefinida porque no tiene un valor asignado): " + variableVarIzada);
var variableVarIzada = 2;

let global = 1;
{
    let global = 2;
    console.log("LET: global en el scope "+global);
}
console.log("LET: global fuera del scope "+global);

// var global2 = 1;
{
    var global2 = 2;
    console.log("VAR: global2 en el scope "+global2);
}
console.log("VAR: global fuera del scope " + global2);

{
    var global2 = 3;
    console.log("VAR: global2 en otro scope "+global2);
}