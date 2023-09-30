import React from 'react';

const ListaSimple = (props) => {
    // recibo la listaSimple con props
    // console.log(props.listadosSimple);
    const listado = props.listadosSimple;
    return (
        <ul>
            {/* con un map creo list item <li> por cada
            recorrida del objeto */}
            {/* {props.listadosSimple.map(item =><li key={item.id}>{item.titulo}</li>)} */}
            {/* {lista.map(item => { <li>{item.titulo}</li>})} */}
            {/* lista.map((x)=>{<li>{x}</li>}); */}

            {/* lo mismo que lo anterior con variables en el props 
            la declaracion va por fuera del return*/}
            {/* const listado = props.listadosSimple; */}
            {listado.map(item =><li key={item.id}>{item.titulo}</li>)}
            {/* por cada item le asigno una clave:valor key=id */}

        </ul>
    );
}

export default ListaSimple;
