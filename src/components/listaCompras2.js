import React, { useState } from 'react';
import ItemListaProductos2 from './itemListaProductos2';

const ListaCompras2 = (productosComoProps) => {
    // productos lo paso como props desde App.js
    // console.log({ productosComoProps });

    // al principio no se monstrará la lista
    const [verLista, setVerLista] = useState(false);


    // para que no salga el mensaje de lista oculta y visible
    // al inicio de la página se soluciona con una bandera
    // donde se controle si la pagina esta iniciada o no
    // con estados y no con una variable
    // let paginaIniciada = false;
    // const [paginaIniciada, setPaginaIniciada] = useState(false);

    // useEffect(() => {
    //     if (paginaIniciada === true) {
    //         if (verLista === false) {
    //             alert("lista oculta (actualizacion del componente)");
    //         } else {
    //             alert("lista visible (actualizacion del componente)");
    //         }
    //     }
    //     setPaginaIniciada(true);
    //     }, [verLista])    /// actualizacion del componente
    
  

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
                {/* mapeo lista de productos (que esta en el mismo componente!) y genero un alias para los registros como itemLista
                luego seteo la key con itemLista.id y por ultimo envio el objeto
                completo como parámetro con el nombre  de producto que lo paso al 
                props de itemListaProducto */}
                {/* {productos.map((itemLista) => <ItemListaProductos2 key={itemLista.id} producto={itemLista} />)} */}

                {/* mapeo igual que el anterior pero ojo! props.objeto.atributo!!!!!! */}
                {productosComoProps.productos.map((item) => <p>items: {item.id}-{item.nombre}</p>)}
                
            </div>}
            {/* cuando se muestra la info el useEffect se acciona
            montaje, actualizacion y desmontaje, antes no se acciona */}
            
        </>
    );
}

export default ListaCompras2;
