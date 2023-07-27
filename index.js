//clase 13 Callback

//Programacion funcional

//INPUT -> PROCESS -> OUTPUT

// LA PROGRAMACION FUNCIONAL ES:
//  *  FUNCIONES AISLADAS: NO DEPENDE DE NINGUN PARAMETRO DEL SISTEMA PARA FUNCIONAR
//  *  FUNCIONES PURAS: MISMA ENTRADA, MISMA SALIDA
//  *  FUNCIONES CON EFECTOS SECUNDARIOS LIMITADOS: CUALQUIER CAMBIO O MUTACION EN EL ESTADO DEL PROGRAMA FUERA DE LA FUNCION SE CONTROLA CUIDADOSAMENTE
// SE CAMBIAN LOS ESTADOS DEL PROGRAMA. PUEDE HABER ERRORES, PERDIDA DE DATOS. LA FUNCION DEBE HACER SU PARTE DE FORMA LIMPIA. PARA ELLO SE ATOMIZAN LAS 
// TAREAS, SE ESPECIALIZA.

// ¿Que es una funcion callback ?
//     Son funciones que estan programadas para ser ejecutadas
//     luego de que se ejecute otra funcion.
//     Esperar que se ejecute una funcion para que se ejecute una segunda funcion
//     La segunda funcion depende de que se ejecute la primera si o si.
//     Ej: Quiero mostrar el resultado anual de una empresa con respecto al superabit o deficit, 
//     quiero mostrar el ejercicio 2023, ¿lo puedo mostrar al ejercicio anual cuando fantan 6 meses para que 
//         finalice el año ? No. 
//         Entonces programo una funcion para que fin de año muestre los resultados.Estoy programando una callback!
//         Si la funcion callback se ejecuta antes de tiempo arrojaria un undefined. El undefined se muestra porque se ejecuta o se pide 
//         datos a algo que no existe.    

// OTRO TEMA ES LA SINCRONIA... SE VERA MAS ADELANTE

// una funcion callback permite pasar otra funcion como argumento e invocarla a traves de esta 
// cuantas veces se requiera 

// FUNCION SALUDAR USUARIO se pasa como parámetro el nombre del usuario
// function saludarUsuario(usuario) {
//     console.log('Funcion saludarUsuario que se le pasa el parametro usuario con valor: ' + usuario);
//     return `Hola ${usuario}`;
// }

//pruebo que la funcion funcione correctamente....
// console.log(saludarUsuario("genaro"));

// FUNCION DESPEDIR USUARIO se pasa como parámetro el nombre del usuario
// function despedirUsuario(usuario) {
//     console.log('Funcion despedirUsuario que se le pasa el parametro usuario con valor: ' + usuario);
//     return `Adios ${usuario}`;
// }

// pruebo la funcion despedir
// console.log(despedirUsuario("pepe"));

// function nombreCallback(argumento, funcionCallback) {
//     return funcionCallback(argumento);
// }
// Una funcion callback pasará como argumento "al final" (importantisimo) la funcion que 
// llamara como callback, commo parametro se puede pasar una vairable, un arreglo,, unn objeto, una funcion, etc
// generalmente cuando se pasa como argumento un funcion es porque la queremos utilizar del callback


// function crearSaludo(usuario, callback) {  //la funcion callback sin perentesis
//     console.log('Funcion crearSaludo que se le pasa el parametro usuario con valor: ' + usuario + ", y el callback: "+callback);
//     return callback(usuario);
// }


// console.log(crearSaludo("Marimer", saludarUsuario));  //la funcion callback sin paerentesis
// console.log(crearSaludo("Marimer", despedirUsuario));
// la funcion callback no se le pone () para que se ejecute recien en el return.


// fetch
// Fetch recupera recursos de la red, esto es que se puede pedir info desde una api
// de otro servidor, esta info tarda tiempo en llegar y por lo tanto se trata de una
// comunicacion asincrona.

// function conexion(url) {
  // const jsonn = fetch(url); //como en esta linea no da el tiempo para que llegue la respuesta
  // entonces queda como una promesa pendiente.
  // return jsonn.data; //promise pending o promesa pendiente
  // .data me devolverá los datos
// }

//correccion de la funcion conexcion para que espere 
// y una vez obtenidos muestre los datos....

// async
// function conexion(url) {
  //pruebo (try) y si no funciona capturo el error (catch)
  // try {
  //   const jsonn = await fetch(url)
  //   console.log(jsonn.data);
  // } catch (error) {
  //   console.log("Error: " + error);
  // }
  /// DE ESTA FORMA NO FUNCIONA SE DEBE HACER DE LA SIGUIENTE MANERA....


  // codigo incompleto
//   try {
//     fetch(url)
//     // el fetch devuelve la promesa..
//       .then(response => response.json())
//       .then(json => console.log(json))
//   }
//   catch (error) {
//     console.log("Error: " + error.message);
//   }
  
// }


// recurso en linea que quiero consultar
// let urlRecurso = 'https://jsonplaceholder.typicode.com/todos/100';

// // llamo a la funcion conexion y le paso la urlRecurso
  // console.log("Conexion: "+conexion(urlRecurso));



// const options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0,
// };

// function success(pos) {
//   const crd = pos.coords;

//   console.log("Tu ubicación actual es:");
//   console.log(`Latitud : ${crd.latitude}`);
//   console.log(`Longitud: ${crd.longitude}`);
//   console.log(`Más o menos ${crd.accuracy} metros.`);
// }

// function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error, options);

// Callback anidados de manera que se pueda ejecutar y terminar tareas en orden
// se llama callback hell o el infierno de los callback, tambien se lo denomina
// la pirámide de la perdición. Esto se debe evitar....
// primeraTarea(datos, function (error, resultadoExitoso) { //comienza y termina la tarea, con error o exito
//   segundaTarea(datos, function (error, resultadoExitoso) { //comienza y termina la tarea, con error o exito
//     tercerTarea(datos, function (error, resultadoExitoso) { //comienza y termina la tarea, con error o exito
//       cuartaTarea(datos, function (error, resultadoExitoso) { //comienza y termina la tarea, con error o exito
//         quintaTarea(datos, function (error, resultadoExitoso) { //comienza y termina la tarea, con error o exito
//           //código
//         });
//       });
//     });
//   });  
// });

// METODOS QUE UTILIZAN CALLBACKS
// METODOS DE ARRAYS

//foreach (para cada uno), iterar arreglos


//sin callback (sin forEach): Sólo con un for
// const profesores = ['Cinthia', 'Marcos', 'Matias', 'Andres', 'Santi'];

// for (let i = 0; i < profesores.length; i++) {
//   console.log("Profesor (for): " + profesores[i]); //muestra cada elemento del arreglo
// }

//con callback (con forEach): utilizando el método del arreglo forEach
// profesores.forEach(function (profes) { //funcion anónima tradicional
//   console.log("profes1 (forEach - funcion anónima tradicional): "+profes) //muestra cada elemento del arreglo
// })

//con callback (con forEach): utilizando el método del arreglo forEach
// profesores.forEach(profes => { //funcion anónima de flecha
//   console.log("profes2 (forEach - arrow function): "+profes) //muestra cada elemento del arreglo
// })

//forEach tarda más que el for, porque el forEach está compuesto
// de metodos simples como el for

//FUNCIONES CALLBACK   MAP, FILTER Y REDUCE
// console.log("Funciones callback map, reduce y filter");
//map toma un arreglo y lo transforma en otra cosa
//a cada elemento lo transforma, puede devolver un 2x o un (1/2)x
// devuelve un arreglo de la misma longitud y sus elementos transformados
// MAP ES IMPORTANTE EN REACT

// Aquí tengo un arreglo de objetos [{},{}]

// const amigos = [
//   {
//     nombre: 'Freddy',
//     edad: 20,
//     profesion: 'Profesor',
//   },
//   {
//     nombre: 'Nicolas',
//     edad: 25,
//     profesion: 'Profesor',
//   },
//   {
//     nombre: 'Marcos',
//     edad: 40,
//     profesion: 'Estudiante',
//   }
// ];

//amigos.forEach(elem=>{....})   return no funciona (debo poner una variable para luego retornarla)
//const resul = amigos.map(elem=>{})      return funciona
// const resultadoMap = amigos.map(elem => {
//   return (`<h2>Mis amigos!</h2>
//   <p>Les presento a mi amigo ${elem.nombre}, es ${elem.profesion} y tiene ${elem.edad} años de edad.</p>
//   `)
// });
// console.log(resultadoMap);

//document: es el body la parte que muestra al usuario? NO. Está más arriba que el body.
//el document es todo el documento html (<html>....</html>).
//(llamado al DOM)

//Se escribe despues del <script src="./index.js"></script> y no en el div con id "amigos"
// document.write(resultadoMap[0]);

// Para escribirlo en la página en un lugar específico debo simbolizar esa parte de la página
// con $parteDeLaPágina; luego le digo que dentro del id "amigos" escriba los datos

// const $amigos = document.getElementById('amigos'); que debe estar en el map


//agrega el texto dentro del id amigos pero de forma literal
// const $amigos = document.getElementById('amigos');
// const $tituloAmigos = document.getElementById('tituloAmigos');

//contenido a agregar en el html
// const resultadoMap = amigos.map(elem => {
//   return (`<p>Les presento a mi amigo ${elem.nombre}, es ${elem.profesion} y tiene ${elem.edad} años de edad.</p>`)
// });

// lo agrego al html con innerHtml y luego le digo que todos los separadores (en este caso una coma ',') 
// del arreglo resultadoMap sean suprimidos...

// console.log(resultadoMap);
// $tituloAmigos.innerHTML significa: codigo html interno al div titulo amigos
// $tituloAmigos.innerHTML = '<h2>Mis amigos!</h2>';
// $amigos.innerHTML = resultadoMap.join('');


//PRODUCTOS: HACER TARJETAS CON MAP

const $productosContenedor = document.getElementById('productosContenedor');

const productos = [
  { id: 1, nombre: 'Leche' , precio: 178.56},
  { id: 2, nombre: 'Harina', precio: 28.56},
  { id: 3, nombre: 'Sal', precio: 38.56},
  { id: 4, nombre: 'Coca', precio: 78.56},
];

// const $tituloEstilo = document.getElementById('tituloElemento');
// $tituloEstilo.style.color = 'red';

const letraVerde = "color: rgb(200,125,0);";

const mapeoProductos = productos.map(producto => {
  return (`<h2 id="$tituloElemento" style="${letraVerde}">${producto.nombre}</h2>
  <p>${producto.precio}</p>
  <button>Agregar</button>`)
})

$productosContenedor.innerHTML = mapeoProductos.join('');




// filter: filtra todos los elementos (no lo muestra) y solo devuelve el elemento que 
// coincida con la condicion


//reduce: mezcla los elementos de cada array y los muestra como un solo elemento simple
// podría decirse que los "mezcla".





// muestra a mis amigos de la forma tradicional
// console.log("Amigos: " + amigos[0].nombre);

//Ahora voy a hacer una presentacion de cada uno de los objetos con el método map.
// al arreglo amigos lo voy a recorrer con map, en cada iteración cargo cada elemento del arreglo
// a elem y devuelvo (return () ) otro arreglo nuevo => [....] que contendrá datos de mis amigos en el dom.
