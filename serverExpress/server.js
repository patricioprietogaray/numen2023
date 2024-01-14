// importo el módulo express y lo guardo en una constante
const express = require('express')
// App de mi servidor --> retorno de express ejecutado como funcion
const app = express()
// Puerto declarado para iniciar la aplicacion
const port = 8080

// base de datos
const productosDB = [
    { id: 1, nombre: 'remera' },
    { id: 2, nombre: 'pantalon' },
    { id: 3, nombre: 'bermuda' },
    { id: 4, nombre: 'chomba' }
]
// get obtengo datos del servidor (ruta /)
app.get('/', (req, res) => {
    // envio la respuesta
    res.send('Hola World!!!')
})

// lista de productos --> como dar una resspuesta con json!
app.get('/productos', (req, res) => {
    // en vez de configurar la base de datos aqui lo llamo como 
    // un objeto de json.
    res.json({ productos: productosDB })
//       productos: [
//            { id: 1, nombre: 'remera' },
//            { id: 2, nombre: 'pantalon' },
//            { id: 3, nombre: 'bermuda' },
//        ]
})
//})

// params
// cuando programo las rutas, estas pueden esperar ciertos datos
// los params son un tipo de dato
// '/productos/:params
app.get('/productos/:id', (req, res) => {
    // objeto de peticion req; objeto de respuesta res
    // se recibe el req y se programa el res (como le voy a enviar la respuesta un solo res)

    // cargo en id el params id que viene del req (que viene de la BD)
    // id recibe un string y no se encuentra el producto (ver en suma)
    // se debe transformar a numero
    const id = Number(req.params.id);
    
    //programa la respuesta ... productos/req
    //res.send(`El id es ${id}`);
    // url http://localhost:8080/productos/8 --> El id es 8
    // url http://localhost:8080/productos/pepe --> El id es pepe

    // producto encontrado -->
    //      busco en la BD el id (req,params,id) que coincida con el id de la BD
    const productoEncontrado = productosDB.find(producto => producto.id === id)

    // no funciona debo utilizar json
    //res.send(`El producto encontrado es ${productoEncontrado.nombre});
    //res.json({producto: productoEncontrado})

    if (productoEncontrado) {
        res.json({producto: productoEncontrado})
    } else {
        // no se encuentra porque es un string
        res.status(404).send('Error 404 - Recurso no Encontrado')
    }



    // el usuario ingresa un id y si lo encuentro respondo con ese producto
    
    
    //const id = productosDB.find(producto => producto.id)
})


// busqueda por nombre - QUERY
app.get('/buscarproducto', (req, res) => {
    //const { id, nombre } = req.query;
    //console.log(req.query);
    const nombres = (req.query.nombre);
    //console.log(nombres);


    //res.json({id, nombre})
    //const productoEncontrado = productosDB.find(producto => producto.nombre === nombres)

    const productoEncontrado = productosDB.find(producto => producto.nombre === nombres)

    if (productoEncontrado) {
        res.json({producto: productoEncontrado})
    } else {
      // no se encuentra porque es un string
        res.status(404).send('Error 404 - Producto no Encontrado')
    }

})



// método de escucha del servidor (inicia el funcionamiento del server)
app.listen(port, () => {
    console.log(`Ejemplo app listening on port ${port}`)
})

// para entender mejor el el problema de params con el error 404 de productos/:id
// vamos a poner otro ejemplo

app.get('/suma/:num1/:num2', (req, res) => {
    //console.log(req.params.num2);
    res.send(`El resultado de sumar ${Number(req.params.num1)} + ${Number(req.params.num2)} es ${Number(req.params.num1) + Number(req.params.num2)}`)
})



//1:53:00