// construir una base de datos fija de prueba
const db = [
    {id:100, nombre:'marcos'},
    {id:110, nombre:'erich'},
    {id:120, nombre:'lucas'},
    {id:130, nombre:'sofia'},
    {id:140, nombre:'patricio'},
    {id:150, nombre:'mariana'}
]

const buscarPorID = (parametroID) => {
    const resultado = db.find(identificador => identificador.id === parametroID);
    return new Promise((res, rech) => {
        // para simular una sincronia uso setTimeOut
        setTimeout(() => {
            if (!resultado) {
                rech('El registro no existe');
            }
            res(resultado);
        }, 1000)

    })

}

const idAbuscar = 180;

// simular una app de backend
const app = async () => {
    console.log("--INICIO DE LA APLICACION--");

    //UTILIZO LA ESTRUCTURA TRY CATCH
    try {
        // console.log("Devuelve el dato de la BD 'crudo'");
        // const persona = await buscarPorID(idAbuscar);
        // console.log(persona);

        // const persona2 = await buscarPorID(140);
        // console.log(persona2);

        // busco varios id al mismo tiempo
        const personas = Promise.all([
            await buscarPorID(100),
            await buscarPorID(140),
            await buscarPorID(110)
        ])

        const resultadoPersonas = await personas;
        console.log(resultadoPersonas);


    } catch (error) {
        console.log(`Error al buscar el usuario cuya id es ${idAbuscar} - ${error.message}`);
    }

    console.log('--FIN DE LA APLICACION --')
}

app();
// console.log("-FIN-");

buscarPorID(idAbuscar)
    .then(dato => {
        //const [id, nombre] = dato;
        console.log(`Se encontró el registro buscado -> id: ${dato.id} - nombre: ${dato.nombre}`);
    })
    .catch(error =>
        console.log(`La búsqueda no ha sido posible: ${error}`)
    )

    // 1:53    explicarlo y subierlo al index