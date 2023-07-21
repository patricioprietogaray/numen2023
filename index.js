//clase 12 ARREGLOS

// Cada elemento en el arreglo contiene un valor

//Los elementos de un arreglo se indexan a partir de 0

//La longitud del arreglo 
//es el número total de elementos que contiene

//Los arreglos pueden ser de una dimensión o multiples dimensiones

//Se puede tener arreglos de arreglos (JAGGED ARRAYS)

//indice del arreglo   0   1   2   3    4     5
let arregloEnteros = [54, 20, 19, -2, 101, -35];
console.log(arregloEnteros);

//en este caso son 6 elementos en total (length)
console.log(arregloEnteros.length);

let arregloAleatorio = ['hola', 10, true, [1, 2, 3], { id: 1 }, undefined, null, fun=()=>console.log("hola mundo desde una funcion dentro de un arreglo") ];
console.log(arregloAleatorio);
console.log(arregloAleatorio[7]);

// JavaScrip es un lenguaje ORIENTADO EN PROTOTIPOS 
//y no basado en objetos 
//Cada objeto va a tener su prototipo, unn prototipo
//es como una plantilla, el prototipo es un objeto 
//ideal que esta en la memoria de JS, esta plantilla
// es como un modelo y tiene funciones.

let alumno1 = 'Horacio';
let alumno2 = "Oscar";
let alumno3 = "Hernán";

let alumnos = ['Martin', "Sonia", "Barbara"];

let alumno = [alumno1, alumno2, alumno3, alumnos];

console.log("Alumno 1: " + alumno1);
console.log("Alumno 2: " + alumno2);
console.log("Alumno 3: " + alumno3);
console.log("Arreglo todos los alumnos: " + alumnos);
console.log("Arreglo Alumno 1: " + alumnos[0]);
console.log("Arreglo Alumno 2: " + alumnos[1]);
console.log("Arreglo Alumno 3: " + alumnos[2]);
console.log("automatizado con for");
for (let i = 0; i < alumnos.length; i++) {
    console.log("Muestra el Alumno " + (i + 1) + ": "+alumnos[i]);
}

console.log("array de array: " + alumno);

//Metodo es una funcion que puede variar
//Propiedad es una característica que es algo fijo

console.log("modifico el valor del alumno de la posicion 0");
console
alumno[0] = "Matias";
console.log("array de array: " + alumno);

let personas = [];
console.log("Personas: " + personas + " (sin datos)");
// el arreglo esta vacio
//asignando un dato a una posicion que no exista se 
//agregara dicho elemento al arreglo...
//si existe el elemento se reemplaza por el nuevo valor
personas[0] = "Mari"
console.log("personas: " + personas);
personas[1] = "Juli";
personas[2] = "Ema";
personas[3] = "Juan";
personas[4] = "Pedro";
personas[5] = "Alicia";
console.log("personas: " + personas);
personas[1] = "Danilo";
console.log("personass: " + personas);
console.log("Una posicion que no existe [100]: " + personas[100]);
//rellena con espacios vacios desde el ultimo
//elemento hasta la posicion del nuevo elemento
personas[20] = "José";
console.log("personas: " + personas);

// let nombre = prompt("Ingrese el nombre de un familiar...");
let familiar = ['Familiar1', 'Familiar2'];
console.log("Los familiares son: " + familiar);
// let nombreAlFinal = prompt("Ingrese el nombre de un familiar que se agregará al final del arreglo...");
//familiar.push(nombreAlFinal); //agrega al final
//cuando se desplega la lista de los items muestra
//el arreglo como quedará al final de la ejecucion
//y no a medida que va pasando por el programa
console.log(familiar);

familiar.pop(); //borra el del final
console.log(familiar);

//let nombreAlPrincipio = prompt("Ingrese el nombre de un familiar que se agregará al principio del arreglo...");
//familiar.unshift(nombreAlPrincipio); //agrega al principio
//cuando se desplega la lista de los items muestra
//el arreglo como quedará al final de la ejecucion
//y no a medida que va pasando por el programa
console.log(familiar);

familiar.shift(); //borra el primer elemento
console.log(familiar);

// recorrer un array o arreglo
for (let i = 0; i < 10; i++) {
    console.log(`recorriendo el arreglo en el indice: ${i}.`);
}

for (let i = 9; i >=0; i--) {
    console.log(`recorriendo el arreglo en el indice: ${i}.`);
}


// para recorrer un arreglo comunmente se utiliza el for() donde
// for(inicio; corte del bucle; incremento)
// el inicio es la inicializacion de la variable ej: let i = 0

// el corte del bucle es donde se detendrá el bucle 
//ej: i sea menor al largo del arreglo, ej: i < arreglo.length
// si se lee un lugar inexistente del array dará como resultado undefined

//el incremento o decremento se puede hacer de a uno ej: i++ o i--
//pero también de cierta cantidad fija ej: i=+ 5 o i=- 5

//tabla de multiplicar sin ver el resultado pausa en 1:25:44.
//solo se ve los arreglos que se inicializan
const tablas = [1, 2, 3, 4, 5, 6, 7, 8, 9],
    tablaDelUno = [],
    tablaDelDos = [],
    tablaDelTres = [],
    tablaDelCuatro = [],
    tablaDelCinco = [],
    tablaDelSeis = [],
    tablaDelSiete = [],
    tablaDelOcho = [],
    tablaDelNueve = [];

//las tablas todas juntas
for (i = 0; i < tablas.length; i++) {
    tablaDelUno.push(tablas[i] * 1);
    tablaDelDos.push(tablas[i] * 2);
    tablaDelTres.push(tablas[i] * 3);
    tablaDelCuatro.push(tablas[i] * 4);
    tablaDelCinco.push(tablas[i] * 5);
    tablaDelSeis.push(tablas[i] * 6);
    tablaDelSiete.push(tablas[i] * 7);
    tablaDelOcho.push(tablas[i] * 8);
    tablaDelNueve.push(tablas[i] * 9);
}

//muestra las tablas

const mostrarTablas = (arregloTablaNumero, numeroEnTexto, numero, arregloOrigen) => {
    console.log(` ********* TABLA DEL ${numeroEnTexto} ********** `);
    for (i = 0; i < arregloTablaNumero.length; i++) {
        console.log(`           Donde ${numero} x ${arregloOrigen[i]} = ${arregloTablaNumero[i]}`);
    }
};

mostrarTablas(tablaDelUno, "UNO", 1, tablas);
mostrarTablas(tablaDelDos, "DOS", 2, tablas);
mostrarTablas(tablaDelTres, "TRES", 3, tablas);
mostrarTablas(tablaDelCuatro, "CUATRO", 4, tablas);
mostrarTablas(tablaDelCinco, "CINCO", 5, tablas);
mostrarTablas(tablaDelSeis, "SEIS", 6, tablas);
mostrarTablas(tablaDelSiete, "SIETE", 7, tablas);
mostrarTablas(tablaDelOcho, "OCHO", 8, tablas);
mostrarTablas(tablaDelNueve, "NUEVE", 9, tablas);


//LA FUNCION MOSTRARTABLAS SE REEMPLAZA POR LO SIGUIENTE:
// console.log(" ********* TABLA DEL UNO **********");
// for (i = 0; i < tablaDelUno.length; i++) {
//     console.log(`La tabla del uno donde ${tablas[i]} x 1 = ${tablaDelUno[i]}`);
// }
// console.log(" ********* TABLA DEL DOS **********");
// for (i = 0; i < tablaDelDos.length; i++) {
//     console.log(`La tabla del dos donde ${tablas[i]} x 2 = ${tablaDelDos[i]}`);
// }
// console.log(" ********* TABLA DEL TRES *********");
// for (i = 0; i < tablaDelTres.length; i++) {
//     console.log(`La tabla del tres donde ${tablas[i]} x 3 = ${tablaDelTres[i]}`);
// }
// ..........


/// como en la clase
console.log("");
console.log("COMO EN LA CLASE");

const tablas2 = [1, 2, 3, 4, 5, 6, 7, 8, 9],
    tablaDelUno2 = [],
    tablaDelDos2 = [],
    tablaDelTres2 = [],
    tablaDelCuatro2 = [],
    tablaDelCinco2 = [],
    tablaDelSeis2 = [],
    tablaDelSiete2 = [],
    tablaDelOcho2 = [],
    tablaDelNueve2 = [];

function tablasDeMultiplicar(tablas2) {
    for (let i = 0; i < tablas.length; i++) {
        tablaDelUno2[i]    = 1 * tablas2[i];
        tablaDelDos2[i]    = 2 * tablas2[i];
        tablaDelTres2[i]   = 3 * tablas2[i];
        tablaDelCuatro2[i] = 4 * tablas2[i];
        tablaDelCinco2[i]  = 5 * tablas2[i];
        tablaDelSeis2[i]   = 6 * tablas2[i];
        tablaDelSiete2[i]  = 7 * tablas2[i];
        tablaDelOcho2[i]   = 8 * tablas2[i];
        tablaDelNueve2[i]  = 9 * tablas2[i];
    }

    //retorna los datos en un arreglo que contendrá otros arreglos
    //(JAGGED ARRAYS)
    return [
        tablaDelUno2,
        tablaDelDos2,
        tablaDelTres2,
        tablaDelCuatro2,
        tablaDelCinco2,
        tablaDelSeis2,
        tablaDelSiete2,
        tablaDelOcho2,
        tablaDelNueve2
    ];
}
console.log(tablasDeMultiplicar(tablas2));

//1:34
///OBJETOS
// tienen propiedades (caracteristicas) tipo, color, tamaño
//tienen metodos (acciones) funcionalidades

const miPrimerObjeto = {};
console.log(miPrimerObjeto,toString());
//salida '[object Undefined]' es decir objeto de contenido
//vacío, aunque el prototipo tiene información. De hecho no está
//vacio un 100%. Esta plantilla (prototipo) la define JS y al 
//crear un objeto, un arreglo, una variable, etc toma dicha
//plantilla y la copia al elemento que se ha creado.

//Los objetos son tipos de datos compuestos como los arreglos
let conejo23 = {
    //propiedades en formato clave: valor
    //atributo: valor, separacion entre propiedades: utilizar la coma.
    color: 'blanco',
    nombre: 'rabito',
    patas: 4,
    estaHambriento: true,
    comidas: ['lechuga', 'Zanahoria', 'alimento balanceado'],
    dueño: {
        nombre: 'Juan',
        apellido: 'Perez'
    },
    direccion: {
        calle: 'Av. Falsa',
        numero: 123 //al final no se le pone coma
    },
    //Definir los métodos (funciones que se encuentran
    //dentro de los objetos)
    presentarse: function () {
        //Para acceder al nombre del conejo se puede hacer como 
        //objeto.atributo normalmente desde afuera o dentro del
        //propio objeto, solo desde dentro del objeto se utiliza
        //this. En este caso this.atributo. Con this siempre
        //llama al propio objeto, se llame como se llame.
        console.log(`Hola soy el conejo ${this.nombre} y soy de 
        color ${this.color}. Vivo en la calle ${this['direccion']['calle']} N° ${this.direccion.numero}`);
    //bracket notation o corchete en : this.direccion.calle  ->  this['direccion]['calle]
    },

    //con arrow function no funciona bien
    comprobarHambre: function () {
        if (this.estaHambriento) { //===true 
            console.log("Tengo hambre!");
        } else {
            console.log("No tengo hambre!!!");
        }
    },
    comer: function () {
        console.log(`El conejo ${this.nombre} está comiendo....`);
        this.estaHambriento = false;
    }
}

// console.log(conejo2);
conejo23.presentarse();
conejo23.comprobarHambre();
conejo23.comer();
conejo23.comprobarHambre();

console.log("acceder a la info con notacion del dot o punto (conejo23.nombre): " + conejo23.nombre);
console.log("acceder a la info con notacion del corchete o bracket notation (conejo23['nombre']): " + conejo23['nombre']);
console.log("Los metodos solo se accede con la notacion del punto (conejo23.presentarse()): ");
conejo23.presentarse();

console.log("Cambiar de color al conejo...");
console.log(conejo23.color);
conejo23.color = "rojo";
console.log("Nuevo color del conejo...");
console.log(conejo23.color);

//borrar una propiedad 
console.log("Borrar una propiedad 2 formas (delete conejo23.color) y (conejo23.color = undefined;): ");

console.log("La segunda es la más aceptada");// delete conejo23.color;
conejo23.color = undefined;
console.log(conejo23.color);

//tarjetas de productos

const productos = [
    {
        id: 1,
        name: "Xayah",
        precio: 10
    },
    {
        id: 2,
        name: "Garen",
        precio: 20
    },
    {
        id: 3,
        name: "Twitch",
        precio: 30
    },
    {
        id: 4,
        name: "Yasuo",
        precio: 40
    },
    {
        id: 5,
        name: "Nasus",
        precio: 50
    }
];

//jugando con los espacios dentro de las backsitck se puede acomodar
//el resultado
function crearTarjeta(productos) {
    for (let i = 0; i < productos.length; i++) {
        console.log(`
         ${productos[i].name}
          $${productos[i].precio}
         - 0 +
        AGREGAR`)
    }
}

crearTarjeta(productos);
//2:06:00
