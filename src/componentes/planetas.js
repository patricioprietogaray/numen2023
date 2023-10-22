import React, { useState } from 'react';

const Planetas = () => {
    const [planeta, setPlaneta] = useState([
        {id: 0, nombre: 'Sol', tipo: 'Estrella'},
        {id: 1, nombre: 'Mercurio', tipo: 'Planeta'},
        {id: 2, nombre: 'Venus', tipo: 'Planeta'},
        ]
    )
    return (
        <>
            <h4>Sistema Solar</h4>
            <p>Primer planeta {planeta}</p>  
        </>
    );
}

export default Planetas;
