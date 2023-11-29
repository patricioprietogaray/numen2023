import React from 'react';




// recibo por props el product (toda la lista)
const Product = ({product}) => {

    // estructurar para no repetir product.nombre product.precio
    //{ id: 1, nombre: 'Producto A', src: '', precio: 100, stock: 20 },
    const { id, nombre, src, precio, stock } = product;
    

    return (
        <div className='col-sm-6 col-md-4 mb-4'>
            <h4>{nombre}</h4>
            <h5>${precio}</h5>
            <h5>{stock} u.</h5>
            <button className="btn btn-success btn-sm">Agregar</button>
        </div>
    );
}

export default Product;
