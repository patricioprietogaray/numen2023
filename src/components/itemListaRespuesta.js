import React from 'react';

const ItemListaRespuesta = (props) => {

    // props  -> objeto entero
    // props.producto -> lista de objetos que estan en ese arreglo
    //
    // console.log(props.producto);
    // si el stock es cero entonces no 
    // muestro el producto, esto es 
    // una página dinámica! (utilidad de las props)
    // if (props.producto.stock < 1) {
        // con li no imprime el texto del item
        // dejando el lugar vacío
        // return <li></li>

        // con null directamente no muestra
        // el item completo
        // return null;
    // }
    return (

        // <li>
        //     {/* muestro los productos en una lista (<li>) */}
        //     Código: {props.producto.id} || Nombre: {props.producto.nombre} || Precio: {props.producto.precio}
        // </li>
        <>
            {(props.producto.stock > 0) && 
            <li>
                Código: {props.producto.id} || Nombre: {props.producto.nombre} || Precio: {props.producto.precio}
            </li>}
        </>
    );
}

export default ItemListaRespuesta;
