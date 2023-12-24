// import React from 'react';

// const Products = ({data, addToCart}) => {
    
//     const { id, nombre, precio } = data;

//     return (
//         <div className='col-sm-6 col-md-4 mb-4'>
//             <h4>{nombre}</h4>
//             <h5>$ {precio}</h5>
//             <button onClick={()=>addToCart(id)} className='btn btn-success btn-sm'>Agregar</button>
//         </div>
//     );
// }

// export default Products;

import React from 'react';

const Products = ({ product, addToCart }) => {
    const { id, nombre, precio, src } = product;
    // src
    return (
        <div className='col-sm-6 col-md-4 mb-4 d-flex flex-column align-items-center'>
            <h4>{nombre}</h4>
            <img src={src} alt={'imagen de ' + { nombre }} width={100} />
            <h5>$ {precio}</h5>

            {/* addToCart activa la funcion de Cart.js que viene como props */}
            <button className='btn btn-success btn-sm' onClick={()=>addToCart(id)}>Agregar</button>
        </div>
    );
}

export default Products;
