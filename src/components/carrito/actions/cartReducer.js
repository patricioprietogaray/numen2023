// funcion reductora y estado inicial

//importar los tipos de accion
// import { TYPES } from "./types";

//codificar el estado inicial: será un objeto que incluye dos listas: 
// productos y carrito
// export const carritoInitialState = {
//     products: [
//         { id: 1, nombre: "Producto A", precio: 100, stock: 21 },
//         { id: 2, nombre: "Producto B", precio: 705, stock: 12 },
//         { id: 3, nombre: "Producto C", precio: 750, stock: 22 },
//         { id: 4, nombre: "Producto D", precio: 75, stock: 23 },
//         { id: 5, nombre: "Producto E", precio: 775, stock: 25 },
//         { id: 6, nombre: "Producto F", precio: 757, stock: 6 },
//         { id: 7, nombre: "Producto G", precio: 450, stock: 7 },
//         { id: 8, nombre: "Producto H", precio: 200, stock: 9 },
//         { id: 9, nombre: "Producto I", precio: 400, stock: 12 },
//     ],
//     cart: [],
// };

// acciones del carrito
// export function carritoReducer(state, action) {
//     switch (action.type) {
//         case TYPES.ADD_TO_CART:
//             {

                // hasta aca me llega el dato, (tira error la página...)
                // console.log("carritoReducer. Action.type. Add_to_cart paso el id por payload: ...." + action.payload);
                // console.log(state.products.id);
         
// console.log(state.products[0].id);
                
                // break;
            // }
        // case TYPES.REMOVE_ALL_ITEMS:
        //     {break;}
        // case TYPES.CLEAR_CART:
        //     {break;}
        // default:
        //     return "estado";
    // }

//  };

// import { TYPES } from './types';

// export const carritoInitialState = {
//     productos: [
//     {
//       id: 1,
//       nombre: "PRODUCTO A",
//       precio: 20,
//       src: "https://w7.pngwing.com/pngs/76/532/png-transparent-t-shirt-computer-icons-dress-shirt-t-shirt.png",
//     },
//     {
//       id: 2,
//       nombre: "PRODUCTO B",
//       precio: 35,
//       src: "https://i.pinimg.com/originals/bb/c3/5e/bbc35e5e40de2799464a1fd65047021b.png",
//     },
//     {
//       id: 3,
//       nombre: "PRODUCTO C",
//       precio: 95,
//       src: "https://cdn-icons-png.flaticon.com/512/2589/2589973.png",
//     },
//     {
//       id: 4,
//       nombre: "PRODUCTO D",
//       precio: 80,
//       src: "https://cdn-icons-png.flaticon.com/512/2093/2093798.png",
//     },
//     {
//       id: 5,
//       nombre: "PRODUCTO E",
//       precio: 60,
//       src: "https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/014/791/original/shorts_5798614.png",
//     },
//     {
//       id: 6,
//       nombre: "PRODUCTO F",
//       precio: 15,
//       src: "https://cdn-icons-png.flaticon.com/512/976/976228.png",
//     },
//     ],
//     carrito: []
// };

// export function carritoReducer(state, action) {
//     switch (action.type) {
//         case TYPES.ADD_TO_CART: {
//             console.log("TYPES.ADD_TO_CART");
//             break;
//         }
//         case TYPES.REMOVE_ITEM: {
//             console.log("TYPES.REMOVE_ITEM");
//             break;
//         }
//         case TYPES.REMOVE_ALL_ITEMS: {
//             console.log("TYPES.REMOVE_ALL_ITEMS");
//             break;
//         }
//         case TYPES.CLEAR_CART: {
//             alert("TYPES.CLEAR_CART");
//             break;
//         }
//         default: {
//             console.log("default");
//             return state;
//         }
//     }
// }

import { TYPES } from "./types";

export const cartInitialState = {
    products: [
    { id: 1, nombre: "Producto A", precio: 5, stock: 2, src: "" },
    { id: 2, nombre: "Producto B", precio: 50, stock: 20, src: "" },
    { id: 3, nombre: "Producto C", precio: 500, stock: 200, src: "" },
    { id: 4, nombre: "Producto D", precio: 5000, stock: 2000, src: "" },
    { id: 5, nombre: "Producto E", precio: 50000, stock: 20000, src: "" },
    { id: 6, nombre: "Producto F", precio: 500000, stock: 200000, src: "" },
    ],
    cart: []
}

// funcion reductora
export const cartReducer = (state, action) => {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            // console.log("en cartReducer: "+action.payload); //58.00
            // esto se repite un par de veces y luego tira error que no encuentra products
            // aun mostrando el id... lo que sucede es que acá tengo que utilizar para
            // acceder a los objetos (products y cart) se debe anteponer state.objeto
            // para eliminar este error debo retornar el estado (return state;)

            // alert("carritoReducer - switch - TYPES.ADD_TO_CART action.payload: recibo el id -> " + action.payload);

            
            //creo una constante con el numeroNuevoItem (que ingresa por payload) 
            // estos datos al buscarlos se deben comparar
            const nuevoItem = state.products.find((item) => item.id === action.payload);
            // alert("busqueda encontrada: " + nuevoItem.nombre);


            // viene del comentario de la linea 170
            // busco si esta en el carrito el producto ingresado (boton agregar con payload)
            const itemEnCarrito = state.cart.find((prodCarro) => prodCarro.id === action.payload);



            // retorno un objeto (como products) que sera anexado en ultimo lugar en cart
            // return {
            
                // queda todo el objeto (products y cart tal cual como esta)
                // ...state,

                // queda el cart como esta
                // cart: [...state.cart,
                    // se agrega al final el nuevo item que se obtuvo en la busqueda
                    // pero se agrega uno abajo de otro y no importa si se repite
                    
                    // nuevoItem


                    // para que no se repita usare nuevo item como un objeto
                    // asi le agrego la cantidad
                    // se agrega la candidad de productos en el carrito,
                    // la primera vez es solo porner en uno la cantidad

                    // {...nuevoItem, cantidad: 1}


                    // para saber si existe el producto en el carrito debo buscarlo en el carrito

                // ]
                
                // el código siguiente todo lo anterior esta resumido aca
                // en un ternario se pregunta si el producto en el carrito existe
                // si existe se le suma uno a cantidad
                // si no existe se agrega el atributo cantidad: 1 al objeto

            // no hace falta usar break si hay un retorno: break sale de una, 
            //return sale y devuelve algo
            return itemEnCarrito ? {
                // por si
                // mapear cart y comparar cada item con los datos ingresados (nuevoItem)
                // si lo encuentra sumo uno a la cantidad y dejo el resto de los datos iguales (...item)
                //y si no devuelvo tal cual esta
                
                ...state,
                cart: state.cart.map((item) => item.id === nuevoItem.id ? {
                    /// si encontro el item
                    ...item, cantidad: item.cantidad + 1
                } :
                    // si no   devuelvo el item tal cual esta (ese registro)
                    // ojo no porner entre llaves que se rompe la lista en el dom
                    // porque toma el item como objeto (dentro de otro objeto)
                    // no estoy llamando a item le estoy pasando a item un objeto item
                item 
                )

            } : {
                    // por no
                    // levanto todos los datos que tiene cart y le agrego
                    // cantidad: 1
                
                ...state,
                    cart: [...state.cart, { ...nuevoItem, cantidad: 1 }]
            };
            
        }
        case TYPES.REMOVE_ITEM: {
            
            // para evitar el error de no se encoentro el state....
            // console.log(action.payload);
            // return state;

            // encontrar el item del carrito
            // const itemEnCarritoAborrar = state.cart.find((prodAborrar) => prodAborrar.id === action.payload);

            // itemEnCarritoAborrar.cantidad > 1 ?
            //     alert("mayor a uno") :
            //     alert("es uno");
            // return state;

                       
            // } : {
                /// borrar el producto
                // alert("Esta seguro de borrar " + itemEnCarritoAborrar.nombre + "?");
            // }
            // ...state,
                // cart: state.cart.map((item) => item.id === nuevoItem.id ? {
                    /// si encontro el item
                    // ...item, cantidad: item.cantidad + 1
                // } :
                    // si no   devuelvo el item tal cual esta (ese registro)
                    // ojo no porner entre llaves que se rompe la lista en el dom
                    // porque toma el item como objeto (dentro de otro objeto)
                    // no estoy llamando a item le estoy pasando a item un objeto item
                // item


            // const itemAremover = action.payload;

            // return itemAremover>=2?cart[]

            // const itemEnCarritoAborrar = state.cart.find((prodAborrar) => prodAborrar.id === action.payload);

            // return itemEnCarritoAborrar.cantidad > 1 ?
            //     {
            //         // si es mayor a uno
            //         ...itemEnCarritoAborrar, cantidad: itemEnCarritoAborrar.cantidad - 1
            //     } : {
            //         itemEnCarritoAborrar
            //     }

            // const itemEnCarrito = state.cart.find(prodCarro => prodCarro.id === action.payload);
            
            



            // return itemEnCarrito.cantidad > 1 ? {
                // si itemEnCarrito.cantidad > 1
                // ...state,
                /// itemEnCarrito.id es igual a action.payload
                // cart: state.cart.map(item => item.id === itemEnCarrito.id ? {
                    // si id=itemcarro
                    // ...itemEnCarrito,
                    // cantidad: itemEnCarrito.cantidad - 1
                // } : {
                    // no id=itemcarro
                    // itemEnCarrito
                // }
                // )
            // } : {
                // no itemEnCarrito.cantidad > 1
                // ...itemEnCarrito,
                // cart: state.cart.filter(item => item.id !== itemEnCarrito.id) //1:28
            // }

                //     cart: state.cart.map(item => item.id === action.payload ?
                //         { ...itemEnCarrito, cantidad: itemEnCarrito.cantidad - 1 } :
                //         itemEnCarrito
                // } :
                // {
                    // filter saca lo que no coincide con la condicion
                    // si cierta condicion es verdadera queda de lo contrario se elimina
                    // cuando se presiona el boton uno menos
                //     ...state,
                //     cart: state.cart.filter(item => item.id !== itemEnCarrito.id)
                // };
                
                // encontrar el item del carrito
            const itemEnCarrito = state.cart.find(prodCarro => prodCarro.id === action.payload);
            // console.log(itemEnCarrito.cantidad);


            // return itemEnCarrito.cantidad - 1;

            return itemEnCarrito.cantidad > 1 ? {
                ...state,
                cart: state.cart.map((item) => item.id === itemEnCarrito.id ? {
                    ...item, cantidad: item.cantidad - 1} : item )
            } : {
                ...state,
                // filter para eliminar lo que no coincida 
                    cart: state.cart.filter((item) => item.id !== itemEnCarrito.id)
            };

        }

        case TYPES.REMOVE_ALL_ITEMS: {
            
            // const itemEnCarrito = state.cart.find(prodCarro => prodCarro.id === action.payload);
            // no se necesita la constante a tiemEnCarrito.id lo reemplazo por action.payload mas abajo
            return {
                ...state,
                // filter para eliminar lo que no coincida 
                    cart: state.cart.filter((item) => item.id !== action.payload)
            };
        }
        case TYPES.CLEAR_CART: {
            // reinicio el estado inicial de products y cart (vacio)
            // ojo sin state.cart..... tira error eso
            return cartInitialState;
        }
        default:
            return state;
    }
};