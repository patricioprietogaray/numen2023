import React from 'react';

// para que funcione el route desde la consola:
//   $ npm install react-router-dom 
    
// se debe importar BrowserRouter sin esto hay error!!!
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Productos from './productos';
import Inicio from './inicio';
import Constacto from './constacto';
import SobreNosostros from './sobreNosostros';
import Error404 from './error404';
import Footer from './footer';


const Rutas = () => {
    return (
        <div>
            {/* Router viene importado de la libreria */}
            <Router>
                {/* llamo a navBar. NavBar no se recarga */}
                <NavBar />

                {/* las Route se recargan */}
                <Routes>
                    {/* con Routes se definen las rutas que habran dentro de la página */}
                    {/* path es donde se mostrará el compoente en el link */}
                    {/* element es el componente que será llamado y sera importado*/}
                    {/* <Route /> */}
                    <Route path='/' element={<Inicio />} />
                    <Route path='/productos' element={<Productos />} />
                    {/* <Route></Route> */}
                    <Route path='/contacto' element={<Constacto />}></Route> 
                    <Route path='/sobre-nosotros' element={<SobreNosostros />}></Route>
                    {/* path /* es que todo las demas rutas que no esten 
                    especificadas tiren error  */}
                    <Route path='/*' element={<Error404 />}></Route>
                </Routes>
                {/* El Footer no se recarga */}
                <Footer />
            </Router>
        </div>
    );
}

export default Rutas;
