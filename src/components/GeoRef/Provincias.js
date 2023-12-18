import React, { useEffect, useState } from 'react';



const Provincias = () => {

    // leer las provincias de la api argentina.gob GeoRef

    const [pais, setPais] = useState(datosInicialPais);

    const [isLoading, setIsLoading] = useState(false);

    const actualizarPais = async () => {
        try {
        // inicio de la conexion
        setIsLoading(true);
        const url = 'https://apis.datos.gob.ar/georef/api/provincias';
        const respuestaServer = await fetch(url);
        // fin de la conexion

        // inicio manipulacion de datos
        // const [mostrarDatosGeneralesDelPais] = await respuestaServer.json();
        
            
        setPais({ cantidad: respuestaServer.cantidad});
            // setPais({
            //     cantidad: mostrarDatosGeneralesDelPais.cantidad,
            //     inicio: mostrarDatosGeneralesDelPais.inicio,
            //     total: mostrarDatosGeneralesDelPais.total
            // })
            // fin de la manipulacion de los datos

        // } catch (errorPais) {
        //     // console.log("Mensaje de error: " + errorPais.message)
        } finally {
            setIsLoading(false);
        }
    }

        useEffect(() => { actualizarPais() }, []);

    return (
        <>
            {isLoading ? <h3>Cargando...</h3>:<p>Pais: ....</p>}
        </>
        
        // <form>
        //   <label for="prov">Provincia:</label>
        //   <select name="prov" id="prov">
        //     <option value="volvo">Volvo</option>
        //     <option value="saab">Saab</option>
        //     <option value="mercedes">Mercedes</option>
        //     <option value="audi">Audi</option>
        //   </select>
        // </form>
    );
}

export default Provincias;
