import React, { useEffect, useState } from 'react';

const Blog = () => {

    
    // const [variable, funcionModificaVariable]=useState(valorInicial)
    // devuelve un array con una variable y una funcion para cambiar la variable o el estado
    const [recurso, setRecurso] = useState('posteos');

    
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
