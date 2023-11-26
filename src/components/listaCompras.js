import React from 'react';
import ItemListaProducto from './itemListaProducto';

const ListaCompras = () => {
    const listaDeProductos = [
        {
            id: 1,
            nombre: 'Leche',
            precio: 1500,
            stock: 20,
        },
        {
            id: 2,
            nombre: 'Manteca',
            precio: 2500,
            stock: 21,
        },
        {
            id: 3,
            nombre: 'Pan',
            precio: 8000,
            stock: 10,
        }
    ];

    return (
        
        <>
            <h2>Lista de Compras</h2>
            <ul>
                {/* envio todos los propdictos */}
                {/* tengo que iterarlos con map a cada registro del objeto lo asigno como item */}
                {/* llamo al componente itemListaProducto y asigno a itemID el id de item  y asi a los demas atributos*/}
                {listaDeProductos.map((item) =>
                    <ItemListaProducto itemID={item.id}
                        itemNombre={item.nombre}
                        itemPrecio={item.precio}
                        itemStock={item.stock}
                    />)}
            </ul>
        </>
    );
}

export default ListaCompras;
