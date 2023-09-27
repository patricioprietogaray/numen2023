import React from 'react';

const AC1EjercicioProductosNombreProducto = (props) => {

    const nombreProd = String(props.nombreProducto.producto.nombre);
    const estilo = {
        fontSize: "1.3rem",
        color:"red"
    }

    return (
        <>
            <span style={estilo}>{nombreProd}</span>
        </>
    );
}

export default AC1EjercicioProductosNombreProducto;
