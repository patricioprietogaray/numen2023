// Se pueden pasar props a los hijos pero es algo tedioso e innecesario si muchos
// hijos del medio no necesitan esos datos y de igual manera los recibo y envio a los 
// hijos sin utilizarlos para eso esta el CONTEXT

// importar react, createContext (crear el contexto), useContext (para usar el contexto)
import React, { Children } from "react";
import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";

// crear un contexto
const productoContext = createContext();

// exportar una funcion que sera el porveedor de este contexto de productos (todo el array)
// se compartirá el useState en todo el árbol de componentes

export const productosProvider = ({ children }) => {
    const [productos, setProductos] = useState([
        {
            id: 1,
            nombre: 'Leche',
            precio: 1500,
            stock: 20,
        },
        {
            id: 2,
            nombre: 'Manteca',
            precio: 2500,
            stock: 21,
        },
        {
            id: 3,
            nombre: 'Pan',
            precio: 8000,
            stock: 10,
        }
    ])
}

// para hacer publico este providers
return (
    // el mismo nombre que exporto como si fuera un componente al estilo llamado de 
    // un componente
    // paso valores con value con el estado (variable, funcion)
    // para los consumidores.
    //<nombreExportar.Provider value={{estado, setEstado}}>
    <productosProvider.Provider value={{productos, setProductos}}>

        {/* estarán los componentes hijos que adquieran esta características... */}
        {children}

    </productosProvider.Provider>

)