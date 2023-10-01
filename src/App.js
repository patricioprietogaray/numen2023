// import logo from './logo.svg';
import './App.css';

function App() {

  const numeros = [1, 2, 3];
  let uno = numeros[0];
  let dos = numeros[1];
  let tres = numeros[2];

  console.log(uno, dos, tres);

  const [Uno, Dos, Tres] = numeros;
  console.log(Uno, Dos, Tres);

  return (
    <>
      <h1>Clase 19 - React 03</h1>
      <h2>Destructuración</h2>
      <p>La destructuracion permite desmenuzar un objeto en sus propiedades; o un arreglo
        en sus posiciones a modo de poder acceder a sus propiedades sin tener que acceder
        por medio de la notacion de punto o <span style={{color: "red"}}>dotwalking</span>.
      </p>
      <p style={{fontSize:"20px", color:"greenyellow", backgroundColor:"black"}}>Sin destructuración</p>
      <pre>
        <code>
          const numeros = [1, 2, 3]; <br />
          let uno = numeros[0]; <br />
          let dos = numeros[1]; <br />
          let tres = numeros[2]; <br />

          console.log(uno, dos, tres);  respuesta: "1 2 3"
        </code>
      </pre>

      <p style={{fontSize:"20px", color:"greenyellow", backgroundColor:"black"}}>Con destructuración</p>
      <pre>
        <code>
          const [Uno, Dos, Tres] = numeros; <br />
          console.log(Uno, Dos, Tres);   respuesta: "1 2 3".
        </code>
      </pre>

    </>
  );
}

export default App;
