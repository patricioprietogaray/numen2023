import React, { useEffect, useState } from 'react';

const Blog = () => {

    
    // const [variable, funcionModificaVariable]=useState(valorInicial)
    // devuelve un array con una variable y una funcion para cambiar la variable o el estado
    const [recurso, setRecurso] = useState('posteos');

    // useEffect es un hook, un hook es un gancho que se engancha con funciones.

    // useEffect recibe una funcion y una variable de dependencia (estado recurso)
    useEffect(() => {
        console.log('Efecto secundario');
    }, [recurso]) //cada vez que haya un cambio en el recurso se ejecutará el console.log

    // dos argumentos del useEffect
    // useEffect(callback, arrayDependencias)
    // useEffect(()=>{callback con instrucciones}, [arrayDependencias])
    return (
        <>
            <div>
                <button onClick={() => setRecurso('posteos')}>Posteos</button>
                <button onClick={() => setRecurso('usuarios')}>Usuarios</button>
                <button onClick={() => setRecurso('comentarios')}>Comentarios</button>
            </div>
            {/* muestro el recurso por pantalla */}
            <h2>{recurso}</h2>
        </>
    )
};

export default Blog;

// antes no era con funciones, se hacian clases.Desde la clase componentes
// crear una instancia del componente(desde una plantilla) para crear un componente
// nuevo... ahora se utilizan funciones que devuelven componentes o comoponente funcionales
// ahora tengo los hook use(utilizar) useEffect, useState, se simplificó con la programacion
// funcional (los hooks son funciones). 