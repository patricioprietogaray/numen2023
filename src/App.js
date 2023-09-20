import { Component } from 'react';
import './App.css';
import Lista from './components/lista';
import Codigo from './components/codigo';

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
  
  // funcion manejadora (handler) de eventos
  const reaccionHandler = () => {
    alert('Reaccionando a un evento desde una función!!!!');
  }
  
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

      <h2>Manejar eventos</h2>
      <p>un evento que puede tener un boton por ejemplo es alert, es similar a Manejar
        eventos con html y js.</p>
      <p>
        Los eventos en React utilizan el formato camelCase, en vez de minusculas como en HTML.
      </p>
      <p>
        En JSX se pasa una funcion en vez de un string {'{alert}'} en vez de {'"alert()"'}.
      </p>
      <p>{'<button onClick={alert("hola")}>alerta</button>'} esto hara que al cargar la página muestre
        un alert al comienzo sin haber presionado el boton, luego cuando se presiona el boton
        no reacciona.</p>
      {/* evento cuando hace clic y llama a una funcion que cuando se cliquea muestra 'Hola' en un alert */}
      <button onClick={() => alert('Hola')}>alerta</button>
      
      <h2>Funcion manejadora (handler)</h2>
      <button onClick={reaccionHandler}>Reaccionando a un evento (onClick) declarado en una constante</button>
      <button onClick={() => alert('Reaccion inline!')}>Reaccionando a un evento (onClick) declarado inline</button>
      

      <h2>COMPONENTES</h2>
      <h3>¿Qué problemas resuelven los componentes?</h3>
      <ul>
        <li>Cuando navegamos por una página tradicional, 
          en realidad navegamos sobre varias páginas que son 
          recargadas <span style={{color: colores[1].color}}>totalmente</span> cada vez que hacemos click sobre las mismas.
        </li>
        <li>Esto implica redundar código.
        </li>
        <li>Quitar rendimiento y velocidad a la aplicación (sitio)</li>
        <li>Cuanto más grande es el sitio más complejo se vuelve el código. 
          Se dificulta la lectura del mismo y su escalabilidad!
        </li>
      </ul>
      <h3>¿Qué solucion ofrece React?</h3>
      <p>Trabajar por medio de componentes. Son piezas reutilizables de 
        <span style={{ color: colores[0].color }}> código</span> que tienen
        una funcionalidad propia y luego son ensamblados para conformar una
        sola aplicacion con varias funcionalidades.
      </p>
      <p>React dá la posibilidad de hacer un componente de clase ....</p>
      <p>La PPO (
        <span style={{color: colores[0].color}}>Programacion </span>
        <span style={{color: colores[1].color}}>Orientada </span>
        <span style={{ color: colores[2].color }}>a Objetos</span>)
        frecuentemente la herencia para pasar métodos y propiedades del los padres
        a los hijos. Esto implica crear clases de objetos que funcionan como prototipos
        para crear otras instancias diferentes de dichos objetos, que heredan sus 
        métodos y propiedades del objeto padre. La clase esta "viva" durante toda
        la vida de la aplicación. Las clases van de lo general a lo particular.
      
      
      </p>
      <pre>
        <code>
          <span>import {Component} from 'react';</span><br />
          <br /><span>export default class componente extend Component {'{'}</span><br />
          <span>  render {'() {'}</span><br />
          <span>    return {'('}</span><br />
          <span>      {'<>'}</span><br />
          <span>        {'<p>Componente de clase</p>'}</span><br />
          <span>      {'</>'}</span><br />
          <span>    {');'}</span><br />
          <span>  {'}'}</span><br />
          <span>{'}'}</span><br />
          
        </code>
      </pre>
      <p>.... o componentes funcionales</p>
      <p>La programación funcional se vale de la composición, que implica el camino
        inverso: desde lo específico a lo general. Consiste en abstraer la lógica
        en pequeñas funciones que se enfocan en cumplir una tarea particular. Luego 
        estas componen funciones más grandes, que a su vez componen otras, y asi luego
        obtienes una aplicación compuesta de múltiples funciones. La función está "viva" 
        solo cuando es llamada por otro proceso, se ejecuta y devuelve los datos; luego 
        "muere".
      </p>
      <pre>
        <code>
          <span>const componente = () {'=> {'}</span><br />
          <span>  return {'('}</span><br />
          <span>    {'<p>Componente de funcional</p>'}</span><br />
          <span>  {');'}</span><br />
          <span>{'}'}</span><br />
          <span></span><br />
          <span>{'export default componente;'}</span><br />
          
          
        </code>
      </pre>

      <h2>Exportar e importar compententes</h2>
      <p>En primer lugar se crea el componente hijo y luego se exporta para que esté disponible
        para todos!
      </p>
      <pre><code>{'export default nombreDelComponente;'}</code></pre>
      <p>En segundo lugar en el componente padre, se debe importar el componente hijo
        para poder acceder desde el componente padre. El nombre del archivo es
        nombreDelComponente.js, pero al importar no se pone la extensión.
        Va con extensión los archivos que no sean js por ejemplo css. Antes de la funcion agregar:
      </p>
      <pre><code>{"import nombreDelComponente from '"}{'./rutaDondeSeEncuentraElComponente'}{"'"}</code></pre>
      <p>Y en tercer lugar y por último debo llamar al componente desde el componente padre:</p>
      <pre><code>{'<nombreDelComponente />'}</code></pre>

      <h3>Ejemplo de componente mostrando una lista!(import Lista from './components/lista';) y llamo a {'<ul><Lista></Lista></ul>'}</h3>
      <ul><Lista /></ul>
      <Codigo />
      
      {/* 45:08 */}
    </>
  );
}

export default App;

// 19:46