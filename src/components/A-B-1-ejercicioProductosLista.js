import React from 'react';
import AC1EjercicioProductosNombreProducto from './A-C-1-ejercicioProductosNombreProducto';
import AC2ejercicioProductosPrecioProducto from './A-C-2ejercicioProductosPrecioProducto';
import AC3ejercicioProductosStockProducto from './A-C-3ejercicioProductosStockProducto';
import AC4ejercicioProductosCompraProducto from './A-C-4ejercicioProductosCompraProducto';

const AB1EjercicioProductosLista = (props) => {
    const idProducto = props.producto.id;
    console.log(idProducto);
    
    return (
        <div>
            <AC1EjercicioProductosNombreProducto nombreProducto={props} key={idProducto} />
            <AC2ejercicioProductosPrecioProducto precioProducto={props} key={idProducto} />
            <AC3ejercicioProductosStockProducto stockProducto={props} key={idProducto} />
            <AC4ejercicioProductosCompraProducto stockProducto={props} key={idProducto} />
        </div>
    );
}

export default AB1EjercicioProductosLista;
