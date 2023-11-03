import React from 'react';

// recibo desde el componente listaCompras los datos
// y aquí los denomino props
const ItemListaProducto = (props) => {
    return (
        <>
            {/* muestro por cada registro sus datos
            con props (el registro que estoy pasando
            y el atributo tal cual lo asigné y pase en 
            listaCompas) */}
            {/* tener en cuenta la key */}
            <li key={props.itemID}>{props.itemID} - {props.itemNombre} - - ${props.itemPrecio}.- tiene {props.itemStock} unidades en stock.</li>
        </>
    );
}

export default ItemListaProducto;
