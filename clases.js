class Medicamentos {
    // cada clase tiene un constructor que construirá los objetos derivados en esa clase.
    // metodo constructor: es la accion que construye el objeto
    constructor(nombre, laboratorio, requiereReceta, precio, stock) { //metodo constructor
        this.nombre = nombre; //propiedades o atributos
        this.laboratorio = laboratorio;
        this.requiereReceta = requiereReceta;
        this.precio = precio;
        this.stock = stock;
    }

    // metodos propio
    presentacion() {
        return `Este medicamento ${this.nombre} tiene un valor de $${this.precio}.`;
    }

    receta() {
        if (this.requiereReceta) {
            return `Este medicamento requiere receta.`;
        } else {
            return `Este medicamento no requiere receta.`;
        }
    }
}

// instancio un nuevo objeto a partir de la clase, con new llamo al constructor
const medicamento1 = new Medicamentos("Paracetamol", "Bago", false, 500.00, 20);
console.log(medicamento1.presentacion()); //llamo a una funcion
console.log(medicamento1.requiereReceta);  //llamo a un atributo, responde false
console.log(medicamento1.receta());  //llamo a una funcion responde Este medicamento ....

const medicamento2 = new Medicamentos("herticol", "xxx", true, 23300, 20);
console.log(medicamento2.presentacion());
console.log(medicamento2.receta()); //llamo al metodo receta
