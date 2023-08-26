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