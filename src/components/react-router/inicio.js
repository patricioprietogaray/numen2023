import React, { useState } from 'react';

const Inicio = () => {

    // utilizar el hook useState 52min
    const [contador, setContador] = useState(0);

    // no funciona con ++ ni --, tira error
    // const aumentarHandler = () => setContador(contador ++);

    // no funciona con prevState++ pero no tira error
    // porque devuelve el estado previo sin sumarlo en uno,
    // es por ello que primero hay que sumarlo y luego devolverlo
    // funciona con ++prevState

    
    const aumentarHandler = () => setContador(prevState => ++prevState);
    // const aumentarHandler = () => setContador(contador +1);
    const disminuirHandler = () => setContador(prevState => --prevState);
    // const disminuirHandler = () => setContador(contador - 1);

    return (
        <div>
            {/* componente de inicio - reemplaza a inicio.html */}
            <h2>Inicio</h2>
            <p>Bienvenido a nuestra página</p>
            <p>Componente de inicio</p>
            <h2>Un contador con useState</h2>
            <div style={{textAlign:'center'}}>
                <h3>{contador}</h3>
                {/* onClick es un evento */}
                <button onClick={disminuirHandler}>Disminuir</button>
                <button onClick={aumentarHandler}>Aumentar</button>
            </div>
        </div>
    );
}
// 40:00
export default Inicio;
