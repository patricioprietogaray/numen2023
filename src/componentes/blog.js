import React, { useEffect, useState } from 'react';

const Blog = () => {
    const [recurso, setRecurso] = useState('posteos');

    useEffect(() => {
        console.log(`Efecto secundario: ${recurso}`)
    }, [recurso]);

    return (
        <>
            <h3>Uso de useEffect como recurso que llama a un efecto secundario (consola)</h3>
            <div>
                <button onClick={() => setRecurso('posteos')}>Posteos</button>
                <button onClick={()=>setRecurso('usuarios')}>Usuarios</button>
                <button onClick={()=>setRecurso('comentarios')}>Comentarios</button>
            </div>
            <h3>{recurso}</h3>
        </>

    );
}

export default Blog;
