import React, { useReducer } from 'react';

// IMPORTAR LOS TIPOS
import { TYPES } from './types';


// FUERA DEL COMPONENTE DE INICIO:
// declarar useReducer
// SE DECLARA UNA VARIABLE/CONSTANTE de tipo objeto

// contiene el estado inicial
const initialState = {
    contador: 0,
    mostrarContador: false,
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
            // return { contador: state.contador + 1 }; modificarlo porque desaparece
            return { ...state, contador: state.contador + action.payload };
        case TYPES.DECREMENTO:            
        // return { contador: state.contador - 1 }; modificarlo porque desaparece
            return { ...state, contador: state.contador - action.payload };
        case TYPES.MOSTRAR_CONTADOR:
            // aqui debo dejar el resto del estado como está (state.contador) y modificar
            // el atributo mostrar contador, no puedo modificar directamente porque borro
            // el resto de los atributos y deberé modificar Aumento y Decremento
            // ...state, algo (dejo como esta el resto (lo que no se modifica) 
            // y le agrego o modifico algo); si no existe se agrega de lo contrario se modifica.
            // si hago clic en aumentar o disminuir se oculta el contador porque edito 
            // solo el contador y no el mostrar.... debo modificarlo....
            return { ...state, mostrarContador: !state.mostrarContador };
        case TYPES.AUMENTO2:
            return { ...state, contador: state.contador + action.payload };
        case TYPES.DECREMENTO2:
            return { ...state, contador: state.contador - action.payload };
        case TYPES.RESETEAR:
            return { ...state, contador: 0 };
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
    const aumentarHandler = () => dispach({ type: TYPES.AUMENTO, payload: 1 });

    // El dispach llama a la funcion reductora (contadorReducer), y el objeto type ingresa
    // por action ( const contadorReducer = (state, action) => .... )

    // const disminuirHandler = () => dispach({ type: 'DECREMENTAR' })

    // como me puedo equivocar con los tipos llamo a TYPES
    const disminuirHandler = () => dispach({ type: TYPES.DECREMENTO, payload: 1 });

    const aumentarHandler2 = () => dispach({type: TYPES.AUMENTO, payload: 2});

    const disminuirHandler2 = () => dispach({ type: TYPES.DECREMENTO, payload: 2 });
    
    const resetearHandler = () => dispach({ type: TYPES.RESETEAR });
    
        
    return (
        <div>
            {/* componente de inicio - reemplaza a inicio.html */}
            <h2>Inicio</h2>
            <p>Bienvenido a nuestra página</p>
            <p>Componente de inicio</p>
            <h2>Un contador con useReducer</h2>
            <h4>Contador</h4>
            {/* el boton hay que mostrarlo siempre */}
            {/* cuando presiono llamo al dispach que llama a types para no errar en el string
            luego se debe agregar el caso */}
            <button onClick={()=>dispach({type: TYPES.MOSTRAR_CONTADOR})}>Mostrar contador</button>
            {state.mostrarContador && <div style={{ textAlign: 'center' }}>
                <h3>{state.contador}</h3>
                {/* onClick es un evento */}
                <button onClick={disminuirHandler2}>Disminuir en 2</button>
                <button onClick={disminuirHandler}>Disminuir</button>
                <button onClick={aumentarHandler}>Aumentar</button>
                <button onClick={aumentarHandler2}>Aumentar en 2</button>
                <button onClick={resetearHandler}>RESET</button>
            </div>}
        </div>
    );
}
// 40:00
export default Inicio;
