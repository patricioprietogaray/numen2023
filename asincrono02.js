function asincronoUno() {
    const $forzarOrden1 = document.querySelector("#forzarOrden1");
    const tituloForzarOrden1 = `<h2>Forzar el orden (1°, 4°, 2°, 3°)</h2>`;
    const forzarOrdenPrim1 = `<p>Forzar Orden: Primer elemento.</p>`;
    const forzarOrdenSegu1 = `<p>Forzar Orden: Segundo elemento asíncrono.</p>`;
    const forzarOrdenTerc1 = `<p>Forzar Orden: Tercer elemento asíncrono.</p>`;
    const forzarOrdenCuar1 = `<p>Forzar Orden: Cuarto elemento.</p>`;

    $forzarOrden1.innerHTML=tituloForzarOrden1;
    $forzarOrden1.innerHTML += forzarOrdenPrim1;
    setTimeout(()=>{$forzarOrden1.innerHTML += forzarOrdenSegu1});
    setTimeout(()=>{$forzarOrden1.innerHTML += forzarOrdenTerc1});
    $forzarOrden1.innerHTML += forzarOrdenCuar1;

}

function asincronoDos() {
    const $forzarOrden2 = document.querySelector("#forzarOrden2");
    const tituloForzarOrden2 = `<h2>Forzar el orden 2° version (1°, 4°, 2°, 3°)</h2>`;
    const forzarOrdenPrim2 = `<p>Forzar Orden: Primer elemento.</p>`;
    const forzarOrdenSegu2 = `<p>Forzar Orden: Segundo elemento asíncrono.</p>`;
    const forzarOrdenTerc2 = `<p>Forzar Orden: Tercer elemento asíncrono.</p>`;
    const forzarOrdenCuar2 = `<p>Forzar Orden: Cuarto elemento.</p>`;

    $forzarOrden2.innerHTML=tituloForzarOrden2;
    $forzarOrden2.innerHTML += forzarOrdenPrim2;
    setTimeout(()=>{$forzarOrden2.innerHTML += forzarOrdenSegu2});     //sin cero o con cero es 
    setTimeout(()=>{$forzarOrden2.innerHTML += forzarOrdenTerc2},0);   //igual
    $forzarOrden2.innerHTML += forzarOrdenCuar2;
}

function asincronoTres() {
    const $forzarOrden3 = document.querySelector("#forzarOrden3");
    const tituloForzarOrden3 = `<h2>Forzar el orden 3° version (1°, 4°, 3°, 2°)</h2>`;
    const forzarOrdenPrim3 = `<p>Forzar Orden: Primer elemento.</p>`;
    const forzarOrdenSegu3 = `<p>Forzar Orden: Segundo elemento asíncrono.</p>`;
    const forzarOrdenTerc3 = `<p>Forzar Orden: Tercer elemento asíncrono.</p>`;
    const forzarOrdenCuar3 = `<p>Forzar Orden: Cuarto elemento.</p>`;

    $forzarOrden3.innerHTML=tituloForzarOrden3;
    $forzarOrden3.innerHTML += forzarOrdenPrim3;
    setTimeout(()=>{$forzarOrden3.innerHTML += forzarOrdenSegu3},10);  
    setTimeout(()=>{$forzarOrden3.innerHTML += forzarOrdenTerc3}); 
    $forzarOrden3.innerHTML += forzarOrdenCuar3;

}


function asincronoOrdenado() {
    const $forzarOrden4 = document.querySelector("#forzarOrden4");
    const tituloForzarOrden4 = `<h2>Forzar el orden 4° version (1°, 2°, 3°, 4°)</h2>`;
    const forzarOrdenPrim4 = `<p>Forzar Orden: Primer elemento asíncrono.</p>`;
    const forzarOrdenSegu4 = `<p>Forzar Orden: Segundo elemento asíncrono.</p>`;
    const forzarOrdenTerc4 = `<p>Forzar Orden: Tercer elemento asíncrono.</p>`;
    const forzarOrdenCuar4 = `<p>Forzar Orden: Cuarto elemento asíncrono.</p>`;

    $forzarOrden4.innerHTML=tituloForzarOrden4;
    setTimeout(() => {
        $forzarOrden4.innerHTML += forzarOrdenPrim4;
        setTimeout(() => {
            $forzarOrden4.innerHTML += forzarOrdenSegu4;
            setTimeout(() => {
                setTimeout(()=>{
                    $forzarOrden4.innerHTML += forzarOrdenTerc4;
                    setTimeout(() => {
                        $forzarOrden4.innerHTML += forzarOrdenCuar4;
                    }, 50);
                }, 50);
            }, 500);
        }, 500)
    }, 500);


    //$forzarOrden4.innerHTML += forzarOrdenPrim4;
    //setTimeout(()=>{$forzarOrden3.innerHTML += forzarOrdenSegu3},10);  
    setTimeout(()=>{$forzarOrden3.innerHTML += forzarOrdenTerc3}); 
    $forzarOrden3.innerHTML += forzarOrdenCuar3;

}



asincronoUno();
asincronoDos();
asincronoTres();
asincronoOrdenado();