import React, { useState } from 'react';

const CartItem = ({ item }) => {
    // viene de Cart de la parte del carrito!

    const { nombre, precio, cantidad } = item;
    // const [unidades, setUnidades] = useState(0);
    return (
        <div className='col-md-12 d-flex justify-content-between mb-3'>
            <h6>{nombre}</h6>
            <h6>$ {precio}</h6>
            <h6>{cantidad} u.</h6>
            <h6>$ {cantidad*precio}</h6>
            {/* 1:05 */}
            <button className='btn btn-warning btn-sm'>Eliminar uno</button>
            <button className='btn btn-warning btn-sm'>Eliminar todos</button>
        </div>
    );
}

export default CartItem;
