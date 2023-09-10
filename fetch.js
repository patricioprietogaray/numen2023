
const $resultadoExito = document.querySelector("#resultadoPromesa");
$resultadoExito.innerHTML = "Pido informacion con fetch: "
fetch('https://jsonplaceholder.typicode.com/users')  //pido info
.then(respuesta=>$resultadoExito.innerHTML += `La respuesta exitosa es: ${respuesta.json()}.`)   //exito: muestro la respuesta       
.catch(error=>$resultadoExito.innerHTML += `El error por no alcanzar una respuesta exitosa es: ${error}.`)  //capturo y muestro el error

const $resultadoFracaso = document.querySelector("#resultadoFracaso");
$resultadoFracaso.innerHTML = "Pido informacion con fetch: (ahora modifico la url para que de error) "
fetch('https://0jsonplaceholder.typicode.com/users')  //pido info
.then(respuesta=>$resultadoFracaso.innerHTML += `La respuesta exitosa es: ${respuesta.json()}.`)   //exito: muestro la respuesta
.catch(error=>$resultadoFracaso.innerHTML += `El error por no alcanzar una respuesta exitosa es: ${error}.`)  //capturo y muestro el error

console.log("ver fetch por consola");
fetch('https://jsonplaceholder.typicode.com/users')  //pido info
.then(respuesta=>console.log(respuesta.json()))   //exito: muestro la respuesta por consola        



/////////  crear tarjetas de usuarios

const $contenedorUsuarios = document.querySelector("#contenedorUsuarios");

function crearTarjetaUsuario(usuario) {
    const tarjeta = document.createElement('div'); //creo un div dentro del contenedor
    tarjeta.classList.add('card'); //le agrego una clase de nombre "card"

    const nombre = document.createElement('h3'); // creo un titulo de tipo h3
    nombre.textContent = usuario.name;

    const email = document.createElement('p');
    email.textContent = usuario.email;

    tarjeta.appendChild(nombre); //agrega nombre y email dentro del div
    tarjeta.appendChild(email);

    return tarjeta;
}

function mostrarTarjetaUsuarios(usuarios) {
    $contenedorUsuarios.innerHTML=''; // borro todo el contenido
    usuarios.forEach(usuario => {
        //console.log("usuario: "+usuario);
        const tarjeta = crearTarjetaUsuario(usuario);  
        $contenedorUsuarios.appendChild(tarjeta);
    })
}

    fetch('https://jsonplaceholder.typicode.com/users') //pido info
        .then((response) => response.json())  //si sale bien ya tengo la info en crudo
        //.then((data) => console.log(data));
        .then((datos) => mostrarTarjetaUsuarios(datos)) //paso cada uno de los registros a la funcion

// clase 16 2:09