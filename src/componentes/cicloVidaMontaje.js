import React from 'react';

const CicloVidaMontaje = () => {
    return (
        <>
            <p>Estos métodos se ejecutan cuando cuando se crea un componente y se inserta 
               en el arbol del DOM (es decir se muestra en el navegador)
            </p>
            <ul>
                <li>constructor(): Se ejecuta al crear la instancia del componente,
                    en el constructor puedes inicializar el estado y
                    enlazar manejadores de eventos.</li>
                <li>render(): Es el único método requerido, cuando se ejecuta,
                    examina el estado y las propiedades; y dibuja el componente
                    en el árbol del DOM.</li>
                <li>componentDidMount(): Se invoca inmediatamente después de
                    que un componente se ha insertado en el árbol del DOM.
                    Sirve para ejecutar peticiones a las APIs, Base de Datos, etc.</li>
            </ul>
        </>
    );
}

export default CicloVidaMontaje;
