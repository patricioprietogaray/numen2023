import './App.css';

function App() {
  let a = 10;
  // la funcion App será la funcion que devolverá toda la página
  return (
    // la utilizacion del fragmento <> </> funciona de la misma manera que <div></div>
    <>
      <h1>Bienvenidos a React!</h1>
      <p>No se puede compilar el proyecto si no se encuentran en
        la misma carpeta raiz del mismo (debe encontrar el
        archivo package.json)</p>
      <>
        <h2>h2</h2>
        <p>puede haber multiples de fragmentos hijos ({'<></>'})</p>
      </>
      <>
        <h3>h3</h3>
        <p>Como se dijo <strong>npm start</strong> inicia el proyecto y lo muestra
          en localhost:3000; npm inicia node automaticamente y este permite
        compilar dicho proyecto.</p>
      </>
      <>
        <h2>JSX </h2><h4>más explicaciones</h4>
        <p><strong>JSX</strong> es una extension de la sintaxis de <strong>JS</strong>.
          Se parece a <strong>HTML</strong> y permite crear los elementos del Virtual DOM
          que serán renderizados finalmente en el DOM.
        </p>
        <p>Al ser JS se podrá agregar lógica de manera más sencilla.</p>
        <h3>¿Cuáles son las diferencias con HTML?</h3>
        <ul>
          <li>Todos los elementos del componente deben estar dentro de <strong>un solo padre</strong>
            Se puede utilizar un fragmento ({'<></>'}) o cualquier otra
            etiqueta JSX como {'<ul></ul>'}</li>
          <li>Por cada apertura debe haber un cierre</li>
          <li>Si el elemento no tiene hijos debe ser <strong>auto-cerrado {'/>'}</strong>  como {'<br />'} o {'<img .... />'}</li>
          <li>Class es palabra reservada (se usa para las clases en JS) en su lugar se utiliza <strong>ClassName</strong> en JSX</li>
          <li>Usa la convención de nomenclatura <strong>camelCase</strong> en vez de
          nombre de atributos HTML</li>
          <li>Para añadir sintaxis tradicional de JS se usan las llaves {'{}'}</li>
        </ul>
        <p>Para el último item se muestra el valor de 
          una variable: (a=10), entonces a = {a};
          con this.titulo no funciona!
        </p>

        <h2>Babel</h2>
        <p><strong>Babel</strong> es un compilador JavaScript o
          mejor dicho un <strong>transpilador</strong>, que reescribe tu
         código JS para que sea compatible con versiones anteriores de JS</p>
        <p>
          Al utilizar <strong>create-react-app</strong>, Babel es 
          configurado automáticamente.
        </p>
        <p>Cuando se inspecciona el código html en el navegador,
          los datos traidos por la variable estan en formato string. 
          Como se mencionó anteriormente el programa del SPA traduce
          los datos en lineas de texto.
        </p>
      </>
    </>
    
    // <div>No puede tener otro padre, solo un padre en el return!!!!</div>
    

  );
}

export default App;