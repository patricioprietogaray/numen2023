const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        console.log("estado de la promesa: "Promise);
        if (divisor === 0) {
            reject(new Error("No se puede dividir por cero..."))
        } else {
            resolve(dividendo/divisor)
        }
    })
}

dividir(10, 2)
    .then(resultado => {
        console.log(`10/2 - resultado: ${resultado}`)
    })
    .catch(error => {
        console.log(`10/2 - error: ${error}`)
    });

dividir(10, 0)
    .then(resultado => {
        console.log(`10/0 - resultado: ${resultado}`)
    })
    .catch(error => {
        console.log(`10/0 - error: ${error}`)
    });

