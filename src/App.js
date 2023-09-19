import './App.css';

function App() {
  // crear un arreglo con numeros del 0 al 9
  const lista = [0, 1, 2];
   // mapear la lista y lo guardo en la constante
  const listaMapeada = lista.map(item => <li key={item}>{item}</li>);

  const colores = [{
    id: 'rojo',
    color: "red"
  }, {
    id: 'azul',
    color: "blue"
  }, {
    id: 'verde',
    color: "green"
  }];

  const nombres = [
    {
      llama: 'Pedro'
    },
    {
      llama: 'Juan'
    },
    {
      llama: 'Perez'
    },
    {
      llama: 'Hernandez'
    },
  ];

  // agrego el index denominado indice
  const nombresPersonas = nombres.map((persona, indice) =>
    <li key={indice}>name: {persona.llama} - indice: {indice}</li>);
  
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
      {/* del objeto colores esta tiene dos propiedades el id (nombre del color en castellano) que 
      se muestra en la lista y que se pone como  llave o key; por otro lado la propiedad color
      (nombre del color como lo acepta css para mostrar el estilo) */}
      <ol>{colores.map((color) => <li style={{ color: color.color }} key={color.id}>El color es: {color.id}</li>)}</ol>
    
      <h2>Nombres de Personas</h2>
      <ul>{nombresPersonas}</ul>
    </>
  );
}

export default App;

// 19:46