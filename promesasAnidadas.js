const promesa1 = (numero) => {
    return new Promise((res) => {
        setTimeout(() => {
            res(numero);
        }, 0);
    })
}

const promesa2 = (numero) => {
    return new Promise((res) => {
        setTimeout(() => {
            res(numero * 2);
        }, 0)
    })
}
// forzar la sucesion con promesas en el orden que yo deseo
// doy por echo que todo se resuelve bien y sin errores
// llamo y paso 1 a la promesa1
promesa1(1)
    // obtengo la resolucion de la promesa1 y  
    // le paso dicho resultado como parámetro a la promesa2 (que duplica)
    .then(resultado => promesa2(resultado))
    // una vez obtenido el resultado de la promesa2 lo muesatro por pantalla.
    .then(resultado => console.log("El resultado final es de " + resultado));
