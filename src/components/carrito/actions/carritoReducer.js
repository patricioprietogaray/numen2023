// Aquí se codificará 
// la función reductora y el estado inicial

// se importan los tipos de accion
import { type } from "os";
import { TYPES } from "./Types";

// se exporta el estado inicial
// el estado inicial sera una lista de productos

// src es una imagen que se asociara al producto
export const carritoInitialState = {
    products: [
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
            
        }
        case TYPES.REMOVE_ITEM: {

        }
        case TYPES.REMOVE_ALL_ITEMS: {

        }
        case TYPES.CLEAR_CART: {

        }
        default:
            return state;
    }
};