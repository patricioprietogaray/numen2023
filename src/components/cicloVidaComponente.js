import React from 'react';

const CicloVidaComponente = () => {
    return (
        <div>
            <h2>Ciclo de vida de un componente</h2>
            <p>Un componente tiene un ciclo de vida</p>
            <ul>
                <li>Inicialización (en el Virtual DOM)</li>
                <li>Montaje (en el Virtual DOM)</li>
                <li>Actualizacion (en el virtual DOM al DOM real)</li>
                <li>Desmontaje (del DOM)</li>
            </ul>
        </div>
    );
}

export default CicloVidaComponente;
