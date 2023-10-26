import React from 'react';

const UseEffect = () => {
    return (
        <div>
            <h3>useEffect() es el hook que sincroniza los efectos</h3>
            <p>Controla todas las faces el ciclo de vida de los componentes</p>
            <p>Simula una, varias o la totalidad de las faces del Ciclo de Vida de un componente.</p>
            <p>Este hook ayuda a sincronizar el estado interno de un componente con algun estado externo,
                por ejemplo, obtener datos de una API o modificar un elemento en el DOM.
                (Ej: una vez que se carga la página con todos sus estilos muestro por medio
                de una API los elementos de una consulta de una base de datos).
            </p>
            <p>useEffect() ejecuta un efecto "secundario" definido como primer argumento a modo callback</p>
            <p>Este efecto es ejecutado cada vez que uno de los valores del arreglo de dependencias 
                (segundo parámetro ha cambiado).
            </p>
        </div>
    );
}

export default UseEffect;
