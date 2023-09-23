import React from 'react';

const ItemLista = (props) => {
    console.log(props);
    return (
        <li>
            {props.saludo.textoSaludo}({'{'}'props.saludo.textoSaludo'{'}'}) saludo es el objeto y textosaludo es el mensaje
        </li>
    );
}

export default ItemLista;


