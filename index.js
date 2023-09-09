function queHoraEs() {
    const $hora = document.querySelector("#tituloLaHora");
    const $laHora = document.querySelector("#laHora");
    $hora.innerHTML = `<h2>Muestra la hora actual</h2>`;
    // $laHora.innerHTML="Son las"
    setInterval(()=>{
        const horaAnterior = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
        setTimeout(() => {
           const horaActual =  `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
           $laHora.innerHTML = `<p>Son las ${horaAnterior}. Tiempo Atrasado.</p>`;
           $laHora.innerHTML += `<p>Son las ${horaActual}. Tiempo Actualizado.</p>`;

        }, 1000);
    },1000);
}

queHoraEs();




