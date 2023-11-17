// import { React, createContext, useState } from 'react';

// export const ProductoContext = createContext();

// const ProductosProviders = (props) => {
   
//         const [productos, setProductos] = useState([
//             {id:1,  nombre:'Galletita', precio:2, stock:4},
//             {id:2,  nombre:'Manteca',   precio:4, stock:5},
//             {id:3,  nombre:'Mermelada', precio:6, stock:2}
//         ])

//      return (
//          <ProductoContext.Provider>
//              <h1>producto providers</h1>
//              {props.children}
//         </ProductoContext.Provider>    
//     );
// }

// export default ProductosProviders;




// const [productos, setProductos] = useState(
//         [
//             { id: 1, nombre: 'Leche', precio: 1500, stock: 20 },
//             { id: 2, nombre: 'Manteca', precio: 2500, stock: 21 },
//             { id: 3, nombre: 'Pan', precio: 800, stock: 10 }
//         ]
//     )

// Se pueden pasar props a los hijos pero es algo tedioso e innecesario si muchos
// hijos del medio no necesitan esos datos y de igual manera los recibo y envio a los 
// hijos sin utilizarlos para eso esta el CONTEXT



// importar react, createContext (crear el contexto), useContext (para usar el contexto)
// import React, { createContext, useContext, useState } from "react";

// crear un contexto y exportarlo



// exportar una funcion que sera el porveedor de este contexto de productos (todo el array)
// se compartirá el useState en todo el árbol de componentes, esto quiere decir que podre
// leer los productos (productos) o insertarlos / modificarlos / eliminarlos (setProductos)



// const productosProvider = ({ props }) => {
//     const [Productos, setProductos] = useState([
//         {
//             id: 1,
//             nombre: 'Leche',
//             precio: 1500,
//             stock: 20,
//         },
//         {
//             id: 2,
//             nombre: 'Manteca',
//             precio: 2500,
//             stock: 21,
//         },
//         {
//             id: 3,
//             nombre: 'Pan',
//             precio: 8000,
//             stock: 10,
//         }
//     ])


    // para hacer publico este providers
    // return (
    // el mismo nombre que exporto como si fuera un componente al estilo llamado de 
    // un componente
    // paso valores con value con el estado (variable, funcion)
    // para los consumidores.
    //<nombreExportar.Provider value={{estado, setEstado}}>
        // <productosProvider.Provider value={{Productos, setProductos}}>

            // {/* estarán los componentes hijos que adquieran esta características... */}
            // {props.children}
            // {/* 1:39 */}

        // </productosProvider.Provider>

    // )

// }

    // se debe exportar la funcion si no, no la van a ver
    // export const Pepe = () => {
        // return useContext(productoContext);
    // }






