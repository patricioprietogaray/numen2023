import React from 'react';
import AB1EjercicioProductosLista from './A-B-1-ejercicioProductosLista';

const AA1EjercicioProductosContenedor = () => {

    let productos = [
      {
        id:1,
        nombre: 'Leche',
        precio: '4.00',
        stock: 25
      },
      {
        id:2,
        nombre: 'Pan',
        precio: '2.00',
        stock: 25
      },
      {
        id:3,
        nombre: 'Manteca',
        precio: '3.00',
        stock: 0
      }
    ];
  
  const estilos = {
          margin: "1rem",
          padding: "1rem",
          border: "solid 2px black",
          borderRadius: "15px",
          width: "15%",
          backgroundColor: "beige",
          color: "black",
          fontWeight: 600,
          textAlign: "center",
          
        }

    return (
      <>
        {/* <p>Desde contenedor obtendré los datos (en este caso desde un objeto que
          se declara en el mismo componente): el componente se denomina registro
          y para acceder a cada una de sus propiedades (campos) se utiliza la notación
          del punto. Por ejemplo el objeto se denomina productos y para acceder a su
          id se utiliza productos.id</p>
        <p>
          Para recorrer la tabla u objeto se utiliza el metodo map (se puede
          usar el reduce o filter segun el caso...), se debe proyectar un key 
          que sera la clave y se pasa el parametro del objeto que ira como 
          props al objeto hijo. Ej: {'<'}componenteHijo producto={'{'}registro{'}'} key={'{'}registro.id{'} />'} 
        </p>
        <p>
          En el componente hijo recibo el dato como un argumento props y accedo desde props.producto.id, donde
          producto es la propiedad que lo declaro en componenteHijo que le paso el objeto registro.
        </p>
        <p>
          En el componente hijo los datos se pasan a una variable o constante dentro de
          la funcion y por fuera del return. (Con el fomato "const variable = props.producto.nombre;")
        </p>
        <p>
          En cuanto a los estilos en el contenedor se aplican estilos solo para el 
          contenedor....
        </p> */}
        <p>
          En el tercer nivel se usa el formato "const variable = String(props.nombreProducto.producto.nombre);"
          luego del props se agrega el nombre del parametro pasado más la notacion del nivel 
          anterior.
        </p>
        {/* console.log("productos "+productos) */}
        <div style={{display:"flex", margin: "1rem"}}> 
        
        {/* hago un map de productos y llamo al contenedor pasandole el prop */}
        {
          productos.map(registro => 
            <div style={estilos}> 
              <AB1EjercicioProductosLista producto={registro} key={registro.id} />
            </div>  
          )}
        </div>
      </>
    );
}

export default AA1EjercicioProductosContenedor;
