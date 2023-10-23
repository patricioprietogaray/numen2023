import React, { useState } from 'react';

const Contador = () => {
    // 1. inicializo contador en cero
    // lento useState(valor)
    // rápido useState(()=>valor)
    const [contador, setContador] = useState(()=>0);

    // 7. crear una lista de titulos (en un objeto) la cual se declara en un estado
    // ojo el arreglo entre () que pertenece al useState!!!
    const [lista, setLista] = useState(() => [
    // const [lista, setLista] = useState([    ES IGUAL
        { id: 1, title: "Lista en estado 1" },
        { id: 2, title: "Lista en estado 2" },
        { id: 3, title: "Lista en estado 3" },        
    ]);

    const cambiarListaHandler = () => {
        setLista(estadoPrevioArreglo => 
            // creo otro objeto y se lo agrego al arreglo que tengo de tres elementos
            // return
            [
                // debo retornar un objeto más
            ...estadoPrevioArreglo, //tomo el arreglo anterior
                { id: 4, title: "Lista en estado 4 (agregada)" }, //agrego objeto
            ]
        


        )
        
    }



    // 3. definir las funciones
    const sumarUno = () => setContador(contador + 1);
    
    // 4. la funcion restar no debe ser menor a cero               1:31
    const restarUno = () => {
        if (contador > 0) {
            // setContador(contador - 1);
            // 5. si se utilizaran variables
            // let contador=contador-1;
            // al verlo por consola funciona pero no renderiza en el html.
            // (dom virtual reacciona y muestra el cambio)
            
            // 6. si por alguna razon no se el nombre de la variable (contador) utilizo
            // prevState si tengo que saber el set (setContador)
            //setContador(prevState => prevState - 1);
            setContador(panchulo => panchulo - 1); //funciona igual y es mas eficiente que contador + 1

        }
    };
    return (
        <div style={{textAlign: "center"}}>
            <h3>Contador</h3>
            <h4>{contador}</h4>
            {/* 2. definir los eventos */}
            <button onClick={sumarUno}>+1</button><button onClick={restarUno}>-1</button>
            <h3>Lista Estado</h3>
            <ul>
                {lista.map(item => <li>{item.id}{' - '}{item.title}</li>)}
            </ul>
            <button onClick={cambiarListaHandler}>Cambiar la lista</button>

        </div>
    );
}

export default Contador;
