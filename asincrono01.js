//asincrono
const funAsinPrimera=()=>{  //funcion
    let respuesta=""
    setTimeout(function() { //callback
        respuesta = `<p>Función Asíncrona: Primera funcion asíncrona</p>`
        //alert(respuesta);
        return "respuesta funcion primera"

    },5000)
    //alert(respuesta);
    //return "respuesta";
};  //termina la funcion y se le asignan los milisegundos.... 1seg=1000ms
const funAsinSegunda=()=>{
    return `<p>Función Asíncrona: Segunda funcion síncrona</p>`
};
const funAsinTercera=()=>{
    return `<p>Función Asíncrona: Tercera funcion síncrona</p>`
};
const funAsinCuarta=()=>{
    return `<p>Función Asíncrona: Cuarta funcion síncrona</p>`
};

const $asicrono = document.querySelector("#orden");
$asicrono.innerHTML=`<h2>Funciones Asincronizadas</h2>`;
//const $primera = funAsinPrimera();

setTimeout(()=>{ //callback
    let $primera = `<p>Función Asíncrona: Primera funcion asíncrona (esperé 5000ms o 5seg)</p>`;
    $asicrono.innerHTML += $primera;
    //alert(respuesta);
    //return "respuesta funcion primera"

},5000)

//$asicrono.innerHTML += $primera;
const $segunda = funAsinSegunda();
$asicrono.innerHTML += $segunda;
const $tercera = funAsinTercera();
$asicrono.innerHTML += $tercera;
const $cuarta = funAsinCuarta();
$asicrono.innerHTML += $cuarta;
