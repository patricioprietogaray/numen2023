import React, { useEffect, useState } from 'react';
import Quote from './quote';
// import { AsyncLocalStorage } from 'async_hooks';


// cita inicial para mostrar la cita
const initialQuote = {
        text: "Cita",
        author: "Autor"
    }


// creo un objeto con todos los estilos
const estilos = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center'
};


const BreakingBad = () => {

    // creo un estado con el quote (cita) de breaking bad e inicializao con el objeto initialQuote
    const [quote, setQuote] = useState(initialQuote);

    // actualizar las citas de breaking bad, debe ser asincrona
    // se comunica con un servidor remoto? si, pero la comunicacion es lenta!
    // por lo tanto recolecta la info de manera lenta (el ping en internet es lento)
    // y el siguinte comando debe esperar que responda (con await)
    // no se puede ejecutar al instante porque no hay datos que mostrar...



    const quoteUpdate = async () => {
        // INICIO DE LA CONEXION CON LA API
        const url = "https://api.breakingbadquotes.xyz/v1/quotes";
        
        // defino la respuesta la funcion quoteUpdate debe ser asincrona (async)
        // y el comando fetch precedido de un await
        const respuestaServerRemoto = await fetch(url);
        // para ver los datos crudos como se reciben desde el server
        // console.log(respuestaServerRemoto);
        // para ver mejor los datos en formato json
        // console.log(respuestaServerRemoto.json());
        /// FIN DE LA CONEXION CON LA API

        // INICIO DE LA MANIPULACION DE LOS DATOS
        // devuelve un arreglo (nueva cita) y es por ello que voy a crear
        // una constante de tipo arreglo para poder mostrar los datos
        // obtenidos de manera correcta
        // desestructuro como arreglo
        // muestro como objeto, porque initialQuote es un objeto
        const [ newQuote ] = await respuestaServerRemoto.json(); //destructurar arreglo respuesta
        setQuote({ text: newQuote.quote, author: newQuote.author });
        
        // prueba de datos 
        // setQuote({ text: 'lalala', author: 'pepe' })
        
        //FIN DE LA MANIPULACION DE LOS DATOS
        // se deben pasar los datos como props a Quote.js


    }
    

    // la primera vez que carga los componentes
    // llama a quoteUpdate, y esta funcion se conecta con el servidor
    useEffect(() => {
        quoteUpdate()
    }, []);
 


    return (
        // aplico estolos en todo el div
        <div style={estilos}>
            <img src='https://logospng.org/wp-content/uploads/breaking-bad.png'
                alt='breaking bad' width={300} />
            {/* si no pongo onClick={()=>quoteupdate()} las sitas fluiran una tras otra y nunca se detendrán
            solo con onClick={quoteUpdate} mismo efecto que con ()=> */}
            <button onClick={quoteUpdate}>Obtener otra cita!</button>
            <Quote quote={quote} />
            
            

            {/* 19:08 */}
            {/* fetch('https://github.com/shevabam/breaking-bad-quotes/blob/master/quotes.js'); */}

    
        </div>
    );
}

export default BreakingBad;

