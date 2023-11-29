import React from 'react';

const CartItem = () => {

    
    return (
        <div className='col-md-12 d-flex justify-content-between mb-4'>
            <h4>Nombre</h4>
            <h5>Precio</h5>
            <button className='btn btn-warning btn-sm'>Eliminar uno</button>
            <button className='btn btn-warning btn-sm'>Eliminar todos</button>
        </div>
    );
}

export default CartItem;
