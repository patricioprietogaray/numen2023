import React from 'react';

const Futbol = (props) => {
    let titulo = "Formación de River Plate";
    const objetoEquipo = props.equipo;
    // console.log(objetoEquipo);
    let texto1 = "Con el numero ";
    let texto2 = ", ocupa el puesto de ";
    let texto3 = ": "
    return (
        <>
            <h2>{titulo}</h2>
            <p>Los titulares son: </p>
            <br />
            
                
            
            {/* lo que voy a retornar es la lista de jugadores de River para que sea leido por 
            el comentarista */}
                {objetoEquipo.map((equipo, indice) => 
                {

                    if (indice < (objetoEquipo.length - 2)) {
                        return <span key={equipo.id}>{texto1}{equipo.id}{texto2}{equipo.puesto}{texto3}{equipo.nombre}; </span>
                    } else if((indice > (objetoEquipo.length - 3) && (indice < (objetoEquipo.length - 1)))){
                        return <span>{texto1}{equipo.id}{texto2}{equipo.puesto}{texto3}{equipo.nombre} y </span>
                    } else 
                        return <span>{texto1}{equipo.id}{texto2}{equipo.puesto}{texto3}{equipo.nombre}. </span>
                    
                    }
                
                    // <span key={equipo.id}><li>{equipo.length}-{indice}</li></span>
                
                )}

            
            {/* {objetoEquipo.map(
                (equipos, indice) => 
                    <span key={equipos.id}>
                        {/* renderizado condicional */}
                        {/* <ul> */}
                        
                        
                        {/* </ul>{(equipos.indice < )} */}



                        {/* Con el número {equipos.id} está como {equipos.puesto} {equipos.nombre}
                        {if(equipos.indice<equipos.length-2){";"}else if(equipos.indice===equipos.length -2){" y "}} </span> */}
                
            {/* )}  */}

        </>
    );
}

export default Futbol;
