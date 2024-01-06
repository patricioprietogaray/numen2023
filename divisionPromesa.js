const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if (divisor === 0) {
            reject(new Error("No se puede dividir por cero..."))
        } else {
            resolve(dividendo/divisor)
        }
    })
}

console.log("Caso feliz o sea hay una división normal (10/2)");
dividir(10, 2)
    .then(resultado => {
        console.log(`resultado: ${resultado}`)
    })
    .catch(error => {
        console.log(`error: ${error}`)
    });
