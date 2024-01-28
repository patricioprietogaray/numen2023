console.log("Hola mundo desde TypeScript");
console.log("buenos dias");
console.log("buenos tardes");
console.log("buenos noches");

let nombre: string = "Rosco";
// let numero: Number = "9";  --> genera error tipo Number no almacena un dato de tipo String.
let variable = "wer";
variable = "mar";


let nombres: string[] = ['pedro','juan'];
let edades: number[] = [1,2,3,4,5];
let siOno: boolean[] = [true, false, false, true];
let cualquiera: any[] = ["pedro", 3, true, undefined];
console.log(cualquiera);

let perro: object = {
    nombre: "rosco",
    edad: 10, 
    callejero: true
}

console.log('Objeto perro: ' + perro);

const suma = (a: number, b: number): string => `El resultado de la suma es ${a + b}`;


console.log(suma(2, 3));

// const suma = (a: number, b: number) => a + b;

interface Perro {
    nombre: string;
    edad: number;
    esCallejero?: boolean;
}

let rosco: Perro = {
    nombre: "Rosco",
    edad: 10,
    // esCallejero: true
}

const getEsCallejero = (perro: Perro): string => {
    if (perro.esCallejero === true) {
        return `es callejero.`
    } else {
        return `no es callejero.`
    }
}

console.log("Interface Perro se llama: " + rosco.nombre + ", tiene " + rosco.edad + " años de edad y " + getEsCallejero(rosco));

const saludar = (): void => console.log("Hola, buenas tardes!");

// const saludar2 = (): void => "Hola, buenas tardes!";

saludar();

class Usuario {
    private nombreUsuario: string;
    private password: string;
    private email: string;

    constructor(nombreUsuario: string, password: string, email: string) {
        this.nombreUsuario = nombreUsuario;
        this.password = password;
        this.email = email;
    }

    getNombreUsuario() {
        return this.nombreUsuario;
    }
}

// tiempo 1:01:00    poner su explicacion