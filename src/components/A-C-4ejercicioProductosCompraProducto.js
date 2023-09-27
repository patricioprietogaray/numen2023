import React from 'react';
import AD1ejercicioProductosCompraProductoDisplayCompra from './A-D-1ejercicioProductosCompraProductoDisplayCompra';



const AC4ejercicioProductosCompraProducto = (props) => {
    const idProducto = String(props.stockProducto.producto.idProducto);
    const stockMax = String(props.stockProducto.producto.stock);

    return (
        <>
            <AD1ejercicioProductosCompraProductoDisplayCompra key={idProducto} maximo={stockMax} />
            
        </>
    );
}

export default AC4ejercicioProductosCompraProducto;
