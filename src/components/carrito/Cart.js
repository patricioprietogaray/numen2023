import React, { useReducer } from 'react';
import { carritoInitialState, carritoReducer } from './actions/carritoReducer';
import Product from './actions/Product';
import CartItem from './actions/CartItem';
import { TYPES } from './actions/Types';

// se puede importar desde carritoReducer la funcion y el estado

const Cart = () => {

    // funcion reductora del carrito
    const cartReducer = () => { }; 

    const cartInitialState = 0;

    // importo desde carritoReducer
    const [state, dispatch] = useReducer(carritoReducer, carritoInitialState);

    // funciones que manejan el carrito
    const addToCart = (id) => {
        // paso esta funcion como props al 
        // componente Product
        // despacho la funcion reductora (carritoReducer, estadoInicial) y le paso
        // el estado con payload, paso el id de los productos
        dispatch({type: TYPES.ADD_TO_CART, payload: id})  //56:17
    };
    const deleteFromCart = () => { };
    const clearCart = () => { };


    return (
        // uso una clase desde bootstrap
        <div className='container-fluid'>
            <h2>Productos a la venta</h2>
            {/* el state llama a carritoReducer, este
            contiene a carritoInitialState como lo defino en 
            const [state, dispatch] = useReducer(carritoReducer, carritoInitialState);
            dentro de este último tengo a productosArra el 
            cual contiene los productos. Por ultimo mapeo al 
            arreglo y llamo al componente Product que se 
            repite tantes veces como elementos tenga el arreglo
            */}

            {/* muestro los productos en filas */}
            <div className='mb-2 row'>
                {state.productosArray.map(
                    // paso como product (props) a cada elemento prod
                    // tengop que pasar como props el producto porque el 
                    // boton de agregar esta dentro de Product
                    prod => <Product key={prod.id} product={prod} addToCart={addToCart} />
                )}
            </div>
            
            
            <h2>Carrito de compras</h2>
            {/* usar otro compornente, mostrará una lista
            y no tarjetas */}
            <div className='mb-2 row'>
                {state.cart.map(
                    // paso como item (props) a cada elemento prod
                    item => <CartItem key={item.id} item={item} />
                )}
            </div>
        </div>
    );
}

export default Cart;
//35:01