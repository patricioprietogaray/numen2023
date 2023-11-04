import React from 'react';

// paso producto entre llaves porque paso todo el 
// objeto; props es el objeto productos.
// SIN UASAR PROPS
const ItemListaProductos2 = ({ producto }) => {
    
    // declaro los campos de producto entre llaves y 
    // separado por comas. Para acceder al objeto entero
    // y no por partes como en el método 1.
    const { id, nombre, precio, stock } = producto;

    return (
        <div>
            {/* declarar const{...} permite que llame
            a los atributos sin poner props.id ....
            se ca,noa por id */}
            {/* renderizaco condicional */}
            {(stock > 15) && <li key={id}>Producto: {nombre} - Precio: {precio} - Stock: {stock}</li>}
        </div>
    );
}

export default ItemListaProductos2;
