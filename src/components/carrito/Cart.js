// import React, { useReducer } from 'react';
// import { carritoInitialState, carritoReducer } from './actions/carritoReducer';
// import Products from './actions/products';
// import CartItem from './actions/cartItem';
// import { TYPES } from './actions/types';

// const Cart = () => {

    // estado y funcion reductora
    // const [state, dispatch] = useReducer(carritoReducer, carritoInitialState);

    // funciones que agregará o modificara el carrito cuando presiona el boton
    // const addToCart = (id) => {
        //    console.log("Cart.js funcion addToCart -> id: " + id);
        // despachar - carga extra (payload) el dispatch va a tener la accion (type:)
        // y le vamos a pasar un dato que no es pasado, con el payload (carga extra)
        // paso el payload a la funcion reductora (carritoReducer)
        // dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    // };
    // const deleteFromCart = () => { };
    // const clearCart = () => { };

    // return (
    //     <div className='container-fluid'>
    //         <h2>Productos</h2>
    //         <div className='row'>
    //             {state.products.map(prod =>
    //                 (<Products
    //                     key={prod.id}
    //                     data={prod}
    //                     addToCart={addToCart}
    //                 />))}
    //         </div>
    //         <h2>Carrito</h2>
    //         <div className='row'>
                // {/* {state.Cart.map((datos, indice) => (<CartItem key={indice} data={datos} />))} */}
                // {/* {state.Cart.map((item, index) => (<CartItem key={index} data={item} />))} */}
            // </div>
        // </div>
    // );
// }

// export default Cart;


// import React, { useReducer } from 'react';
// import { carritoInitialState, carritoReducer } from './actions/carritoReducer';
// import { TYPES } from './actions/types';
// import CartItem from './actions/cartItem';


// const Cart = () => {

//     const [state, dispatch] = useReducer(carritoReducer, carritoInitialState);

//     const clearCart = () => {
//         dispatch({ type: TYPES.CLEAR_CART });
//     }

//     return (
//         <div>
//             <h1>Carrito de Compras con React</h1>
//             <h2>Productos</h2>
//             {state.productos.map((registro) => (<CartItem key={registro.id} data={registro} />))}
//             <h2>Carrito</h2>
//             {state.carrito.map((compra) => (<p>{compra.id}</p>))}
//             <button onClick={()=>clearCart}>Limpiar Carrito</button>
//         </div>
//     );
// }

// export default Cart;

import React, { useReducer } from 'react';
import { cartInitialState, cartReducer } from './actions/cartReducer';
import Products from './actions/Products';
import CartItem from './actions/cartItem';
import { TYPES } from './actions/types';
// import { type } from 'os';

const Cart = () => {

    const [state, dispatch] = useReducer(cartReducer, cartInitialState); //cartReducer, cartInitialState
    
    //manejo de carrito (funciones)
    //añadir
    const addToCart = (id) => {
        // console.log(id);
        // el dispatch va a tener el tipo TYPES.ADD_TO_CART
        // se mandará el id como una carga extra (con el payload)

        //en otras palabras llamo al dispatch para que por medio de la función
        // reductura me agregue un producto al carrito, ¿que producto? el producto
        // que corresponde a id que envio como una carga extra (payload)

        //la funcion reductora cartReducer es la encargada de agregar/eliminar
        // el producto al carrito

        dispatch({type: TYPES.ADD_TO_CART, payload: id})
    };
    //borrar elementos de un producto
    // se le pasa un id para diferenciar
    const deleteFromCart = (id, eliminarTodos) => {
        // paso por dispatch para elimenar el item y paso por payload su id (evitar errores a la 
        // hora de borrar uno o varios items)
        //                                     si es true                                             si es false
        eliminarTodos ? dispatch({ type: TYPES.REMOVE_ALL_ITEMS, payload: id }) :
            dispatch({ type: TYPES.REMOVE_ITEM, payload: id })
        
        
        // es lo mismo que el anterior
        // if (eliminarTodos===true) {
            // dispatch({ type: TYPES.REMOVE_ALL_ITEMS, payload: id })
        // } else {
        //     dispatch({ type: TYPES.REMOVE_ITEM, payload: id })
        // }
    };
    //borrar el carrito completo
    const clearCart = () => {

        // ventana emergente
        const confirmarVaciar = window.confirm('¿Está seguro de vaciar el carrito?');
        if (confirmarVaciar) {
            // vaciar el carrito
            dispatch({ type: TYPES.CLEAR_CART })
        }
            
    }; 



    return (
        // bootstrap tiene una clase de contenedor responsiva: container-fluid
        <div className='container-fluid'>
            <h1>Carrito en React!</h1>
            <h2>Productos</h2>
            <div className='row'>
                {/* respetar el nombre del props con lo que se manda y lo que se usa 
                en el componente hijo (los nombres deben ser iguales, las funciones tambien) */}
                {/* addToCart paso como props a Products */}
                {state.products.map((producto) => (
                    <Products
                        key={producto.id}
                        product={producto}
                        addToCart={addToCart} />))}
            </div>
            <h2 className='mb-2'>Carrito</h2>
            {/* clearCart sin ()=> arrow function no necesita esperar nada */}
            <div className='row'>
                {/* agrego el borrado */}
                {state.cart.map((item) => <CartItem key={item.id} item={item} deleteFromCart={deleteFromCart} />)}
            </div>
            {/* el boton aparece cuando hay productos en el carrito (renderizado condicional) 
            con length controlo si hay productos en el carrito....
            con state.cart.length*/}
            {state.cart.length > 0 && <button className='btn btn-danger btn-sm' onClick={clearCart}>Vaciar el carrito</button>}
        </div>
    );
}

export default Cart;
