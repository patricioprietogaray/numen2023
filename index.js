//La programacion en JS es una programación orientada a prototipos
// no es del todo una programacion orientada a objetos pura sino más bien simulada.
// Pensar la programación en base a objetos, estos objetos se manipulan y se pueden 
// cambiar. 
// los frameworks se basan en funciones o en clases
// En JS todos los objetos que se crean tienen la herencia del "objeto prototipo" que 
// es el prototipo donde salen todos los objetos que se crean

// se puede hacer un objeto con llaves
let vacio = {};


// Un objeto que se declara hereda los metodos y atributos
// del objeto prototipo, este mecanismo se denomina herencia

//prototipo (bisabuelo no tiene nada o null)
// prototipo abuelo (con atributo y metodos)
// prototipo padre hereda al bisabuelo y abuelo
// prototipo hijo al que declaramos usa los métodos y atributos de los anteriores.
// cuando se invoca a los metodos y propiedades de un objeto con el punto, 
// se accede a todos los métodos y atributos
// de todos los objetos de las generaciones anteriores.

//si trabajo con un objeto y tengo que llamar a un atributo o 
// método del mismo objeto uso "this"
// cuando se invoca desde la consola this muestra 
// la propiedad window

// Herencia
// Cada objeto que declare hereda de la plantilla (abuelo) sus 
// atributos y métodos
// al declarar: let vacio = {}; el objeto no está vacío.
// desde la consola tiene metodos y propiedades, de donde salieron?
// vacio es herencia de object.prototype y object.prototype tiene 
// sus métodosy atributos (o propiedades) asignados, por lo tanto
// vacio es hijo del prototype.

// alert("Alert es un método de window");

// Uso de this
console.log("en (el navegador) el objeto window : "+this);
// hace referencia al objeto window

//this autoreferenciando a la misma funcion

let perro = {
    nombre: "Malvina",
    
    // las funciones flecha no posee enlaces propios 
    // como this y super y es por ello que no se debe usar
    // saludo: () => console.log("Hola, soy "+this.nombre),
    // en vez de eso se debe utilizar de la siguiente manera:
    saludo: function() {
        console.log("Hola, soy "+perro.nombre);
        //this.nombre se accede a nombre dentro del mismo objeto
        //perro.nombre se accede de la misma manera, el problema
        // es que un programador le cambie el nombre al objeto
        // y por consiguiente perro.nombre no será funcional.
    }
    
}

perro.saludo();
// console.log(perro.nombre);
// perro.saludo();

// clase 14 tiempo: 27min
// https://vimeo.com/849513781/4a5a98852f

// agregar propiedades al objeto window
// 32:21

// Agregar una propiedad (nombre) al objeto window
// this como global
this.nombre = "Agrego una propiedad o atributo a window";


//llamo una propiedad de un objeto dentro de otro objeto
const objetoPrimario={
    nombre: "Nombre del objeto primario",
    imprimir: function() {
        console.log("Imprimo desde el objeto primario: "+this.nombre);
    }
}
const objetoSecundario={
    nombre: "Nombre del objeto secundario",
    //llamo a la funcion imprimir dentro del objeto primario
    //paso datos (nombre) desde el objeto secundario!
    //al utilizar this hago referencia al objeto actual (secundario)
    imprimir: objetoPrimario.imprimir,

}


// llamo a la propiedad del objeto de manera directa
objetoPrimario.imprimir();
objetoSecundario.imprimir();

// 36:54
//Funcion constructora
// define propiedades y metodos 
// se aplica en funciones y clases (antes solo en funciones 
// no exitían las clases)
// luego se instancia con new

// antes se creaban objetos instanciados con un protoObjeto ej:

// crear el proto objeto
let protoObjetoConejo = {
    hablar(linea) {
        console.log(`El conejo dice ${linea}`);
    }
}

// crear un objeto desde el proto objeto
let conejitoFeliz = Object.create(protoObjetoConejo);
// console.log(conejitoFeliz);
conejitoFeliz.hablar("Hola, estoy un conejo que está muy feliz!");

// utilizar this
// ojo que tengo que declaralo aparte linea es distinto a this.linea
let protoObjetoChanchito = {
    hablar(linea) {
        // this nombre y this.linea se deben declara antes de llamar
        // a esta funcion
        console.log(`${linea}: Hola, soy un ${this.nombre} y te digo: ${this.linea}`);
    }
}

let chanchitoFeliz = Object.create(protoObjetoChanchito);
let chanchitoTriste = Object.create(protoObjetoChanchito);
chanchitoFeliz.linea="Estoy muy feliz";
chanchitoFeliz.nombre="Chanchito Feliz";
chanchitoTriste.linea="Estoy muy triste";
chanchitoTriste.nombre="Chanchito Triste";

// paso info como parametro a linea y 
// devuelve undefined con console.log
console.log(chanchitoFeliz.hablar("felicidad"));
console.log(chanchitoTriste.hablar("tristeza"));

chanchitoFeliz.hablar("felicidad")
chanchitoFeliz.hablar("tristeza")



//Funcion constructora
// lo que con los objetos se declaraba por fuera (atributos)
// con la funcion se declaran adentro
// pasar parametros al constructor
function protoFuncionJedi(arma, poder) {
    //atributos
    this.arma = arma,
    this.poder = poder

    //métodos
    this.hablar = function() {
        console.log("Que la fuerza te acompañe");
    }

}

// new -> genero una nueva instancia de la funcion constructora
//instancia de la funcion constructora
// una instancia es una copia de la funcion constructora
// que se declara y se utiliza por medio de una variable (por ej)
let obiwan = new protoFuncionJedi("Sable de luz", "La fuerza");

console.log(obiwan);


console.log(obiwan.arma);
console.log(obiwan.poder);
obiwan.hablar();

//Declarar un método nuevo desde afuera de la funcion constructora
// solo para la instancia obiwan
// obiwan.viajar();
obiwan.viajar = function() {
    console.log("Estoy viajando por la Republica");
}
obiwan.viajar();

// crear una instancia para todos los Jedis una vez creada la 
// funcion constructora
// desde el prototipo

// obiwan.susurrar(); se debe declara primero

//funcion tradicional
protoFuncionJedi.prototype.susurrar = function() {
    console.log("Usa la fuerza Luke");
}

// function arrow
// protoFuncionJedi.prototype.susurrar = () => console.log("Usa la fuerza Luke");


obiwan.susurrar();

// Clases
// las clases son una mejora de sintaxis de las funciones constructoras
// mas o menos hacen lo mismo

//LAS CLASES SIEMPRE SE DECLARAN CON LA PRIMERA LETRA DE LA PRIMER
//PALABRA EN MAYUSCULAS PascalCase

class ProtoClaseJedi {
    constructor(arma, poder) {
    //atributos
    this.arma = arma,
    this.poder = poder
    }

    //métodos
    // sin this
    hablar = function() {
        console.log("Que la fuerza te acompañe");
    }

}

let yoda = new ProtoClaseJedi("Sable luz verde", "La fuerza");
console.log("Yoda: "+yoda.arma);
console.log("Yoda: "+yoda.poder);
yoda.hablar();
// yoda.susurrar();    //no existe

//otro ejemplo
class Animal {   //PascalCase
    // funcion constructora que se puede o no pasar parámetros
    constructor(nombre, habitat) {
        // Atributos
        // this.atributo = valor pasado por el constructor
        this.nombre = nombre;
        this.habitat = habitat;
    }
    
    //metodos
    presentacion(){
        return `Soy el animal ${this.nombre} y vivo en ${this.habitat}.`;
    }
}

let leon = new Animal('Leon', 'Sabana');
console.log(leon.presentacion());

let delfin = new Animal('Delfín', 'Mar');
console.log(delfin.presentacion());

/* 
Antes                       Ahora
Funcion constructora        Clases
Se declara con parametros   Se declara con constructor(parametros)
Metodos declarados con      Metodos declarados como funciones()
    prototype por fuera     adentro de la clase
*/


// HERENCIA DE UNA CLASE
// LA CLASE Mamifero es una herencia de Animal
// Los atributos y metodos estan heredados

//class hijo extends padre
class Mamifero extends Animal {
    //agrego atributos heredados + atributo particular
    // de la clase hijo
    constructor(nombre, habitat, tienePelo){
        // traigo los parametros de la clase padre
        super(nombre, habitat);

        //atributos particulares de esta nueva clase
        this.tienePelo = tienePelo;
    }
    // puedo pisar presentacion y mostrará lo pisado
    // presentacion(){
    //     return `Soy el animal ${this.nombre}, vivo en ${this.habitat} y ¿tengo pelo? ${this.tienePelo}.`;
    // }

    //creo un nuevo método con un ternario
    describirMamifero() {
        // llamo a presentacion con this y agrego la info
        // del pelo con un if ternario

        //llamo al metodo presentacion no olvidar los ()
        // adiciono un ternario
        //return `${this.presentacion()} ${this.tienePelo?'Tengo pelo.':'No tengo pelo.'}`;
        return this.presentacion() + this.tienePelo?'Tengo pelo.':'No tengo pelo.';
    }
}

let mono = new Mamifero('Chimpancé', 'Selva', true);
console.log(mono);

let elefante = new Mamifero('Elefante', 'Sabana', false);
console.log(elefante.describirMamifero());

/*Atención:
no puede haber mas de un constructor por clase
no pueden haber mas de un metodo que se denomine de igual forma
puedo reescribir un metodo solo desde una clase hija/nieta
con el metodo super llamo al constructor de la clase padre
hay clases que son abstractas, es decir que 
no se instanciarán, ej Math.pi.
Las clases que construya el programador tiene la finalidad de 
instanciarlas, si no para que se hace?
*/

class Planeta {
    constructor(nombrePlaneta, ubicacionSistemaSolar, superficiePlaneta) {
        this.nombrePlaneta = nombrePlaneta;
        this.ubicacionSistemaSolar = ubicacionSistemaSolar;
        this.superficiePlaneta = superficiePlaneta;
    }
    presentacionPlaneta(){
        return `El planeta ${this.nombrePlaneta} tiene una superficie de ${this.superficiePlaneta} kilómetros cuadrados y es el ${this.ubicacionSistemaSolar} planeta desde el sol en el sistema solar!`;
    }
}

class Continente extends Planeta {
    // en el constructor se definen todas los atributos
    // sean de la clase heredada y propia
    constructor(nombrePlaneta, nombreContinente, superficieContinente) {
        
        //SUPER NO SE DECLARA COMO UN CONSTRUCTOR
        // super(nombrePlaneta){
        //     this.nombrePlaneta = nombrePlaneta;   
        // }
        //SUPER SE DECLARA 
        //COMO LLAMANDO AL CONSTRUCTOR PADRE
        super(nombrePlaneta);
        
        //se declara los atributos propios
        this.nombreContinente = nombreContinente;
        this.superficieContinente =  superficieContinente;
    }
    presentacionContinente(){
        return `En el planeta ${this.nombrePlaneta} se encuentra el continente ${this.nombreContinente} con una superficie de ${this.superficieContinente} km cuadrados`; 
    }
}

let mercurio = new Planeta('Mercurio', 'primer', 2345);
console.log(mercurio.presentacionPlaneta());
let tierra = new Planeta("Tierra", "tercer", 48000);
console.log(tierra.presentacionPlaneta());
let america = new Continente("Tierra","Americano", 15000);
console.log(america.presentacionContinente());
let europa = new Continente("Tierra", "Europeo", 10000);
console.log(europa.presentacionContinente());

//1:36
//https://vimeo.com/849513781/4a5a98852f

