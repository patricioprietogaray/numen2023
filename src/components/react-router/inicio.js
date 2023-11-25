import React, { useReducer } from 'react';

// IMPORTAR LOS TIPOS
import { TYPES } from './types';


// FUERA DEL COMPONENTE DE INICIO:
// declarar useReducer
// SE DECLARA UNA VARIABLE/CONSTANTE de tipo objeto

// contiene el estado inicial
const initialState = {
    contador: 0,
    // ......
    // .......
     // otros atributos que se inicializan
}

// funcion reductora TENDRÁ LA FUNCION DE CAMBIAR EL ESTADO (como set en useState)
    // tendra dos parámetros el estado anterior
// (si es la primera vez toma el estado inicial, ej: contador: 0)
// action es una funcion
    
const contadorReducer = (state, action) => {
    // aqui van las acciones o intrucciones para ejecutar la accion
    // action viene de ( const aumentarHandler = () => dispach({ type: 'INCREMENTAR' }) )
    // debo evaluar los tipos que entran
    // state es initialState.contador si es la primera vez y luego state.contador 
    // para los incrementos o decrementos
    

    // lo que ingresa como parámetro (action) y type el objeto que ingresa por ese parámetro
    switch (action.type) {
        case TYPES.AUMENTO:
            // console.log(state.contador);
            // retornar contador como state.contador+1 como objeto
            // y este objeto se imprime por pantalla ( <h3>{state.contador}</h3> )
            return { contador: state.contador + 1 };
        case TYPES.DECREMENTO:
            return { contador: state.contador - 1 };
        default:
            return state;
    }
}



const Inicio = () => {

    // dentro de la funcion
    // a una constante o variable le asigno useReducer
    // estado y dispach que se igualará con el useReducer(funcionReductora, estadoInicial)
    // funcionReductora sera una funcion que configuraremos
    // [estado, despachar]
    const [state, dispach] = useReducer(contadorReducer, initialState);

    // dispach es un objeto (initalState) se asigna como una propiedad:accion
    // propiedad type y la accion la define el programador como 'unTipo'
    // const aumentarHandler = () => dispach({ type: 'INCREMENTAR' })

    // como me puedo equivocar con los tipos llamo a TYPES
    const aumentarHandler = () => dispach({ type: TYPES.AUMENTO });

    // El dispach llama a la funcion reductora (contadorReducer), y el objeto type ingresa
    // por action ( const contadorReducer = (state, action) => .... )

    // const disminuirHandler = () => dispach({ type: 'DECREMENTAR' })

    // como me puedo equivocar con los tipos llamo a TYPES
    const disminuirHandler = () => dispach({ type: TYPES.DECREMENTO });

        
    return (
        <div>
            {/* componente de inicio - reemplaza a inicio.html */}
            <h2>Inicio</h2>
            <p>Bienvenido a nuestra página</p>
            <p>Componente de inicio</p>
            <h2>Un contador con useReducer</h2>
            <div style={{textAlign:'center'}}>
                <h3>{state.contador}</h3>
                {/* onClick es un evento */}
                <button onClick={disminuirHandler}>Disminuir</button>
                <button onClick={aumentarHandler}>Aumentar</button>
            </div>
        </div>
    );
}
// 40:00
export default Inicio;
