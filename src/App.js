import './App.css';
import RelojEffect from './components/RelojEffect';
import Blog from './components/blog';
import CicloVidaComponente from './components/cicloVidaComponente';
import ListaCompras from './components/listaCompras';
import ListaCompras2 from './components/listaCompras2';


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
      <CicloVidaComponente />
      <ListaCompras />
      {/* paso por props la lista de productos */}
      <ListaCompras2 productos={listaDeProductos} /> 
      <Blog />
      <RelojEffect />
    </>
  );
}

export default App;
