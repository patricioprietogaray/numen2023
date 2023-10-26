import React from 'react';

const CicloVidaActualizacion = () => {
    return (
        <>
            <p>Estos métodos son ejecutados por cambios en el estado
            o las propiedades de los componentes.
            </p>
            <ul>
                <li>render(): Redibuja el componente cuando detecta cambios
                    en el estado o las propiedades del componente.</li>
                <li>componentDidUpdate(): Se ejecuta inmediatamente después de
                    que la actualización del estado o las propiedades sucede.</li>
            </ul>
        </>
    );
}

export default CicloVidaActualizacion;
