import React, { useState } from 'react';
// import ProductosProviders from '../providers/productosProviders';
// import ItemListaProductos2 from './itemListaProductos2';
import ListaCompras2 from './listaCompras2';

// import { ProductosProviders } from '../providers/productosProviders';

//ojo respetar el nombre como viene en el componente argumentado
// <Main productos={listaDeProductos} /> PRODUCTOS

// borro productos como props
const Main = () => {
    const [verLista, setVerLista] = useState(false);
    const handlerVerLista = () => {
        setVerLista(!verLista);
    }

    return (
        <>
            <button onClick={handlerVerLista}>Ver Lista</button>
            {verLista && <div>
                <h3>En el Main: Lista de productos</h3>
                <ul>
                    {/* mapear productos para pasar cada li y en lista compras solo mostrarlo */}
                    {/* {productos.map((reg)=><ListaCompras2 productitos={reg} />)} */}
                </ul>
            </div>}
            
        </>
    );
}

export default Main;




// import React from 'react';
// import ListaCompras2 from './listaCompras2';
// import ItemListaProductos2 from './itemListaProductos2';

// const Main = ({productos}) => {
//     return (
//         <>
//             <ItemListaProductos2/>
//             {/* <ListaCompras2 /> */}
//             {/* productos={productos} /> */}
//         </>
//     );
// }

// export default Main;
