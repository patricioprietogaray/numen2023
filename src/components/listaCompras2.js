import React, { useEffect, useState } from 'react';
import ItemListaProductos2 from './itemListaProductos2';

const ListaCompras2 = () => {

    const listaDeProductos = [
        {
            id: 1,
            nombre: 'Leche',
            precio: 1500,
            stock: 20,
        },
        {
            id: 2,
            nombre: 'Manteca',
            precio: 2500,
            stock: 21,
        },
        {
            id: 3,
            nombre: 'Pan',
            precio: 8000,
            stock: 10,
        }
    ];

    // al principio no se monstrará la lista
    const [verLista, setVerLista] = useState(false);


    // para que no salga el mensaje de lista oculta y visible
    // al inicio de la página se soluciona con una bandera
    // donde se controle si la pagina esta iniciada o no
    // con estados y no con una variable
    // let paginaIniciada = false;
    const [paginaIniciada, setPaginaIniciada] = useState(false);

    useEffect(() => {
        if (paginaIniciada === true) {
            if (verLista === false) {
                alert("lista oculta (actualizacion del componente)");
            } else {
                alert("lista visible (actualizacion del componente)");
            }
        }
        setPaginaIniciada(true);
        }, [verLista])    /// actualizacion del componente
    
  

    // cambia el estado de ver lista si esta en F pasa a V
    // si esta en V pasa a F
    // hace lo contrario del valor (!verLista)
    const handleVerLista = () => setVerLista(!verLista);


    return (
        <>
            {/* mostrar o no la lista */}
            <button onClick={handleVerLista}>Ver Lista</button>
            
            {/* esto es la seccion que se mostrará o no
            segun el estado del boton 
            para interactuar con el bloque de codigo se debe
            poner entre {}*/}
            {/* si ver lista es V se muestra, si es F no */}
            {verLista && <div>
                <h2>Lista de compras 2</h2>
                {/* mapeo lista de productos y genero un alias para los registros como itemLista
                luego seteo la key con itemLista.id y por ultimo envio el objeto
                completo como parámetro con el nombre  de producto que lo paso al 
                props de itemListaProducto */}
                {listaDeProductos.map((itemLista) => <ItemListaProductos2 key={itemLista.id} producto={itemLista} />)}
            </div>}
            {/* cuando se muestra la info el useEffect se acciona
            montaje, actualizacion y desmontaje, antes no se acciona */}
            
        </>
    );
}

export default ListaCompras2;
