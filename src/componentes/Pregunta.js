import React, { useState } from 'react';

const Pregunta = () => {
    // useState -> se declara el estado
    // devuelve un array con el estado y una funcion para cambiarlo
    // el estado esta protegido, privado y encapsulado
    // si se declara con let puedo cambiar directamente titulo
    const [titulo, setTitulo] = useState('titulo del estado que se encuentra seteado en su declaración');
    // titulo = "Pindonga";
    // setTitulo('titulo del estado que se encuentra seteado');

     const [planeta, setPlaneta] = useState('');

    // const [planetaOrden, setPlanetaOrden] = useState('-1');

    // const mostrarPlanetaOrden = (planetaOrden) => {
    //     switch (planetaOrden) {
    //         case 0:
    //             setPlanetaOrden(`Orden del planeta: ${planetaOrden} - El Sol`);
    //             return setPlanetaOrden(planetaOrden + 1);
    //         case 1:
    //             setPlanetaOrden(`Orden del planeta: ${planetaOrden} - Mercurio`);
    //             return setPlanetaOrden(planetaOrden + 1);
    //         default:
    //             return `Orden del planeta: ${planetaOrden}`;
    //     }
    // }

    const [que, setQue] = useState("");
    // setQue("que es el estado?");
    const [como, setComo] = useState("");

    const queEstado = () => setQue("que es el estado?");

    const comoEstado = () => {
        setComo("como es el estado?");
    }

    const [maneja, setManeja] = useState("");

    const verFuncionManejadora = () => {
        setManeja("Llamado a una funcion manejadora");
    }

    const ocultarFuncionManejadora = () => {
        setManeja("");
    }
    return (
        <div>
            <h3>Bienvenidos al Contador!</h3>
            
            <p>Declaro un useState, entre paréntesis declaro el valor inicial</p>
            <p>Declaro el estado y su funcion para modificarla. La variable no se puede modificar directamente,
                por eso el estado es inmutable, solo se modifica por medio de una funcion.
            </p>
            <h4>¿Que devuelve la funcion useState?</h4>
            <p>
                ¿Por qué debo declarar un arreglo?. Cuando declaro el hook useState devuleve el estado  
                El contenido de este estado es el argumento que se declara al inicial el hook y lo guardo
                en la variable que declaré. Lo segundo que devuelve este hook es una función que permitirá
                el cambio del contenido de la variable.
            </p>
            <p>const {"[variable, funcionModificadorVariable]=useState('Valor inicial');"}</p>
            <p>Para llamar a la variable se usa el método tradicional de las llaves {'{ }'} </p>
            <p>muestro el titulo: </p>
            <p>Se setea fuera del return: setTitulo{'("titulo del estado que se encuentra seteado");'}</p>
            <span style={{color: "red"}}>{titulo}</span>
            <p>Para cambiar el estado se hace por medio de un evento, en este caso un boton</p>
            <button onClick={() => setTitulo("modifique el estado con un click en el botón")}>Cambiar el estado!</button>
            <h2>¿Cuales es el primer planeta desde el sol en nuestro sistema solar?</h2>
            <button onClick={() => setPlaneta("Mercurio es el planeta más cercano al sistema solar!")}>Ver respuesta</button>
            {planeta}
            {/* <h2>Closure que muestra a los planetas gigantes, rocosos y enanos en orden cada vez que presiono el boton</h2>
            <button onClick={()=>{mostrarPlanetaOrden(planetaOrden)}}>Mostrar planeta</button>
            <h6>{mostrarPlanetaOrden}</h6> */}
            <br />
            {/* se llama a la funcion sin () caso contrario hace una recursividad y todo se cuelga */}
            <button onClick={queEstado}>¿Qué es el estado (state) en React? ... Cliquear para ver la respuesta!</button>
            <section>{que}</section>
            <p>En el boton anterior {'<button onClick={() => setTitulo("modifique el estado con un click en el botón")}>Cambiar el estado!</button>'} lo que
                pasa es que la funcion flecha al poner {'()=>'} la orden no se ejecuta automaticamente, porque {'()'} es un evento
                que se encarga de manejar el estado esta funcion arrow se llama handlers o manejadores {'(de eventos)'}.</p>
            <p>Espera que se presione el botón</p>
            <br />
            <button onClick={comoEstado}>¿Cómo es el estado (state) en React? ... Cliquear para ver la respuesta!</button>
            <section>{como}</section>
            <section>
                <h4>Llamo a una funcion</h4>
                <p>En este caso en vez de una funcion inline en buttom ahora la llamo como 
                    si se tratase de una funcion aparte. {'<button onClick={funcionManejadora}>Cambiar el estado!</button>'}
                </p>
                <button onClick={verFuncionManejadora}>Ver funcion manejadora o handler</button>
                <button onClick={ocultarFuncionManejadora}>Ocultar la respuesta</button>
                <span style={{color: "blue"}}>{maneja}</span>
            </section>
            
        </div>
        // 1:24
    );
}

export default Pregunta;
