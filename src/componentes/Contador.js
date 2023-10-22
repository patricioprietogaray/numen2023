import React, { useState } from 'react';

const Contador = () => {
    // 1. inicializo contador en cero
    // lento useState(valor)
    // rápido useState(()=>valor)
    const [contador, setContador] = useState(()=>0);

    // 3. definir las funciones
    const sumarUno = () => setContador(contador + 1);
    
    // 4. la funcion restar no debe ser menor a cero               1:31
    const restarUno = () => {
        if (contador > 0) {
            // setContador(contador - 1);
            // 5. si se utilizaran variables
            // let contador=contador-1;
            // al verlo por consola funciona pero no renderiza en el html.
            // (dom virtual reacciona y muestra el cambio)
            
            // 6. si por alguna razon no se el nombre de la variable (contador) utilizo
            // prevState si tengo que saber el set (setContador)
            //setContador(prevState => prevState - 1);
            setContador(panchulo => panchulo - 1); //funciona igual y es mas eficiente que contador + 1

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
