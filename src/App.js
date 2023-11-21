import './App.css';
import Main from './components/Main';
import Rutas from './components/react-router/Rutas';
import { ProductosProviders } from './providers/productosProviders';
// import RelojEffect from './components/RelojEffect';
// import Blog from './components/blog';
// import CicloVidaComponente from './components/cicloVidaComponente';
// import ListaCompras from './components/listaCompras';
// import ListaCompras2 from './components/listaCompras2';


function App() {

  


  return (
    <>
      <h1>Bienvenidos a React!</h1>
      {/* <Blog /> */}
      {/* <CicloVidaComponente /> */}
      {/* <ListaCompras /> */}
      {/* paso por props la lista de productos */}

      
      {/* Aquí voy a usar el contexto como consumer o consumidor el context estará
      disponible globalmente como una funcion global. */}
      {/* el proveedor va a estar en toda la rama (en los hijos) que provenga de main 
      aclaro: en los hijos que sean llamados no necesariamente en todos los componentes 
      de la rama.*/}
      {/* La funcion productosProvider como las funciones que se encuentren dentro 
      del mismo como el useState productos el cual estará exportado en providers y
      por lo tanto esta disponible en todos los componentes children */}
      {/* <productosProvider> */}

        {/* el contexto se usará en main */}
      
      {/* borro el props de productos */}
      {/* <Main />  */}
      

      {/* ahora llamo al proveedor y todos los componentes que se desprendan de Main
      tendrán las mismas características. Se pueden poner muchos componentes */}
      {/* <ProductosProviders>
        <Main /> 
      </ProductosProviders> */}



      {/* </productosProvider> */}
      
      {/* productos={listaDeProductos} /> */}
      {/* <ListaCompras2 productos={listaDeProductos} />  */}
      {/* <Blog /> */}
      {/* <RelojEffect /> */}

      {/* ROUTER */}
      {/* Es una biblioteca de enrutamiento del lado del 
servidor y del cliente con todas las funciones
para React que se utiliza para crear aplicaciones
de una sola página (SPA), es decir, aplicaciones
que tienen muchas páginas o componentes,
pero la página nunca se actualiza, sino que el
contenido se obtiene dinámicamente en
función de la URL. */}
      
      {/* es una sola página SPA Single Page Application
se navega entre componentes y no entre páginas */}
      {/* la unica pagina que se usa es index.html que llama a los componentes
      y estos haran la funcion de sisteintas páginas. */}
      
      {/* para que funcione el route desde la consola:
      $ npm install react-router-dom */}

      {/* llamar al componente Rutas */}
      <Rutas />
    </>
  );
}

export default App;
