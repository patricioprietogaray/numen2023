// Aquí se codificará 
// la función reductora y el estado inicial

// se importan los tipos de accion
// import { stat } from "fs";
import { TYPES } from "./Types";

// se exporta el estado inicial
// el estado inicial sera una lista de productos

// src es una imagen que se asociara al producto
export const carritoInitialState = {
    productosArray: [
    { id: 1, nombre: 'Producto A', src: '', precio: 100, stock: 20 },
    { id: 2, nombre: 'Producto B', src: '', precio: 200, stock: 20 },
    { id: 3, nombre: 'Producto C', src: '', precio: 300, stock: 20 },
    { id: 4, nombre: 'Producto D', src: '', precio: 400, stock: 20 },
    { id: 5, nombre: 'Producto E', src: '', precio: 500, stock: 20 },
    { id: 6, nombre: 'Producto F', src: '', precio: 600, stock: 20 }
    ],
    cart: []   //el carrito debe estar vacío al comienzo
    // cart se adjuntarán los productos que se
    // quieren comprar
}

// FUNCION REDUCTORA
export const carritoReducer = (state, action) => { 
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            // confuguro la funcion reductora que viene de Cart.js (dispach)
            // voy a recibir el id del producto para luego agregarlo
            // el arreglo cart
            // console.log(action.payload);
            
            // buscar el id que sea igual al payload que recibo y luego guardarlo en nuevoItem
            const nuevoItem = state.productosArray.find(item => item.id === action.payload);

            // retorará el nuevo producto al cart (objeto)
            return {
                // dejo el estado como viene
                ...state,
                // agrego en cart lo que tengo cargado + nuevoItem
                cart: [...state.cart, nuevoItem]
            }
            
        }
            
        case TYPES.REMOVE_ITEM: {
            break;
        }
        case TYPES.REMOVE_ALL_ITEMS: {
            break;
        }
        case TYPES.CLEAR_CART: {
            break;
        }
        default:
            return state;
    }
};