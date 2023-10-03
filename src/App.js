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

  /// destructuracion con un objeto
  const persona = {
    nombre: "nombre de la persona",
    edad: 20,
    telefono: "+542257123456"
  };

  let nombrePersona = persona.nombre;
  console.log(nombrePersona);

  const { nombre, edad, telefono } = persona;
  console.log(nombre, edad, telefono);

  const sumar = (a, b, ...c) => {
    let resultado = a + b;
    console.log("a: "+a);
    console.log("b: " + b);
    console.log("...c: " + c);
    
    // c es un arreglo declarado como parametro REST
    c.forEach(numero => resultado = resultado + numero)

    return resultado;
  }

  const sumar2 = (a, b) => {
    let resultado = a + b;

    return resultado;
  }

  const sumar3 = (...c) => {
    let resultado = 0;
    
    // c es un arreglo declarado como parametro REST
    c.forEach(numero => resultado = resultado + numero)

    return resultado;
  }

  const sumar4 = (a, b, ...c) => {
    let resultado = a + b;
        
    // c es un arreglo declarado como parametro REST
    for (let i = 0; i < c.length; i++) {
      let numero = c[i];
      resultado = resultado + numero;
    }
    return resultado;
  }

  const array1 = [0, 1, 2, 3, 4];
  const array2 = [5, 6, 7, 8, 9];
  const array3 = [array1, array2];
  const array4 = [...array1, ...array2];
  console.log(array1);
  console.log(array2);
  console.log(array3);
  console.log(array4);
  console.log([100, ...array1, 102]);


  return (
    <>
      <h1>Clase 19 - React 03</h1>
      <h2>Destructuración</h2>
      <p>La destructuracion permite desmenuzar un objeto en sus propiedades; o un arreglo
        en sus posiciones a modo de poder acceder a sus propiedades sin tener que acceder
        por medio de la notacion de punto o <span style={{color: "red"}}>dotwalking</span>.
      </p>
      <p style={{fontSize:"20px", color:"greenyellow", backgroundColor:"black"}}>Arreglo: Sin destructuración</p>
      <pre>
        <code>
          const numeros = [1, 2, 3]; <br />
          let uno = numeros[0]; <br />
          let dos = numeros[1]; <br />
          let tres = numeros[2]; <br />

          console.log(uno, dos, tres);  respuesta: "1 2 3"
        </code>
      </pre>

      <p style={{fontSize:"20px", color:"greenyellow", backgroundColor:"black"}}>Arreglo: Con destructuración</p>
      <pre>
        <code>
          const [Uno, Dos, Tres] = numeros; <br />
          console.log(Uno, Dos, Tres);   respuesta: "1 2 3".
        </code>
      </pre>
      <p>Por cada posicion del array asigno un valor. numeros[0] va a la variable Uno, numeros[1]
        va a la variable Dos y numeros[2] va a la variable Tres. Estoy "desgranando" al arreglo y asigno a
        cada variable respetando la posicion del arreglo y la posicion de las variables segun como
        se declaren. </p>
      
      <p style={{fontSize:"20px", color:"greenyellow", backgroundColor:"black"}}>Objeto: Sin destructuración</p>
      <p>Declaro un objeto</p>
      <pre>
        <code>
          const persona = {'{'}
            nombre: "nombre de la persona",
            edad: 20,
            telefono: "+542257123456"
          {'};'}
        </code>
      </pre>
      <h3>Mostrar datos destructurar....</h3>
      <pre>
        <code>
          let nombrePersona = persona.nombre; <br />
          console.log(nombrePersona);
        </code>
      </pre>
      <p style={{fontSize:"20px", color:"greenyellow", backgroundColor:"black"}}>Objeto: Con destructuración</p>
      <p>A diferencia del arreglo los datos que se pasan entre {'{ }'} se deben llamar tal cual estan en
        el objeto, no se declaran como en el arreglo si no que ya se encuentran declaradas en el objeto.</p>
      <pre>
        <code>
          const {'{ nombre, edad, telefono }'} = persona; <br />
            console.log(nombre, edad, telefono);   respuesta: nombre de la persona 20 +542257123456
        </code>
      </pre>

      <h2>Parámetros <span style={{ color: "red" }}>REST</span></h2>
      <pre>
        <code>
          const sumar = (a, b) {' => {'} <br />
            let resultado = a + b; <br />
            return resultado; <br />
          {'}'} <br />
          <br />
          const sumar = (a, b, ...c) {' => {'} <br />
            let resultado = a + b; <br />
    
            c.forEach(numero {'=>'} resultado = resultado + numero) <br />

            return resultado; <br />
          {'}'} <br />
        </code>
      </pre>
      <p>c es un arreglo declarado como parametro REST. Cuando tengo una cantidad de
        datos indeterminada se utiliza Rest. 
      </p>
      <p>
        Si paso una cantidad x de parámetros: Ej. suma(1,2,3,4,5,6,7,8); y la funcion es sumar = (a, b),
        solo sumará los dos primeros elementos. Resultado: {sumar2(1,2,3,4,5,6,7,8)}
      </p>
      <p>
        Si paso una cantidad x de parámetros: Ej. suma(1,2,3,4,5,6,7,8); y la funcion es sumar = (a, b, ...c),
        sumará los dos primeros elementos y luego sumará el elemento del arreglo más el resultado
        previo. Resultado: {sumar(1, 2, 3, 4, 5, 6, 7, 8)}
      </p>
      <p>
        Si paso una cantidad x de parámetros: Ej. suma(1,2,3,4,5,6,7,8); y la funcion es sumar = (a, b, ...c),
        sumará los dos primeros elementos y luego sumará el elemento del arreglo más el resultado
        previo. Resultado: {sumar4(1, 2, 3, 4, 5, 6, 7, 8)}
      </p>
      <p>
        Si paso una cantidad x de parámetros: Ej. suma(1,2,3,4,5,6,7,8); y la funcion es sumar = (...c),
        sumará todos los elementos del arreglo. Resultado: {sumar3(1, 2, 3, 4, 5, 6, 7, 8)}
      </p>

      <h2>Operador Spread</h2>
      <p>Permite expandir un elemento iterable como un arreglo, donde normalmente no se podría. En pocas 
        palabras permite conservar una copia de ese elemento con el objetivo de adicionar más elementos 
        en lugar de que estos reemplacen al primero.
      </p>
      <h3>Sin operador spread</h3>
      <p>Dado dos arreglos con los siguientes items [0,1,2,3,4] y [5,6,7,8,9] se muestra la suma de los dos: [0,1,2,3,4][5,6,7,8,9]. Se agrega al nuevo arreglo el arreglo completo (corchetes incluidos) separado por una coma.</p>
      <h3>Con operador spread</h3>
      <p>Dado dos arreglos con los siguientes items [0,1,2,3,4] y [5,6,7,8,9] se muestra la suma de los dos: [0,1,2,3,4,5,6,7,8,9]. Se agrega al nuevo arreglo los elementos que contienen ambos arreglos originales.</p>
      <p>Se puede agregar al principio o al final  [100,...array1,102] y cuyo resultado será: [100, 0, 1, 2, 3, 4, 102], es como un push o shift más rapido de construir...</p>

      <h2>ESTADOS</h2>
      <h3>Programación reactiva funcional</h3>
      <h4>Reacción</h4>
      <p>Los datos bajan (desde la App hacia los componentes mas pequeños). Ejemplo: Las props.</p>
      <h4>Acción</h4>
      <p>Suben los eventos (desde los componentes hacla la App). Ejemplo: Al accionar un botón.</p>
      <h4>Reacción y acción</h4>
      <p>Un ejemplo sería muestro una tarjeta de un producto llamado a un componente (reacción), 
        cliqueo en el boton agregar para comprar un producto (evento click el cual será una acción) que sumará un dato a un 
        objeto (ej: que se encuentra en un componente padre) y luego otra reaccion mostrando el carrito...
      </p>
      <h3>¿Cómo manejar los cambios?</h3>
      <p>Los estados permiten hacer cambios en la aplicación. Los estados son todas las partes 
        de la aplicación que pueden cambiar. Es decir la información que se muestra en el sitio.</p>
      <p>
        Hasta ahora conomemos lo que es una variable (let y var) y lo que es una constante (const),
        donde se puede mostrar y cambiar un valor. Las variables se declararán como estados. 
      </p>
      <p>
        En React los estados son un tipo de variables, a su vez React vigila cada cambio hasta
        en su mínimo detalle. Los estados ayudarán a que nuestra Application sea dinámica. 
      </p>
      <h3>Propiedades del Estado</h3>
      <ul>
        <li>Dinámico: Va a ser cambiante, va a estar vigilado por el mismo React, para que cuando cambie "reaccione" y se modifique</li>
        <li>Privado: (Ver la clase de closures) <a target='_blank' href='https://www.freecodecamp.org/espanol/news/que-es-un-closure-en-javascript/'>¿Que es un closure?</a>. Cada componente lo va a manejar a su gusto.</li>
        <li>"Inmutable": El estado no cambia a menos que se programe para ello.</li>
        <li>Encapsulado: Otro componente no lo pueda cambiar de manera directa o en forma automática.</li>
      </ul>

      <h3>Flujo de datos unidireccional y estados</h3>
      <p>El flujo de datos unidireccional se da con los props desde el principal hacia los componentes (App to components)</p>
      <p>Ademas del flujo de datos se le suman los estados que trabajaran de manera cíclica
        (React los consultará de manera permanente) y solo estarán actuando solo dentro de cada componente. Los componentes
        estáticos no utilizan los estados, los estados se utilizan con componentes dinámicos.

      </p>
      {/* 50 minutos */}
    </>
  );
}

export default App;
