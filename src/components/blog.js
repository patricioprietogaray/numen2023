import React, { useEffect, useState } from 'react';

const Blog = () => {

    
    const [recurso, setRecurso] = useState('posteos');

    
    // useEffect recibe una funcion y una variable de dependencia (estado recurso)
    useEffect(() => {
        console.log('Efecto secundario');
    }, [recurso]) //cada vez que haya un cambio en el recurso se ejecutará el console.log

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
