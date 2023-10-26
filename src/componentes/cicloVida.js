import React from 'react';
import CicloVidaMontaje from './cicloVidaMontaje';
import CicloVidaActualizacion from './cicloVidaActualizacion';
import CicloVidaDesmontaje from './cicloVidaDesmontaje';

const CicloVida = () => {
    return (
        <div>
            <h3>Ciclo de vida de un componente</h3>
            <p>Todo componente tiene un ciclo de vida.</p>
            <ul>
                <li>Inicialización (initialization)</li>
                <br />
                <li>Fase de Montaje (mounting)
                    <CicloVidaMontaje />
                </li> 
                <br />
                <li>Fase de Actualización (updation): Si cambia el estado hay una actualización
                    del componente.
                    <CicloVidaActualizacion />
                </li>
                <br />
                <li>Fase de Desmontaje (unmounting)
                    <CicloVidaDesmontaje />
                </li>
            </ul>

        </div>
    );
}

export default CicloVida;
