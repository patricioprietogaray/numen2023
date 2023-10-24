import React from 'react';
import CicloVidaMontaje from './cicloVidaMontaje';

const CicloVida = () => {
    return (
        <div>
            <h3>Ciclo de vida de un componente</h3>
            <p>Todo componente tiene un ciclo de vida.</p>
            <ul>
                <li>Inicialización (initialization)</li>
                <li>Montaje (mounting)
                    <CicloVidaMontaje />
                </li> 
                <li>Actualización (updation): Si cambia el estado hay una actualización del componente.</li>
                <li>Desmontaje (unmounting)</li>
            </ul>

        </div>
    );
}

export default CicloVida;
