import React from 'react';

const AC3ejercicioProductosStockProducto = (props) => {
    const stock = String(props.stockProducto.producto.stock);
    return (
        <p>
            STOCK DE PRODUCTO: {stock}
        </p>
    );
}

export default AC3ejercicioProductosStockProducto;
