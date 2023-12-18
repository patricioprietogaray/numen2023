// import logo from './logo.svg';
import './App.css';
// import Cart from './components/carrito/Cart';
import BreakingBad from './components/BreakingBad';
import Pais from './components/GeoRef/Pais';

function App() {
  return (
    <>
      <div style={{
        height: 350, backgroundColor: 'rgb(148, 115, 80)', color: 'rgb(0,0,0)'  }}>
        <h1 style={{width:'100%', textAlign:'center'}}>Clase 7 de React</h1>
        <BreakingBad /> 
      </div>
      {/* <div>
        <h1 style={{ width: '100%', textAlign: 'center' }}>Provincias Argentinas</h1>
        <Pais />    
      </div> */}
    </>
  );
}

export default App;
