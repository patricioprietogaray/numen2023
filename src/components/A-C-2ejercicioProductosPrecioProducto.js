import React from 'react';

const AC2ejercicioProductosPrecioProducto = (props) => {
    const precio = String(props.precioProducto.producto.precio);
    return (
        <p>
            $ {precio}
        </p>
    );
}

export default AC2ejercicioProductosPrecioProducto;
