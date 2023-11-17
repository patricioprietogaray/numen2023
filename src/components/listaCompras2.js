// import React, { useContext, useState } from 'react';
// import ItemListaProductos2 from './itemListaProductos2';
// import { productoContext } from '../providers/productosProviders';

// const ListaCompras2 = (props) => {
    // productos lo paso como props desde App.js
    // console.log({ productosComoProps });

    // al principio no se monstrará la lista
    // const [verLista, setVerLista] = useState(false);


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
    // const handleVerLista = () => setVerLista(!verLista);

    // const [productos, setProductos] = useState() usando asi declaro un nuevo estado
    // y no quiero hacer eso, lo que quiero hacer es declarar un estado que me traiga
    // el estado declarado en el contexto (productoProviders.js ->
    // const [productos, setProductos] = useState([{
    //        id: 1, ) .........

    // para exportar el contexto desde providers
    // (export const productoContext (contexto exportado) = createContext();)   uso:
    // const [productos, setProductos] = useContext(contextoExportado)
    // const [Productos, setProductos] = useContext(productoContext);

    // return (
        // <>
            // {/* mostrar o no la lista */}
            // {/* <button onClick={handleVerLista}>Ver Lista</button> */}
            
            // {/* esto es la seccion que se mostrará o no
            // segun el estado del boton
            // para interactuar con el bloque de codigo se debe
            // poner entre {}*/}
            // {/* si ver lista es V se muestra, si es F no */}
            // {/* {verLista && <div> */}
            //     {/* <h2>Lista de compras 2</h2> */}
                // {/* mapeo lista de productos (que esta en el mismo componente!) y genero un alias para los registros como itemLista
                // luego seteo la key con itemLista.id y por ultimo envio el objeto
                // completo como parámetro con el nombre  de producto que lo paso al
                // props de itemListaProducto */}
                // {/* {productos.map((itemLista) => <ItemListaProductos2 key={itemLista.id} producto={itemLista} />)} */}

                // {/* mapeo igual que el anterior pero ojo! props.objeto.atributo!!!!!! */}
                // {/* {productosComoProps.productos.map((item) => <p>items: {item.id}-{item.nombre}</p>)} */}
                
            // {/* </div>} */}
            // {/* cuando se muestra la info el useEffect se acciona
            // montaje, actualizacion y desmontaje, antes no se acciona */}
            
        // </>
    // );
// }

// export default ListaCompras2;





// paso datos por props
import React from 'react';

// useState y los demas hooks van entre llaves!!!!!
import { useState } from 'react';
import { useEffect } from 'react';


// lo que viene de App.js <ListaCompras2 productos={listaDeProductos} /> 
// lo paso como {productos}

const ListaCompras2 = ({productos}) => {
    // useState para ver la lista que luego manejo con un boton (al iniciar en false)
    const [verLista, setVerLista] = useState(false);


    // cargo en handlerVerLista lo contrario al estado (si F entronces V - si V entronces F)
    const handlerVerLista = () => setVerLista(!verLista);
    

    // planto una bandera para que no muestre los efectos (useEffect) del componente
    //cuando inicio la página
    let [paginaIniciada, setPaginaIniciada] = useState(false);

    // aplico useEffect para el inicio de la página NO VA EN EL RETURN!!!
    // useEffect(()=>alert('alerta en useEffect'));
    // useEffect(() => {
    //     if (paginaIniciada === true) {
    //         if (verLista === true) {
    //             alert('Lista Visible')
    //         } else {
    //             alert('Lista Oculta')
    //         }
    //     }

        // al principio es falso y salta el control al final lo pongo en true para 
        // que la siguiente vuelta lo tome.... para que no sea molesto lo deshabilito....
    //     setPaginaIniciada(true);
    // },[verLista]) //actualiza el ciclo de vida

    return (
        <>
            <button onClick={handlerVerLista}>Ver Lista</button>
            {/* cuando verLista es true muestra lo siguiente dentro del div*/}
            {verLista && <div>
                <h3>Lista de Compras</h3>
                <ul>
                    {productos.map((prod) => {
                        // retorno la lista (li) si no se retorna nada productos no se 
                        // muestra se debe porner return para que muestre la iteracion con map 
                        return (
                            <li>{prod.nombre}||${prod.precio}</li>
                        )
                    })}
                </ul>
            </div>}
            {productos[0].id}
            {productos[0].nombre}
            

            

        </>
    );
}

export default ListaCompras2;
