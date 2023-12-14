// import React from 'react';

// const CartItem = ({ data }) => {
    
//     const { id, nombre, precio } = data;
    

    // return (
        // <div className='col-sm-6 d-flex justify-content-between mb-3' >
            // <h4>{id} - {nombre}</h4>
            // <h4>{precio}</h4>
            // <button className='btn btn-warning btn-sm'>Eliminar un elemento</button>
            // <button className='btn btn-warning btn-sm'>Eliminar todos los elementos</button>
        // </div>
//         <>
//             <h2>{id}, {nombre}, {precio}</h2>
//         </>
//     );
// }

// export default CartItem;


// import React from 'react';

// const CartItem = ({ data }) => {
//     return (
//         <div className='mb-3 '>
//             <h4>{data.nombre}</h4>
//             <h4>$ {data.precio}</h4>
//             <img src={data.src} width={'50px'}/>
//             <button>Comprar</button>
//         </div>
//     );
// }

// export default CartItem;

import React from 'react';


// {state.cart.map((item) => <CartItem key={item.id} 'item'={item} />)}
// acordarse que el props debe tener el mismo "nombre" que tiene en el parámetro
// asignado cuando se llama al compoenente
const CartItem = ({item, deleteFromCart}) => {
    
    const { id, nombre, precio, cantidad } = item; //1:04:00

    return (
        <div className='col-md-12 d-flex justify-content-between mb-3'>
            <h5>{cantidad}u</h5>
            <h5>{nombre}</h5>
            <h5>$ {precio}</h5>
            <h5>$ {precio * cantidad}</h5>
            {/* se llama a la funcion borrado que se encuentra en Cart.js */}
            {/* paso el id y paso un bool ¿eliminar todos los items de un producto dado? */}
            <button onClick={()=>deleteFromCart(id, false)} className='btn btn-warning btn-sm'>Eliminar uno</button>
            <button onClick={() => deleteFromCart(id, true)} className='btn btn-warning btn-sm'>Eliminar todos</button>
        </div>
    );
}

export default CartItem;
