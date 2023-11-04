import React, { useEffect } from 'react';

// paso producto entre llaves porque paso todo el 
// objeto; props es el objeto productos.
// SIN UASAR PROPS
const ItemListaProductos2 = ({ producto }) => {
    
    // declaro los campos de producto entre llaves y 
    // separado por comas. Para acceder al objeto entero
    // y no por partes como en el método 1.
    const { id, nombre, precio, stock } = producto;

    // cada vez que carga el componente y muestra los productos
    // puedo controlarlo con useEffect
    // 1. hacer una funcion que es la callback ()=>{}
    // 2. pasar un array de dependencias [] (si array vacio -> se ejecuta al inicio o montaje (mounting) del componente)
    // 3. cada vez que se ejecute el componente se ejecutara el comando console.log
    useEffect(() => {
        // montaje o mounting del componente
        console.log("carga (montaje) del componente, muestro producto: " + nombre)
    
        // desmontaje o unmounting del componente (con return)
        return () => {
            console.log("componente: " + nombre + " desmontado!");
        }
    }, []); // array vacio --> montaje


    return (
        <div>
            {/* declarar const{...} permite que llame
            a los atributos sin poner props.id ....
            se ca,noa por id */}
            {/* renderizaco condicional */}
            {/* se cargan todos los li (3) y muestra los que 
            cumplan con la condicion (2) */}
            {(stock > 15) && <li key={id}>Producto: {nombre} - Precio: {precio} - Stock: {stock}</li>}
        </div>
    );
}

export default ItemListaProductos2;
