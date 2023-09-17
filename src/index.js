import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// crea la raiz (createRoot) basada en el div #root de index.html   <div id="root"></div>
const root = ReactDOM.createRoot(document.getElementById('root'));

//en la constante
root.render(
  <React.StrictMode>
    {/* renderiza o dibuja a App.js, que debe estar importado    import App from './App';  */}
    <App /> 
  </React.StrictMode>
);
