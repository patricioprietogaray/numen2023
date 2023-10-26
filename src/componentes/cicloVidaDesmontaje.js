import React from 'react';

const CicloVidaDesmontaje = () => {
    return (
        <>
            <p>Estos métodos son ejecutados una vez que el componente
                ha sido eliminado del árbol del DOM.
            </p>
            <ul>
                <li>componentDidUnmount(): Se ejecuta antes de destruir el componente
                    del árbol del DOM. Útil para limpiar código cuando no es necesario
                usarlo. En otras palabras libera la memoria RAM, elimina el componente.</li>
            </ul>
        </>
    );
}

export default CicloVidaDesmontaje;
