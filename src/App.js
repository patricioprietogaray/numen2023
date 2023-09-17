import './App.css';
function App() {
  return (
    <>
      <h1>Node JS</h1>
      <h2>¿Qué es Node?</h2>
      <p>Node es un entorno de ejecución que permite ejecutar código JS por fuera del navegador.
        Node desata el poder de JS, dandole las posibilidades de tener las mismas capacidades de
        cualquier otro lenguaje de programación, tales como interactuar con nuestro sistema operativo
        y desarrollar aplicaciones completas. Node hace que JS se pueda utilizar como un lenguaje de tipo
        compilado, y no interpretado en el que se necesita un navegador para ejecutar el programa.
        En otras palabras node no depende del navegador.</p>
      <p>Node administrará los paquetes del proyecto en react que construyamos.</p>
      <h2>¿Cómo instalar o actualizar nodeJs desde la consola?</h2>
      <code>$ nvm install node</code>
      <h2>NPM (npm)</h2>
      <p>Es el Administrador de Paquetes de Node (Node Package Manager), a traves del cual vamos a poder
        instalar o desinstalar las librerias que consideremos necesarias para el desarrollo de nuestra
        aplicación.</p>
      <p>Podemos instalarlas localmente, disponibles para usar en un proyecto en específico o globalmente,
        disponibles para usar cada vez que querramos. NPM es una librería de JS.</p>
      <p>Para saber que version tengo de node</p>
      <h1>Node JS</h1>
      <h2>¿Qué es Node?</h2>
      <p>Node es un entorno de ejecución que permite ejecutar código JS por fuera del navegador.
        Node desata el poder de JS, dandole las posibilidades de tener las mismas capacidades de
        cualquier otro lenguaje de programación, tales como interactuar con nuestro sistema operativo
        y desarrollar aplicaciones completas. Node hace que JS se pueda utilizar como un lenguaje de tipo
        compilado, y no interpretado en el que se necesita un navegador para ejecutar el programa.
        En otras palabras node no depende del navegador.</p>
      <p>Node administrará los paquetes del proyecto en react que construyamos.</p>
      <h2>¿Cómo instalar o actualizar nodeJs desde la consola?</h2>
      <code>$ nvm install node</code>
      <h2>NPM (npm)</h2>
      <p>Es el Administrador de Paquetes de Node (Node Package Manager), a traves del cual vamos a poder
        instalar o desinstalar las librerias que consideremos necesarias para el desarrollo de nuestra
        aplicación.</p>
      <p>Podemos instalarlas localmente, disponibles para usar en un proyecto en específico o globalmente,
        disponibles para usar cada vez que querramos. NPM es una librería de JS.</p>
      <p>Para saber que version tengo de node</p>
      <pre>
        <code>
          $ node -v
        </code>
      </pre>
      <p>Para saber que version tengo de npm</p>
      <pre>
        <code>
          $ npm -v
        </code>
      </pre>


      <p>Para saber que version tengo de node</p>
      <pre>
        <code>
          $ node -v
          @@ -32,111 +46,222 @@ function App() {
            $ npm -v
        </code>
      </pre>

      <h2>React</h2>
      <p>React es una biblioteca de JS eficiente y declarativa que se utiliza para crear interfaces
        interactivas. Una librería o biblioteca en este sentido es un conjunto de herramientas
        (archivos de código) que facilitan el trabajo de los programadores. Es un Framework
        (marco de trabajo) basado en JS, más simplificado y que se puede crear sitios más eficientemente.
        Interfaz es algo con lo que se puede interactuar. La interfaz gráfica es para que el usuario
        se desenvuelva más facilmente.</p>
      <h3>¿Que es Declarativa?</h3>
      <p>Hay dos formas de hacer código una se denomina imperativa y otra declarativa. Imperativa es crear
        código como se hace en JS vanilla (código paso a paso y explícito en cada lugar, llamarlo
        y devolver datos). Declarativa se pone que quiero lograr y el sistema por atrás resuelve como hacerlo. </p>
      <h4>Ejemplo de Imperativo</h4>
      <pre>
        <code>
          <span>var kid_names = [];</span><br />
          <span>for (let person of people) {'{'}</span><br />
          <span> if (person.age {'<='} 12) {'{'}</span><br />
          <span> kid_names.push(person.name);</span><br />
          <span> {'}'}</span><br />
          <span>{'}'}</span><br />
          <span>console.log(kid_names);</span>
          {/* for (let person of people) { */}
        </code>
      </pre>

      <h4>Ejemplo de Declarativo</h4>
      <pre>
        <code>
          <span>SELECT name FROM people AS kids WHERE age {'<='} 12;</span><br />
        </code>
      </pre>
      <p>Para mostrar caracteres especiales se utiliza el {'{}'} y en su interior el caracter
        entre comillas simples {"' '"}.</p>
      <h2>¿Quién es el creador de React?</h2>
      <p>React fué creado por el ingeniero <strong>Jordan Walke</strong> que trabajo en Facebook y
        lanzado al mercado en el año 2013.</p>

      <h2>Desde la consola puede ejecutar node y creo un pequeño bucle….</h2>

      

      <h2>React</h2>
      <p>React es una biblioteca de JS eficiente y declarativa que se utiliza para crear interfaces
        interactivas. Una librería o biblioteca en este sentido es un conjunto de herramientas
        (archivos de código) que facilitan el trabajo de los programadores. Es un Framework
        (marco de trabajo) basado en JS, más simplificado y que se puede crear sitios más eficientemente.
        Interfaz es algo con lo que se puede interactuar. La interfaz gráfica es para que el usuario
        se desenvuelva más facilmente.</p>
      <h3>¿Que es Declarativa?</h3>
      <p>Hay dos formas de hacer código una se denomina imperativa y otra declarativa. Imperativa es crear
        código como se hace en JS vanilla (código paso a paso y explícito en cada lugar, llamarlo
        y devolver datos). Declarativa se pone que quiero lograr y el sistema por atrás resuelve como hacerlo. </p>
      <h4>Ejemplo de Imperativo</h4>
      <pre>
        <code>
          <span>$ node</span><br />
          <span>Welcome to Node.js v20.6.1.</span><br />
          <span>Type ".help" for more information.</span><br />
          <span>{'>'} .help</span><br />
          <span>.break    Sometimes you get stuck, this gets you out</span><br />
          <span>.clear    Alias for .break</span><br />
          <span>.editor   Enter editor mode</span><br />
          <span>Welcome to Node.js v20.6.1.</span><br />
          <span>.exit     Exit the REPL</span><br />
          <span>.help     Print this help message</span><br />
          <span>.load     Load JS from a file into the REPL session</span><br />
          <span>.save     Save all evaluated commands in this REPL session to a file</span><br />
          <span>Press Ctrl+C to abort current expression, Ctrl+D to exit the REPL</span><br />
          <br />
          <span>{'>'} let a = 1</span><br />
          <span>undefined</span><br />
          <span>{'>'} a</span><br />
          <span>1</span><br />
          <span>{'>'} for(let i=0; i{'<'}a; i++) {'{'}</span><br />
          <span>... console.log(a + " " + i);</span><br />
          <span>... {'}'}</span><br />
          <span>1 0</span><br />
          <span>undefined</span><br />
          <span>{'>'} let a = 10</span><br />
          <span>Uncaught SyntaxError: Identifier 'a' has already been declared</span><br />
          <span>{'>'} a = 10</span><br />
          <span>10</span><br />
          <span>{'>'} for(let i=0; i{'<'}a; i++) {'{'}</span><br />
          <span>... console.log(a + " " + i);</span><br />
          <span>... {'}'}</span><br />
          <span>10 0</span><br />
          <span>10 1</span><br />
          <span>10 2</span><br />
          <span>10 3</span><br />
          <span>10 4</span><br />
          <span>10 5</span><br />
          <span>10 6</span><br />
          <span>10 7</span><br />
          <span>10 8</span><br />
          <span>10 9</span><br />
          <span>undefined</span><br />
          <span>{'>'}</span><br />
        </code>
        <code>
          <span>var kid_names = [];</span><br />
          <span>for (let person of people) {'{'}</span><br />
          <span> if (person.age {'<='} 12) {'{'}</span><br />
          <span> kid_names.push(person.name);</span><br />
          <span> {'}'}</span><br />
          <span>{'}'}</span><br />
          <span>console.log(kid_names);</span>
          {/* for (let person of people) { */}
        </code>
      </pre>

      <h2>Ventajas de React</h2>
      <ul>
        <li>Alto rendimiento</li>
        <li>Se puede usar tanto del lado del cliente como del lado del servidor</li>
        <li>Se integra facilmente con otras tecnologías</li>
        <li>Posee recursos abundantes ya que es mantenida por facebook y tiene una gran comunidad de contribuyentes.</li>
        <li>Es compatible con versiones anteriores</li>
        <li>Posee  una estructura fácil de mantener gracias a su arquitectura basada en componentes.</li>
        <li>Posee documentación multidioma.</li>
        <li>Maneja flujos de datos unidireccional.</li>
      </ul>
      <h2>Desventajas de React</h2>
      <ul>
        <li>Es complejo y tiene su curva de aprendizaje elevada.</li>
        <li>El uso de JSX (JavaScript XML) agrega una complejidad extra.</li>
        <li>Requiere de un gran conjunto de herramientas para funcionar de manera óptima y ser compatible con otras tecnologías.</li>
        <li>Tiene problemas de SEO. (posicionamiento en los buscadores -ya solucionado?)</li>
      </ul>
      <h4>Ejemplo de Declarativo</h4>
      <pre>
        <code>
          <span>SELECT name FROM people AS kids WHERE age {'<='} 12;</span><br />
        </code>
      </pre>
      <p>Para mostrar caracteres especiales se utiliza el {'{}'} y en su interior el caracter
        entre comillas simples {"' '"}.</p>
      <h2>¿Quién es el creador de React?</h2>
      <p>React fué creado por el ingeniero <strong>Jordan Walke</strong> que trabajo en Facebook y
        lanzado al mercado en el año 2013.</p>

      <h2>Desde la consola puede ejecutar node y creo un pequeño bucle….</h2>

      <pre>
        <code>
          <span>$ node</span><br />
          <span>Welcome to Node.js v20.6.1.</span><br />
          <span>Type ".help" for more information.</span><br />
          <span>{'>'} .help</span><br />
          <span>.break    Sometimes you get stuck, this gets you out</span><br />
          <span>.clear    Alias for .break</span><br />
          <span>.editor   Enter editor mode</span><br />
          <span>Welcome to Node.js v20.6.1.</span><br />
          <span>.exit     Exit the REPL</span><br />
          <span>.help     Print this help message</span><br />
          <span>.load     Load JS from a file into the REPL session</span><br />
          <span>.save     Save all evaluated commands in this REPL session to a file</span><br />
          <span>Press Ctrl+C to abort current expression, Ctrl+D to exit the REPL</span><br />
          <br />
          <span>{'>'} let a = 1</span><br />
          <span>undefined</span><br />
          <span>{'>'} a</span><br />
          <span>1</span><br />
          <span>{'>'} for(let i=0; i{'<'}a; i++) {'{'}</span><br />
          <span>... console.log(a + " " + i);</span><br />
          <span>... {'}'}</span><br />
          <span>1 0</span><br />
          <span>undefined</span><br />
          <span>{'>'} let a = 10</span><br />
          <span>Uncaught SyntaxError: Identifier 'a' has already been declared</span><br />
          <span>{'>'} a = 10</span><br />
          <span>10</span><br />
          <span>{'>'} for(let i=0; i{'<'}a; i++) {'{'}</span><br />
          <span>... console.log(a + " " + i);</span><br />
          <span>... {'}'}</span><br />
          <span>10 0</span><br />
          <span>10 1</span><br />
          <span>10 2</span><br />
          <span>10 3</span><br />
          <span>10 4</span><br />
          <span>10 5</span><br />
          <span>10 6</span><br />
          <span>10 7</span><br />
          <span>10 8</span><br />
          <span>10 9</span><br />
          <span>undefined</span><br />
          <span>{'>'}</span><br />
        </code>
      </pre>

      <h2>Ventajas de React</h2>
      <ul>
        <li>Alto rendimiento</li>
        <li>Se puede usar tanto del lado del cliente como del lado del servidor</li>
        <li>Se integra facilmente con otras tecnologías</li>
        <li>Posee recursos abundantes ya que es mantenida por facebook y tiene una gran comunidad de contribuyentes.</li>
        <li>Es compatible con versiones anteriores</li>
        <li>Posee  una estructura fácil de mantener gracias a su arquitectura basada en componentes.</li>
        <li>Posee documentación multidioma.</li>
        <li>Maneja flujos de datos unidireccional.</li>
      </ul>
      <h2>Desventajas de React</h2>
      <ul>
        <li>Es complejo y tiene su curva de aprendizaje elevada.</li>
        <li>El uso de JSX (JavaScript XML) agrega una complejidad extra.</li>
        <li>Requiere de un gran conjunto de herramientas para funcionar de manera óptima y ser compatible con otras tecnologías.</li>
        <li>Tiene problemas de SEO. (posicionamiento en los buscadores -ya solucionado?)</li>
      </ul>

      <h2>Vamos a ver como trabajar con React</h2>
      <p>Para crear una proyecto nuevo en react ejecuto en la consola / terminal:</p>
      <pre>
        <code>
          $ npx create-react-app my-app
        </code>
      </pre>
      <p>Una vez creado la carpeta y descargadas las librerías debo ingresar a la carpeta:</p>
      <pre>
        <code>
          $ cd my-app
        </code>
      </pre>
      <p>y por ultimo ejecutar el proyecto con:</p>
      <pre>
        <code>
          $ npm start
        </code>
      </pre>
      <p>Para más detalle de como funciona create-react-app (<a href='https://create-react-app.dev/'>haga clic aquí para aprender más!</a>)</p>
      <h5>Nota: Debe tener instalado git (<a href='https://www.atlassian.com/es/git/tutorials/learn-git-with-bitbucket-cloud'>haga clic aquí para aprender más!</a> o puede ver <a href='https://www.youtube.com/watch?v=3GymExBkKjE'>este video de <strong>Brais Moure</strong></a>!)</h5>

      <h2>¿Qué significa lo que estoy escribiendo en la consola?</h2>
      <p><strong>npx</strong>: es una herramienta de ejecucion paquetes de node.</p>
      <p><strong>create-react-app</strong>: comando para crear una nueva app con react.</p>
      <p><strong>my-app</strong>: nombre que tendrá la nueva aplicación.</p>
      <p><strong>cd</strong>: cambia de directorio.</p>
      <p><strong>npm</strong>: herramienta de manejo de paquetes node.</p>
      <p><strong>start</strong>: comando que permite iniciar my-app.</p>

      <p>
        En la carpeta creada por react se puede ver que posee un
        directorio denominado <strong>node_modules</strong> donde
        estan guardados todos los módulos necesarios para poder correr npm.</p>
      <p>En la carpeta <strong>public</strong> se verá los archivos
        principales que se mostrarán al cliente como el
        favicon, index.html, entre otros.</p>
      <p>Dentro de la carpeta <strong>src</strong> se encuentra toda
        la codificación que el programador hará para que el sitio
        sea funcional.
      </p>
      <h2>webpack</h2>
      <p>
        Webpack es un <strong>module bundler</strong> o
        empaquetador de módulos, que recoge todos los
        módulos que tenga nuestra app y los transforma
        en assets que puede entender el navegador.</p>
      <p>Al utilizar el create-react-app webpack está
        incluido por defecto. Webpack tambien se encarga
        de enviar los errores cuando falten los paquetes
        del proyecto.</p>
      <h2>DOM</h2>
      <p>Como se vio en la clase 16 (última clase de JS),
        con el Dom se puede interactuar directamente en
        el document. Se puede agregar código html y
        css.</p>
      <h2>DOM Real vs. DOM Virtual</h2>
      <p>Cuando el browser actualiza el DOM (la parte que se ve del navegador, esto incluye html y css, con JS) lo debe hacer de manera completa. En cambio el Virtual DOM solo modifica lo que cambia y actualiza el DOM usando menos recursos que si lo actualizara de manera completa, cada una de esa actualizacion se distribuye en nodos y estos representan un componente en React. El DOM como el Virtual DOM son copias que se encuentran en memoria, la diferencia es que uno utiliza de manera directa la tarjeta gráfica (UI = User Interfaz o interfaz de usuario) para modificar los signos y diagramas que están plasmado en la pantalla, mientras que el VD solo se actualiza al DOM cuando es requerido y no por cada cambio. React esta pendiente a cada modificación del DOM virtual y reacciona (React) a esos cambios y los plasma en el DOM Real. React trabaja mucho con lo que se denominan estados (state). Un estado representa a algo que existe en este momento. Una página va cambiando a medida que se interactúa con ella, El DOM virtual por medio de React está atento a los estados para saber si se modifican. React reacciona de manera rápida a los cambios de los estados. El VD tiene control total de los estados y estos cambios se realizan casi al instante, porque se reacciona a los cambios de manera «casi» instantánea. </p>

      <h2>JSX</h2>
      <p>
        Primero al acceder al sitio web el navegador
        llerá al archivo index.html ubicado en la
        carpeta public del proyecto.
      </p>
      <p>
        Index es un archivo de tipo html
        puro sin scripts?, solo contiene un div con
        un id con el valor root en donde react incluirá
        en ese lugar el resultado de la programacion
      </p>
      <p>
        El archivo index.js dentro de la carpeta src será el Primer
        archivo en ser leido por React para desarrollar y mostrar
        el sitio dentro del div root de index.html. Este archivo y
        esta parte en especial se conecta con el archivo index.html.
      </p>

      <p>
        En index.js se puede encontrar (como se vio en la clase 16) una declaración
        y llamado al id root del index.html, luego root es renderizado en el DOM y por
        último se llama a App (<strong>{'<'}App {'/>'}</strong>), previamente
        declarada en <strong>import App from './App';</strong>.
      </p>
      <p>
        Dentro de App.js se puede ver una funcion App como si se tratase de una funcion
        JS, pero se pueden insertar código JSX el cual es parecido a html, aunque en
        realidad es una mezcla de html con css y JS. Todo este código JSX esta dentro
        de un return el cual retorna una página web. El código es más limpio que JS (como declarar
        objetos del tipo appendChild) y se lo denomina código declarativo.
      </p>







      <h4>Para poder visualizar un proyecto react que está alojado en Github</h4>
      <p>Descargar el proyecto desde Github</p>
      <p>Para poder trabajar con el proyecto de manera local:</p>
      <pre>
        <code>
          $ npm install<br />
          $ npm start
        </code>
      </pre>


      <h2>Vamos a ver como trabajar con React</h2>
      <p>Para crear una proyecto nuevo en react ejecuto en la consola / terminal:</p>
      <pre>
        <code>
          $ npx create-react-app my-app
        </code>
      </pre>
      <p>Una vez creado la carpeta y descargadas las librerías debo ingresar a la carpeta:</p>
      <pre>
        <code>
          $ cd my-app
        </code>
      </pre>
      <p>y por ultimo ejecutar el proyecto con:</p>
      <pre>
        <code>
          $ npm start
        </code>
      </pre>
      <p>Para más detalle de como funciona create-react-app (<a href='https://create-react-app.dev/'>haga clic aquí para aprender más!</a>)</p>
      <h5>Nota: Debe tener instalado git (<a href='https://www.atlassian.com/es/git/tutorials/learn-git-with-bitbucket-cloud'>haga clic aquí para aprender más!</a> o puede ver <a href='https://www.youtube.com/watch?v=3GymExBkKjE'>este video de <strong>Brais Moure</strong></a>!)</h5>
      <h2>¿Qué significa lo que estoy escribiendo en la consola?</h2>
      <p><strong>npx</strong>: es una herramienta de ejecucion paquetes de node.</p>
      <p><strong>create-react-app</strong>: comando para crear una nueva app con react.</p>
      <p><strong>my-app</strong>: nombre que tendrá la nueva aplicación.</p>
      <p><strong>cd</strong>: cambia de directorio.</p>
      <p><strong>npm</strong>: herramienta de manejo de paquetes node.</p>
      <p><strong>start</strong>: comando que permite iniciar my-app.</p>
      <p>
        En la carpeta creada por react se puede ver que posee un
        directorio denominado <strong>node_modules</strong> donde
        estan guardados todos los módulos necesarios para poder correr npm.</p>
      <p>En la carpeta <strong>public</strong> se verá los archivos
        principales que se mostrarán al cliente como el
        favicon, index.html, entre otros.</p>
      <p>Dentro de la carpeta <strong>src</strong> se encuentra toda
        la codificación que el programador hará para que el sitio
        sea funcional.
      </p>
      <h2>webpack</h2>
      <p>
        Webpack es un <strong>module bundler</strong> o
        empaquetador de módulos, que recoge todos los
        módulos que tenga nuestra app y los transforma
        en assets que puede entender el navegador.</p>
      <p>Al utilizar el create-react-app webpack está
        incluido por defecto. Webpack tambien se encarga
        de enviar los errores cuando falten los paquetes
        del proyecto.</p>
      <h2>DOM</h2>
      <p>Como se vio en la clase 16 (última clase de JS),
        con el Dom se puede interactuar directamente en
        el document. Se puede agregar código html y
        css.</p>
      <h2>DOM Real vs. DOM Virtual</h2>
      <p>Cuando el browser actualiza el DOM (la parte que se ve del navegador, esto incluye html y css, con JS) lo debe hacer de manera completa. En cambio el Virtual DOM solo modifica lo que cambia y actualiza el DOM usando menos recursos que si lo actualizara de manera completa, cada una de esa actualizacion se distribuye en nodos y estos representan un componente en React. El DOM como el Virtual DOM son copias que se encuentran en memoria, la diferencia es que uno utiliza de manera directa la tarjeta gráfica (UI = User Interfaz o interfaz de usuario) para modificar los signos y diagramas que están plasmado en la pantalla, mientras que el VD solo se actualiza al DOM cuando es requerido y no por cada cambio. React esta pendiente a cada modificación del DOM virtual y reacciona (React) a esos cambios y los plasma en el DOM Real. React trabaja mucho con lo que se denominan estados (state). Un estado representa a algo que existe en este momento. Una página va cambiando a medida que se interactúa con ella, El DOM virtual por medio de React está atento a los estados para saber si se modifican. React reacciona de manera rápida a los cambios de los estados. El VD tiene control total de los estados y estos cambios se realizan casi al instante, porque se reacciona a los cambios de manera «casi» instantánea. </p>

      <h2>JSX</h2>
      <p>
        Primero al acceder al sitio web el navegador
        llerá al archivo index.html ubicado en la
        carpeta public del proyecto.
      </p>
      <p>
        Index es un archivo de tipo html
        puro sin scripts?, solo contiene un div con
        un id con el valor root en donde react incluirá
        en ese lugar el resultado de la programacion
      </p>
      <p>
        El archivo index.js dentro de la carpeta src será el Primer
        archivo en ser leido por React para desarrollar y mostrar
        el sitio dentro del div root de index.html. Este archivo y
        esta parte en especial se conecta con el archivo index.html.
      </p>

      <p>
        En index.js se puede encontrar (como se vio en la clase 16) una declaración
        y llamado al id root del index.html, luego root es renderizado en el DOM y por
        último se llama a App (<strong>{'<'}App {'/>'}</strong>), previamente
        declarada en <strong>import App from './App';</strong>.
      </p>
      <p>
        Dentro de App.js se puede ver una funcion App como si se tratase de una funcion
        JS, pero se pueden insertar código JSX el cual es parecido a html, aunque en
        realidad es una mezcla de html con css y JS. Todo este código JSX esta dentro
        de un return el cual retorna una página web. El código es más limpio que JS (como declarar
        objetos del tipo appendChild) y se lo denomina código declarativo.
      </p>







      <h4>Para poder visualizar un proyecto react que está alojado en Github</h4>
      <p>Descargar el proyecto desde Github</p>
      <p>Para poder trabajar con el proyecto de manera local:</p>
      <pre>
        <code>
          $ npm install<br />
          $ npm start
        </code>
      </pre>


    </>
  )
}
export default App;