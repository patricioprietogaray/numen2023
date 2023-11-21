// crear un componente nav

import React from 'react';

const NavBar = () => {
    return (
        <nav>
            <ul>
                {/* href es el path de las rutas (Route) */}
                <li><a href='/'>Inicio</a></li>
                <li><a href='/productos'>Productos</a></li>
                <li><a href='/sobre-nosotros'>Sobre Nosotros</a></li>
                <li><a href='/contacto'>Contacto</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
