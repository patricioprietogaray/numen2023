import './App.css';
import Main from './components/Main';
// import RelojEffect from './components/RelojEffect';
// import Blog from './components/blog';
// import CicloVidaComponente from './components/cicloVidaComponente';
// import ListaCompras from './components/listaCompras';
// import ListaCompras2 from './components/listaCompras2';


function App() {

  // lista de productos desde el principal
  const listaDeProductos = [
        {
            id: 1,
            nombre: 'Leche',
            precio: 1500,
            stock: 20,
        },
        {
            id: 2,
            nombre: 'Manteca',
            precio: 2500,
            stock: 21,
        },
        {
            id: 3,
            nombre: 'Pan',
            precio: 8000,
            stock: 10,
        }
    ];


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
      <Main productos={listaDeProductos} />
      {/* </productosProvider> */}
      
      {/* productos={listaDeProductos} /> */}
      {/* <ListaCompras2 productos={listaDeProductos} />  */}
      {/* <Blog /> */}
      {/* <RelojEffect /> */}
    </>
  );
}

export default App;
