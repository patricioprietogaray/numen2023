import React from 'react';
import imagenProp from '../assets/img/prop-hierarchy.webp';
import ItemLista from './itemLista';
const ContenedorLista = () => {
    const listaSaludos = [
        {
            id: 1,
            textoSaludo: 'Buenos días'
        }, {
            id: 2,
            textoSaludo: 'Buenas tardes'
        }, {
            id: 3,
            textoSaludo: 'Buenas noches'
        }
    ]
    return (
        <>
            <p>Como estoy en itemLista.js y para poder ver el listado cargado en contenedorLista.js
                que es el padre de itemLista debo utilizar las PROPS. Las props vienen de propiedades</p>
            <p>
                Los componentes permiten separar la interfaz de usuario en piezas independientes, 
                reutilizables y pensar en cada pieza de forma aislada....
            </p>
            <p>Parte del poder que tienen los componentes reside en las <strong>Props</strong>.</p>
            <p>Conceptualmente son como las funciones de JS, que aceptan entradas arbitrarias (las props) 
                y devuelven elementos que describen lo que debe aparecer en pantalla.
            </p>
            <p>Las props son propiedades que permiten implementar el flujo de datos
                unidierccional que se puede ver en la siguiente imagen.</p>
            <div style={{display: "flex", backgroundColor: "lightblue"}}>
                <img style={{width: "80%", margin: "10px"}} src={imagenProp} />
                <p style={{fontSize:"40px"}}>Por flujo de datos <strong>unidireccional</strong> nos referimos
                    al hecho de que el valor de las props de los componentes hijos es
                    almacenado en los componentes padre. Así los datos decienden de 
                    arriba hacia abajo en una sola direcccion. y son mostrados en 
                    pantalla en cada funcion hijo.
                </p>
            </div>
            <p>Paso info como saludo (props) y que le paso ??
                    al itemLista (elemento) que estoy recorriendo, se debe agregar una llave
                    en este caso key={'{'}itemLista.id{'}'}. Cada vez que recorre un elemento
                    dentro del arreglo, paso como saludo el item que recorro con map() 
                    luego en el componente itemLista muestro un li que recibe por una prop. 
                </p>
                <p>
                    Para poder acceder al dato dentro de la etiqueta li se debe seleccionar
                    el objeto y especificar su propiedad, ej: props.saludo.textosaludo. 
                </p>
                <p>De esta manera se mostrará en pantalla el listado de los saludos...</p>
                
            


            <h5>Un listados de saludos</h5>
            <ol>
                {/* paso info como saludo y que le paso ?? al itemLista (elemento) que estoy recorriendo */}
                {listaSaludos.map((itemLista) => <ItemLista key={itemLista.id} saludo={itemLista} />)}
            </ol>

            
        </>
        
    );
}

export default ContenedorLista;
