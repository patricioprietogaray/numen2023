// import React, { useState } from 'react';
import React from "react";


const AD1ejercicioProductosCompraProductoDisplayCompra = (props) => {
    const maximo = String(props.maximo);
    const comprarAccion = () => {
        const cantidad = String(document.querySelector('#quantity').value);

        alert(`Cantidad de compra: ${cantidad}. Compra realizada!`);

        // props.stock = Number(maximo) - Number(cantidad);
        alert(String(props.stockProducto.productos.stock));
        // const estoc = useState()

    }
    return (
        <>
            <p>{maximo}</p>
            <form>
                <label for="quantity">Quantity (entre 0 and {maximo}):</label>
                <input type="number" id="quantity" name="quantity" min="0" max={maximo}/>
                <button onClick={comprarAccion}>Comprar</button>
            </form>
        </>
    );
}

export default AD1ejercicioProductosCompraProductoDisplayCompra;
