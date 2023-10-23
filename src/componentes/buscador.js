import React, { useState } from 'react';


// que hace? espera a que el input cambie
const Buscador = () => {

    const [terminoDeBusqueda, setTerminoDeBusqueda] = useState('');

    const busquedaHandler = (event) => {
        // ver que estoy escribiendo en el input? con event.target.value
        // console.log(event.target.value)
        // como lo traduzco al estado?
        setTerminoDeBusqueda(event.target.value);
    }

    return (
        <div>
            {/* en React el for (atributo del label) se llama htmlFor */}
            <label htmlFor='busqueda'>Buscar:</label>
            {/* cuando cambie onChange hacer tal cosa */}
            <input onChange={busquedaHandler} type='text' />
            <p>Buscando.... {terminoDeBusqueda}</p>
        </div>
    );
}

export default Buscador;
