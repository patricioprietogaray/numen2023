import React, { useReducer } from 'react';
import { carritoInitialState, carritoReducer } from './actions/carritoReducer';
// se puede importar desde carritoReducer la funcion y el estado

const Cart = () => {

    // funcion reductora del carrito
    const cartReducer = () => { }; 

    const cartInitialState = 0;

    // importo desde carritoReducer
    const [state, dispatch] = useReducer(carritoReducer, carritoInitialState);

    // funciones que manejan el carrito
    const addToCart = () => { };
    const deleteFromCart = () => { };
    const clearCart = () => { };


    return (
        // uso una clase desde bootstrap
        <div className='container-fluid'>
            <h2>Productos a la venta</h2>
            
            <h2>Carrito de compras</h2>
        </div>
    );
}

export default Cart;
//35:01