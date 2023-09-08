function queHoraEs() {
    const $hora = document.querySelector("#tituloLaHora");
    const $laHora = document.querySelector("#laHora");
    $hora.innerHTML = `<h2>Muestra la hora actual</h2>`;
    // $laHora.innerHTML="Son las"
    setInterval(()=>{
        $laHora.innerHTML = `<p>Son las ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}....</p>`;
    },1000);
}

queHoraEs();