import React from 'react';
import ItemListaProductos2 from './itemListaProductos2';

const ListaCompras2 = () => {

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
            <h2>Lista de compras 2</h2>
            {/* mapeo lista de productos y genero un alias para los registros como itemLista
            luego seteo la key con itemLista.id y por ultimo envio el objeto
            completo como parámetro con el nombre  de producto que lo paso al 
            props de itemListaProducto */}
            {listaDeProductos.map((itemLista) => <ItemListaProductos2 key={itemLista.id} producto={itemLista} />)}
        </>
    );
}

export default ListaCompras2;
