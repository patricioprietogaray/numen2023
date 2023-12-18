import React, { useEffect, useState } from 'react';
import Quote from './quote';
import { Axios } from 'axios';



// Usando Axios en reemplazo de Fetch

// instalar axios
// npm install axios


// cita inicial para mostrar la cita
const initialQuote = {
        text: "Cita",
        author: "Autor"
    }


// creo un objeto con todos los estilos
const estilos = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
};

const estiloCita = {
    flexDirection: 'column',
    width: '60%',
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

    const [isLoading, setIsLoading] = useState(false);


    // dentro de quoteUpdate agrego bloque try catch para la captura de errores en la conexion
    // manejo de errores para luego depurarlos

    const quoteUpdate = async () => {
        try {
            // intenta (try)

            // seteo isLoadin en true
            setIsLoading(true);
        
            // INICIO DE LA CONEXION CON LA API CON FETCH
        // const url = "https://api.breakingbadquotes.xyz/v1/quotes";
        
        // defino la respuesta la funcion quoteUpdate debe ser asincrona (async)
        // y el comando fetch precedido de un await
        // const respuestaServerRemoto = await fetch(url);
        // para ver los datos crudos como se reciben desde el server
        // console.log(respuestaServerRemoto);
        // para ver mejor los datos en formato json
        // console.log(respuestaServerRemoto.json());
        /// FIN DE LA CONEXION CON LA API CON FETCH

            // INICIO DE LA CONEXION CON AXIOS

            const url = "https://api.breakingbadquotes.xyz/v1/quotes";

            // axios tiene un atributo de respuesta que se denomina data que devuelve un arreglo y 
            // se utilizará como un objeto, se debe respetar el nombre

            const { data } = await Axios.get(url);  //0:50:39
            
            

                // http tiene metodos:
                //    get(obtener),
                //    post(agregar un dato),
                //    put(actualizar)
                //    y delete (borrar)

            // la API traduce los datos que brinda el servidor en http
            // a JSON que son entendidos por el cliente.


            // FIN DE LA CONEXION CON AXIOS

            
            
            
        // INICIO DE LA MANIPULACION DE LOS DATOS CON FETCH
        // devuelve un arreglo (nueva cita) y es por ello que voy a crear
        // una constante de tipo arreglo para poder mostrar los datos
        // obtenidos de manera correcta
        // desestructuro como arreglo
        // muestro como objeto, porque initialQuote es un objeto
        // const [ newQuote ] = await respuestaServerRemoto.json(); //destructurar arreglo respuesta
        // setQuote({ text: newQuote.quote, author: newQuote.author});
  

            

        // alert(newQuote);
        
        // prueba de datos
        // setQuote({ text: 'lalala', author: 'pepe' })
        
            //FIN DE LA MANIPULACION DE LOS DATOS CON FETCH
            

            // INICIO DE LA MANIPULACION DE DATOS CON AXIOS
            const [newQuote] = data;
            setQuote({ text: newQuote.quote, author: newQuote.author});

            //FIN DE LA MANIPULACION DE LOS DATOS CON AXIOS


        // se deben pasar los datos como props a Quote.js
        } catch (e) {
            // en caso de error
            console.log("Mensaje de error: " + e.message)
        } finally {
            // se ejecuta si o si
            // setear en falso setIsLoading
            setIsLoading(false);
        }
        


    }
    

    // la primera vez que carga los componentes
    // llama a quoteUpdate, y esta funcion se conecta con el servidor
    useEffect(() => {
        quoteUpdate()
    }, []);
 


    return (
        // aplico estolos en todo el div
        <div style={estilos}>
            <img src='data:image/jpeg;base64,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'
                alt='breaking bad' width={400} />
            
            <div style={estiloCita}>
                {/* si no pongo onClick={()=>quoteupdate()} las sitas fluiran una tras otra y nunca se detendrán
                solo con onClick={quoteUpdate} mismo efecto que con ()=> */}
                <button style={{marginLeft:'40%', marginBottom:'5%'}} onClick={quoteUpdate}>Obtener otra cita!</button>
            
                {/* renderizado condicional con isLoading si lee muestra si no no muestra */}
                {isLoading? <h6>Cargando...</h6> : <Quote quote={quote} />}
            </div>
            
           
            
            

            {/* 19:08 */}
            {/* fetch('https://github.com/shevabam/breaking-bad-quotes/blob/master/quotes.js'); */}

    
        </div>
    );
}

export default BreakingBad;

