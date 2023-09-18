import './App.css';

function App() {
  // crear un arreglo con numeros del 0 al 9
  const lista = [0, 1, 2];

  const colores = [{
    id: 'rojo',
    color: "red"
  }, {
    id: 'azul',
    color: "blue"
    }, {
    id: 'verde',
    color: "green"
  }]

  // mapear la lista y lo guardo en la constante
  const listaMapeada = lista.map(item => <li>{item}</li>);
  return (
    <>
      <h1>Renderizar listas en JSX</h1>
      <h2>Sin metodo automático</h2>
      <ul>
        <li>{lista[0]}</li>
        <li>{lista[1]}</li>
        <li>{lista[2]}</li>
      </ul>

      

      <h2>Iteracion de un arreglo con el método map</h2>
      {/* muestro la constante que es una lista mapeada, recorre uno a uno 
      los elemenetos y devuelve el elemento, en cambio el forEach lo recorre y no devuelve
      elementos a menos que se especifique */}
      <ul>{listaMapeada}</ul>

      <h2>Iteracion con un objeto colores</h2>
      <ol>{colores.map((color) => <li style={{color: color.color}}>El color es: {color.id}</li>)}</ol>
    </>
  );
}

export default App;