function tituloCuento() {
    return `<h2>Funciones sincronizadas</h2>`
}

function inicio() {
    return `<p>Inicio en primer lugar</p>`
}

function intro() {
    return `<p>Introducción en segundo lugar</p>`
}

function desenlace() {
    return `<p>Desenlace en tercer lugar</p>`
}

function final() {
    return `<p>Final en cuarto lugar</p>`
}

const $cuento = document.querySelector("#cuento");
$cuento.innerHTML=tituloCuento();
const $inicio = inicio();
$cuento.innerHTML=$cuento.innerHTML + $inicio;
const $intro = intro();
$cuento.innerHTML=$cuento.innerHTML + $intro;
const $desenlace = desenlace();
$cuento.innerHTML=$cuento.innerHTML + $desenlace;
const $final = final();
$cuento.innerHTML=$cuento.innerHTML + $final;
