// crear un componente nav

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                {/* href es el path de las rutas (Route) */}
                {/* el href hace que la página SE RECARGUE Y PEGUE SALTOS!!! */}
                {/* <li><a href='/'>Inicio</a></li>
                <li><a href='/productos'>Productos</a></li>
                <li><a href='/sobre-nosotros'>Sobre Nosotros</a></li>
                <li><a href='/contacto'>Contacto</a></li> */}
                
                {/* to={'ruta'} */}
                {/* el Link to hace que la página NO SE RECARGUE Y NO PEGUE SALTOS!!! */}
                <li><Link to={'/'}>Inicio</Link></li>
                <li><Link to={'/productos'}>Productos</Link></li>
                <li><Link to={'/sobre-nosotros'}>Sobre Nosotros</Link></li>
                <li><Link to={'/contacto'}>Contacto</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
// 33:41