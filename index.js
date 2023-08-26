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
        console.log("Hola, soy "+this.nombre);
    }
    
}

perro.saludo();
console.log(perro.nombre);
perro.saludo();

// clase 14 tiempo: 27min
// https://vimeo.com/849513781/4a5a98852f