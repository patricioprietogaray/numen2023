import React, { useEffect, useState } from 'react';

const datosInicialPais = {
    cantidad: '0',
    inicio: '0',
    total: '0'
}


const Pais = () => {

    // definicion de estados
    const [pais, setPais] = useState(datosInicialPais);
    
    const [isLoading, setIsLoading] = useState(false);

    const actualizarPais = async () => { 

        try {
            // prueba
            //cargar datos de la api GeoRef
            // conectar a la api
            setIsLoading(true);
            const url = 'https://apis.datos.gob.ar/georef/api/provincias';
            const serverArgentina = await fetch(url);
            const [nuevaConexionJson] = await serverArgentina.json(); //destructurar arreglo nuevaConexionJson
            
            // manejo de los datos
            setPais({
            cantidad: nuevaConexionJson.cantidad,
            inicio: nuevaConexionJson.inicio,
            total: nuevaConexionJson.total
        });
        } catch (e) {
            console.log("error: " + e.message);
        } finally {
            setIsLoading(false);
        }       
    }

    useEffect(() => actualizarPais(), []);



    return (
        <>
            {
                isLoading ?
                <h3>Cargando ... </h3> :
                <div>
                    <h2>Datos del País: </h2>
                    {pais.total}    
                    <p>La República Argentina está constituida por {pais.cantidad} provincias.</p>
                </div>
            }
        </>
        
    );
}

export default Pais;
