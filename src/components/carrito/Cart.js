import React, { useReducer } from 'react';
import { carritoInitialState, carritoReducer } from './actions/carritoReducer';
import Product from './actions/Product';
import CartItem from './actions/CartItem';

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
            {/* el state llama a carritoReducer, este
            contiene a carritoInitialState como lo defino en 
            const [state, dispatch] = useReducer(carritoReducer, carritoInitialState);
            dentro de este último tengo a productosArra el 
            cual contiene los productos. Por ultimo mapeo al 
            arreglo y llamo al componente Product que se 
            repite tantes veces como elementos tenga el arreglo
            */}

            {/* muestro los productos en filas */}
            <div className='row'>
                {state.productosArray.map(
                    // paso como product (props) a cada elemento prod
                    prod => <Product key={prod.id} product={prod} />
                )}
            </div>
            
            
            <h2>Carrito de compras</h2>
            {/* usar otro compornente, mostrará una lista
            y no tarjetas */}
            <div className='row'>
                {state.cart.map(
                    // paso como item (props) a cada elemento prod
                    item => <CartItem key={item.id} item={item} />
                )}
            </div>
            {/* no estoy seguro 41:30 */}
        </div>
    );
}

export default Cart;
//35:01