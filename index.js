/* El objeto window simboliza al navegador y 
el objeto document simboliza al DOM*/
console.log("Muestra todo el objeto document: ");
console.log(window.document);
console.log("Muestra el tipo de documento: ");
console.log(document.doctype);
console.log("Muestra todo lo que se encuentra dentro de la etiqueta html: ");
console.log(document.documentElement);
console.log("Muestra todo lo que se encuentra dentro del head: ");
console.log(document.head);
console.log("Muestra todo lo que se encuentra dentro del body: ");
console.log(document.body);
console.log("Selecciono todo el body: ");
console.log(document.body.childNodes[0]);
console.log("Selecciono todo el h1 (único, primer hijo): ");
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[9]);
//los impares son las etiquetas los pares se comportan como el 0
//USAR LAS BUENAS PRACTICAS PARA CREAR SITIOS WEB

//// SELECTOR POR ID
// <h3 id="textoModifica">Texto que se modifica</h3>
//<button onclick="modificarTexto()">Modificar el Texto</button>
function modificarTexto() {
    // cada vez que presiono el boton
    const texto="Modifique el texto!!";
    const elementoIDmodif = document.getElementById('textoModifica');
    // console.log(elementoIDmodif);

    //modifico el contenido con innerHTML!
    // elementoIDmodif.innerHTML=texto;

    if(elementoIDmodif.hidden===false){
        elementoIDmodif.hidden=true;
    }else {
        elementoIDmodif.hidden=false;
    }

}

// Query Selector
function modificarPrimerP() {
    let texto="un párrafo";
    let parrafos = document.querySelector("p");
    parrafos.innerHTML=texto;
}

// Query Selector All
function modificarTodosP() {
    let texto="modifico todos los párrafos";
    let todosParrafos=document.querySelectorAll("p");
    //todosParrafos.innerHTML=texto;
    console.log(todosParrafos);
    for(let i=0; i<todosParrafos.length -1; i++) {
        console.log(todosParrafos[i].innerHTML="Un parrafo desde JS");
    }
    


}

console.log("muestra el valor de name con getAtribute");
// atencion ojo con las comillas
console.log(document.querySelector('ul').getAttribute('name'));

//1:05

const estilo = {
    fondo: "black",
    letra: "white"
};

let color=0;

function modificarEstilos() {
    //cuando cliqueo sobre el boton mostrar estilos
    //pinto de negro la lista!!!
    if (color==0){
        color=1;
        document.querySelector("ul").setAttribute("class", "negro");
    } else {
        color=0;
        document.querySelector("ul").setAttribute("class", "blanco");
    }
    
}

// texto y html
const $articulo = document.querySelector('#articulo');

let texto = `<p>Lorem ipsum, <b>Lorem ipsum</b>, <mark>Lorem ipsum</mark></p>`;
//muestra el texto de la forma literal (tal como esta en texto)
//no reconoce los <p> como una etiqueta
// $articulo.textContent=texto;

//la mas utilizada
//muestra el texto sin los tags de p
// $articulo.innerHTML=texto;

//reemplaza la etiqueta p por el article
// $articulo.outerHTML = texto;

//tarjeta

//selecciona a la etiqueta 
//<section class="cards"></section>
const $cards = document.querySelector(".cards");

//figure -> img
//          figcaption -> "Hola mundo!"

//crea una etiqueta <figure></figure>
const $figure = document.createElement("figure");

//crea un elemento imagen
const $img = document.createElement("img");

//crear un figcaption
const $figcaption = document.createElement("figcaption");
const $figcaptionText = document.createTextNode("Hola mundo!");

//ahora los acomodo
// cards ->
//        figure -> img
//                  figcaption -> "Hola mundo!"

//dentro de section .cards inserto la etiqueta figure
//<section class="cards">
//  <figure>
//</section>
//$cards.appendChild($figure);

//dentro de figure agrego la imagen
//$figure.appendChild($img);

//debajo de la imagen va el figcaption
//$figure.appendChild($figcaption);

//muestro la imagen en html los atributos se agregan
//uno a uno, si se repite se sobreescribe el valor
//fuente de la imagen
//$img.setAttribute("src", "https://imgs.search.brave.com/w3VhwT5Trdh2L4cjNq2QvGzvI0cE0ZEElm9t0OaxFps/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE2/MzI4MTQzMy9waG90/by9hLWRpc3BsYXkt/c3RhdHVlLW9mLXlv/ZGEtZnJvbS1zdGFy/LXdhcnMtYXQtMjAx/OS1jb21pYy1jb24t/aW50ZXJuYXRpb25h/bC1vbi1qdWx5LTIw/LTIwMTktaW4uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWVQ/MWhMRHIyTU9sZzR2/TFgyeDdrZ3J0ZGdM/S1VoWjRxWmRjRFVE/XzdyVjQ9");

//comentario alternativo 
//$img.setAttribute("alt", "Yoda");

//ancho de la imagen
//$img.setAttribute("width", "150");

//texto del figcaption
//$figcaption.appendChild($figcaptionText);

//aclaracion: $cards es una constante. se usa const para evitar que pase lo siguiente:
//$cards=cards; aca destruiria el código, la constante en si no se puede modificar
//Hay ciertos métodos que pueden modificar una constante, por ejemplo appendChild.
//Solo se modifican los parámetros en particular y no la constante en general.
//Otra forma de modificar variables es el closure, pero en ambito global se usa const.
//Por convencion para distinguir las variables de las etiquetas, id o clases de HTML 
//se pone "$" al comienzo: $cards, $figure, $img, etc

// lo mismo del ejercicio anterior pero con objetos
let yoda = {
    src: "https://imgs.search.brave.com/w3VhwT5Trdh2L4cjNq2QvGzvI0cE0ZEElm9t0OaxFps/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE2/MzI4MTQzMy9waG90/by9hLWRpc3BsYXkt/c3RhdHVlLW9mLXlv/ZGEtZnJvbS1zdGFy/LXdhcnMtYXQtMjAx/OS1jb21pYy1jb24t/aW50ZXJuYXRpb25h/bC1vbi1qdWx5LTIw/LTIwMTktaW4uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWVQ/MWhMRHIyTU9sZzR2/TFgyeDdrZ3J0ZGdM/S1VoWjRxWmRjRFVE/XzdyVjQ9",
    alt: "Yoda",
    width: 200
}

$cards.appendChild($figure);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$img.setAttribute("src", yoda.src);
$img.setAttribute("alt", yoda.alt);
$img.setAttribute("width", yoda.width);
$figcaption.appendChild($figcaptionText);

const personajesToyStory = [
    {
        src: "https://imgs.search.brave.com/l912lfHlmeu5Ebx773jgGC8kLeAgAXQgtrDfojcMeBw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zb3lk/ZWNpbmUuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy9idXp6LWxp/Z2h0eWVhci10b3kt/c3RvcnkucG5n",
        alt: "Buzz",
        width: "150",
    },
    {
        src: "https://imgs.search.brave.com/4Udmt6ACmuTu2ENiedKJ2jIa8vaV_0WJRudLsN3BRI8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vaW1hZ2Vu/ZXNwYXJhcGVxdWVz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOS8wNy9Ub3kt/U3RvcnktNC1Xb29k/eS5wbmc_dz01NDUm/aD0zMjgmc3NsPTE",
        alt: "Woody",
        width: "150"
    },
    {
        src: "https://imgs.search.brave.com/4oCkMM9DvU2PfYxaMxjImjIjX9eOfbcdqVr5BUVZVVc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zb3lk/ZWNpbmUuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy9tYXJjaWFu/b3MtdG95LXN0b3J5/LnBuZw",
        alt: "Marciano",
        width: "150",
    }
];


const $toyStoryTag = document.querySelector(".toyStory");

personajesToyStory.map(personajes=>{
    //crear los tags
    const $figureTag = document.createElement("figure");
    const $imgTag = document.createElement("img");
    const $figcaptionTag = document.createElement("figcaption");
    const $figcaptionText = document.createTextNode(personajes.alt);

    //ponerlos en html
    $toyStoryTag.appendChild($figureTag);
    $figureTag.appendChild($imgTag);
    $imgTag.setAttribute("src", personajes.src);
    $imgTag.setAttribute("alt", personajes.alt);
    $imgTag.setAttribute("width", personajes.width)
    $figureTag.appendChild($figcaptionTag);
    $figcaptionTag.appendChild($figcaptionText);
});
$toyStoryTag.style.color="red";
$toyStoryTag.style.display="flex";
$toyStoryTag.style.fontSize="20px";

//// crear una lista 
/// ojo con document.write, elimina todo!!!!

const estaciones = [
    "Otoño", 
    "Invierno", 
    "Primavera", 
    "Verano"
    ],

    // crear un tag ul (lista desordenada HTML)
    $ul = document.createElement("ul");

    //se agrega al final del documento el titulo
    document.write("<h3>Estaciones del Año</h3>");

    //crear un ul en html
    document.body.appendChild($ul);

    //estaciones.forEach(el => {   //el son las estaciones
        //crear un <li>
    //    const $li = document.createElement("li");

        //añadir el contenido a <li>textContent</li>
    //    $li.textContent = el;

        //agrega los li en ul y se muestran en pantalla
    //    $ul.appendChild($li);

    //})

    const aleatorio = (minimo,maximo) => {
        return Math.floor(Math.random() * ((maximo+1)-minimo)+minimo);
    }

    estaciones.map(estacion=>{
        const $li = document.createElement("li");
        $li.textContent = estacion;
        $ul.appendChild($li);
        let rojo = aleatorio(0,255), verde = aleatorio(0,255), azul = aleatorio(0,255);
        $li.style.backgroundColor=`rgb(${rojo},${verde},${azul})`;
    })

    //link o enlaces
    estiloEnlace = {
        backgroundColor: "red",
        color: "white",
        textDecoration: "none",
        fontWeight: 900,
        padding: "10px"
    }

    const $enlace = document.querySelector(".enlaceAgoogle");
    
    /* $enlace.style.backgroundColor="red";
    $enlace.style.color="white";
    $enlace.style.textDecoration="none";
    $enlace.style.fontWeight=900;
    $enlace.style.padding="10px"; */
    
        
    $enlace.style.backgroundColor = estiloEnlace.backgroundColor;
    $enlace.style.color = estiloEnlace.color;
    $enlace.style.textDecoration = estiloEnlace.textDecoration;
    $enlace.style.fontWeight = estiloEnlace.fontWeight;
    $enlace.style.padding = estiloEnlace.padding;


    //// AGREGAR O ELIMINAR UNA CLASE, SE AGREGA EN ULTIMO LUGAR

    let colorTitulo=0;
    function cambiarToyStory() {
        const $tituloToyStory = document.querySelector('#toy');
        if (colorTitulo === 0) {
            $tituloToyStory.classList.add('toyStoryCrimson');
            colorTitulo=1;
        } else {
            $tituloToyStory.classList.remove('toyStoryCrimson');
            colorTitulo=0;
        }
        
    }

    /* Eventos en JS

    IMIRAR EL EVENTO HOVER DE CSS EN JS


    ¿Como funciona?
    
    1- el usuario presiona un boton (cliquea con el mouse)
    2- se desencadena un evento (myEvent())
    3- en respuesta JS ejecuta un codigo
                    function myEvent() {
                        .......
                    }
    4- la apariencia de la página se modifica o actualiza mostrando el resultado

    */

    // capturar evento forma 1
    const $miPrimerEvento = document.querySelector("#mi-primer-evento");
    $miPrimerEvento.onclick = function () {
        alert("Forma 1: Evento desde JS");
    }

    //capturar evento forma 2
    function forma2() {
        alert("Forma 2: Evento desde JS");
    }
    const $evento2 = document.getElementById("mi-segundo-evento");

    $evento2.onclick = forma2;


    /// escuchando... cuando paso el mouse por encima del boton Escuchar AddEventListener
    
    function escucha() {
        $escuchador.classList.add('blanco');
    }

    function noEscucha() {
        $escuchador.classList.remove('blanco');
    }
    
    const $escuchador = document.querySelector("#escuchar");

    //                              evento, callback
    $escuchador.addEventListener('mouseenter', escucha);

    //$escuchador.addEventListener('mouseleave', noEscucha);

    //funcion anonima
    $escuchador.addEventListener('mouseleave', function(){
        $escuchador.classList.remove('blanco');
    });

    /* ATENTI: Si el callback esta sin parentesis 'escucha' entonces
        se ejecutará solo cuando se haga clic en el boton.
            Si el callback esta con paréntesis 'escucha()' entonces se
            ejecutará ni bien cargue la página.
    */

/* 

Event	            Occurs When	                                                            Belongs To
abort	            The loading of a media is aborted	                                    UiEvent, Event
afterprint	        A page has started printing	                                            Event
animationend	    A CSS animation has completed	                                        AnimationEvent
animationiteration	A CSS animation is repeated	                                            AnimationEvent
animationstart	    A CSS animation has started	                                            AnimationEvent
beforeprint	        A page is about to be printed	                                        Event
beforeunload	    Before a document is about to be unloaded	                            UiEvent, Event
blur	            An element loses focus	                                                FocusEvent
canplay	            The browser can start playing a media (has buffered enough to begin)	Event
canplaythrough	    The browser can play through a media without stopping for buffering	    Event
change	            The content of a form element has changed	                            Event
click	            An element is clicked on	                                            MouseEvent
contextmenu	        An element is right-clicked to open a context menu	                    MouseEvent
copy	            The content of an element is copied	                                    ClipboardEvent
cut	                The content of an element is cut	                                    ClipboardEvent
dblclick	        An element is double-clicked	                                        MouseEvent
drag	            An element is being dragged	                                            DragEvent
dragend	            Dragging of an element has ended	                                    DragEvent
dragenter	        A dragged element enters the drop target	                            DragEvent
dragleave	        A dragged element leaves the drop target	                            DragEvent
dragover	        A dragged element is over the drop target	                            DragEvent
dragstart	        Dragging of an element has started	                                    DragEvent
drop	            A dragged element is dropped on the target	                            DragEvent
durationchange	    The duration of a media is changed	                                    Event
ended	            A media has reach the end ("thanks for listening")	                    Event
error	            An error has occurred while loading a file	                            ProgressEvent, UiEvent, Event
focus	            An element gets focus	                                                FocusEvent
focusin	            An element is about to get focus	                                    FocusEvent
focusout	        An element is about to lose focus	                                    FocusEvent
fullscreenchange	An element is displayed in fullscreen mode	                            Event
fullscreenerror	    An element can not be displayed in fullscreen mode	                    Event
hashchange	        There has been changes to the anchor part of a URL	                    HashChangeEvent
input	            An element gets user input	                                            InputEvent, Event
invalid	            An element is invalid	                                                Event
keydown	            A key is down	                                                        KeyboardEvent
keypress	        A key is pressed	                                                    KeyboardEvent
keyup	            A key is released	                                                    KeyboardEvent
load	            An object has loaded	                                                UiEvent, Event
loadeddata	        Media data is loaded	                                                Event
loadedmetadata	    Meta data (like dimensions and duration) are loaded	                    Event
loadstart	        The browser starts looking for the specified media	                    ProgressEvent
message	            A message is received through the event source	                        Event
mousedown	        The mouse button is pressed over an element	                            MouseEvent
mouseenter	        The pointer is moved onto an element	                                MouseEvent
mouseleave	        The pointer is moved out of an element	                                MouseEvent
mousemove	        The pointer is moved over an element	                                MouseEvent
mouseover	        The pointer is moved onto an element	                                MouseEvent
mouseout	        The pointer is moved out of an element	                                MouseEvent
mouseup	            A user releases a mouse button over an element	                        MouseEvent
mousewheel	        Deprecated. Use the wheel event instead	                                WheelEvent
offline	            The browser starts working offline	                                    Event
online	            The browser starts working online	                                    Event
open	            A connection with the event source is opened	                        Event
pagehide	        User navigates away from a webpage	                                    PageTransitionEvent
pageshow	        User navigates to a webpage	                                            PageTransitionEvent
paste	            Some content is pasted in an element	                                ClipboardEvent
pause	            A media is paused	                                                    Event
play	            The media has started or is no longer paused	                        Event
playing	            The media is playing after being paused or buffered	                    Event
popstate	        The window's history changes	                                        PopStateEvent
progress	        The browser is downloading media data	                                Event
ratechange	        The playing speed of a media is changed	                                Event
resize	            The document view is resized	                                        UiEvent, Event
reset	            A form is reset	                                                        Event
scroll	            An scrollbar is being scrolled	                                        UiEvent, Event
search	            Something is written in a search field	                                Event
seeked	            Skipping to a media position is finished	                            Event
seeking	            Skipping to a media position is started	                                Event
select	            User selects some text	                                                UiEvent, Event
show	            A <menu> element is shown as a context menu	                            Event
stalled	            The browser is trying to get unavailable media data	                    Event
storage	            A Web Storage area is updated	                                        StorageEvent
submit	            A form is submitted	                                                    Event
suspend	            The browser is intentionally not getting media data	                    Event
timeupdate	        The playing position has changed (the user moves to a different 
                        point in the media)	                                                Event
toggle	            The user opens or closes the <details> element	                        Event
touchcancel	        The touch is interrupted	                                            TouchEvent
touchend	        A finger is removed from a touch screen	                                TouchEvent
touchmove	        A finger is dragged across the screen	                                TouchEvent
touchstart	        A finger is placed on a touch screen	                                TouchEvent
transitionend	    A CSS transition has completed	                                        TransitionEvent
unload	            A page has unloaded	                                                    UiEvent, Event
volumechange	    The volume of a media is changed (includes muting)	                    Event
waiting	            A media is paused but is expected to resume (e.g. buffering)	        Event
wheel	            The mouse wheel rolls up or down over an element	                    WheelEvent



*/
