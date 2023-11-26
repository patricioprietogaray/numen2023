// import React, { useContext } from 'react';
// import { ProductoContext } from '../providers/productosProviders';

// import { useState } from "react"


// const ItemListaProductos2 = () => {

//     const productos = useContext(ProductoContext);
//     return (
//         <ul>
//              {productos.map(()=>{ 
//                 //  return (
//                      <li>entro a map</li>
//                 //  )
//              }  )   }
//         </ul>
//     );
// }

// export default ItemListaProductos2;







// import React, { useEffect } from 'react';

// paso producto entre llaves porque paso todo el 
// objeto; props es el objeto productos.
// SIN UASAR PROPS
// const ItemListaProductos2 = ({ producto }) => {
    
    // declaro los campos de producto entre llaves y
    // separado por comas. Para acceder al objeto entero
    // y no por partes como en el método 1.
    // const { id, nombre, precio, stock } = producto;

    // cada vez que carga el componente y muestra los productos
    // puedo controlarlo con useEffect
    // 1. hacer una funcion que es la callback ()=>{}
    // 2. pasar un array de dependencias [] (si array vacio -> se ejecuta al inicio o montaje (mounting) del componente)
    // 3. cada vez que se ejecute el componente se ejecutara el comando console.log
    // useEffect(() => {
        // montaje o mounting del componente
        // console.log("carga (montaje) del componente, muestro producto: " + nombre)
    
        // desmontaje o unmounting del componente (con return)
        // return () => {
            // console.log("componente: " + nombre + " desmontado!");
    //     }
    // }, []); // array vacio --> fase de montaje

    // inicializo el estado
    // const [verLista, setVerLista] = useState(false);
    
    // cargo en handlerVerLista lo contrario al estado (si F entronces V - si V entronces F)
    // const handlerVerLista = () => setVerLista(!verLista);

//PARA QUE NO SE EJECUTE AL INICIAR SE CREA UNA BANDERA
// const[paginaIniciada, setPaginaIniciada] = useState(false);
    


// useEffect(() => {
    //.....lo que voy a hacer cuando el componente se actualice
// para que no se muestre el mensaje de una (uso la BANDERA)
// if (paginaIniciada = true) {
    // if (verLista === true) {
        // alert("Lista visible")
    // } else {
        // alert("Lista oculta")
    // }
     
    // setPaginaIniciada(true);
    // paginaIniciada = true; //lo que hace es que la primera carga de la pagina los
// mensajes no salgan (alert) pero si cuando el usuario modifica algo los mensajes
    // se mostrarán porque paginaIniciada esta en true.
//}


            // si esta vacio veo la inicializacion
            // si tiene un estado cada cambio ejecuto los comandos
          //}, [])  // como esta vacio al iniciar se ejecuta los comandos entre llaves.

        // solo se ejecuta cuando cambia de estado
        //    }, [verLista]) //vigilo el cambio de un estado verLista   y cada vez que cambie el estado
    //se ejecuta la funcion (verLista)     ----- FASE ACUTALIZACION DEL CICLO DE VIDA
    



    // return (
    //     <div>
            // {/* declarar const{...} permite que llame
            // a los atributos sin poner props.id ....
            // se ca,noa por id */}
            // {/* renderizaco condicional */}
            // {/* se cargan todos los li (3) y muestra los que
            // cumplan con la condicion (2) */}
            // {(stock > 15) && <li key={id}>Producto: {nombre} - Precio: {precio} - Stock: {stock}</li>}
        // </div>
//     );
// }

// export default ItemListaProductos2;


// const ItemListaProductos2 = ({productos}) => {
    
// }



