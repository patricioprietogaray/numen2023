import React from 'react';




// recibo por props el product (toda la lista) 
// y la funcion addToCart que vienen de Cart.js
const Product = ({product, addToCart}) => {

    // estructurar para no repetir product.nombre product.precio
    //{ id: 1, nombre: 'Producto A', src: '', precio: 100, stock: 20 },
    const { id, nombre, src, precio, stock } = product;
    

    return (
        <div className='col-sm-6 col-md-4 mb-4'>
            <h4>{nombre}</h4>
            <h5>${precio}</h5>
            <h5>{stock} u.</h5>
            {/* addToCart de que producto viene??? hay que configurar un parámetro
            especial de cada producto para no equivocarse es por ello que 
            le paso el id. DEBO PONER UN ARROW FUNCTION PARA QUE NO SE
            EJECUTE DE MANERA INDEFINIDA... */}
            <button onClick={()=>addToCart(id)} className="btn btn-success btn-sm">Agregar</button>
        </div>
    );
}

export default Product;
