import React, { useState } from 'react';

const Contador = () => {
    // 1. inicializo contador en cero
    const [contador, setContador] = useState(0);

    // 3. definir las funciones
    const sumarUno = () => setContador(contador + 1);
    
    // 4. la funcion restar no debe ser menor a cero               1:31
    const restarUno = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    };
    return (
        <div style={{textAlign: "center"}}>
            <h3>Contador</h3>
            <h4>{contador}</h4>
            {/* 2. definir los eventos */}
            <button onClick={sumarUno}>+1</button><button onClick={restarUno}>-1</button>
        </div>
    );
}

export default Contador;
