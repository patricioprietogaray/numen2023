// componente principal del CRUD (Create, Read, Update, Delete - Crear, Leer, Actualizar, Borrar)
// En el componente principal estará el acceso a toda la tabla (objeto, fetch o axios)
// En el componente CrudForm podre manipular la tabla (CRUD)
// En el componente CrudTable mostraré el contenido de la tabla
import React, { useEffect, useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
// Creador de UUID Random
// npm install uuid
import { v4 as uuidv4 } from 'uuid';
import Loader from './Loader';

import axios from 'axios';

const Crud = () => {
    // base de datos inicial en formato objeto 
    // contras:
    // queda en una memoria temporal
    // siempre cuando reinicio son los mismos datos y lo agregado / modificado se pierde
    // const initialDb = [
    //     {id: 1, name: 'Seiya', constellation: 'Pegaso',},
    //     {id: 2, name: 'Shiryu', constellation: 'Dragon',},
    //     {id: 3, name: 'Hyoga', constellation: 'Cisne',},
    //     {id: 4, name: 'Shun', constellation: 'Andromeda',},
    //     {id: 5, name: 'Ikki', constellation: 'Fenix',}
    // ]

    // utilizo el archivo db.json el cual tendrá los nombres y constelaciones
    // tener instalado en el proyecto axios (npm install axios) y luego importarlo
    // (import axios from "axios";)
    // tener instalado en el proyecto JSON Server (npm install -g json-server)
    // y luego levantar el
        // servidor (json-server --watch db.json --port 8080) se debe especificar la ruta y el puerto
        // , si esta en el root del proyecto va sin ruta (/baseDatos/db.json si se encuentra dentro de una carpeta /baseDatos)

    // se prepara el estado para pasar la Db a la tabla (objeto local
    // y no se guardan los datos agregados)
    // const [db, setDb] = useState(initialDb);
    // estado que se ocupa de la edicion
    const [dataToEdit, setDataToEdit] = useState(null);
    // funciones insertar, editar y borrar

    // estado para cargar los usuarios
    const [usersDB, setUserDB] = useState([]);

    //estado de lectura para la bd
    const [loading, setLoading] = useState(false);

    // useEffect para cargar la base de datos la primera vez que cargue el componente Crud.js
    useEffect(() => {
        setLoading(true); // muestra el mensaje cargando... ubicado en otro componente (loading.js)
        getUsers();
        setLoading(false);
    },[])

    // axios
    // funcion para obtener los usuarios que vienen del json-server (asincrona)
    const getUsers = async () => {
        try {
            // intenta la conexion , pide la conexion con await (async - await)

            // const response = await Axios.prototype.get("http://localhost:8080/usuarios");
                // Axios.get("http://localhost:8080/usuarios");

            
            // hago la conexion al servidor
            const response = await axios.get("http://localhost:8080/usuarios");
            
            // console.log(response);
            // luego cargo en el estado y obtengo los usuarios desde el server
            setUserDB(response.data);
            await console.log("response.data: " + response.data);
            

        } catch(e) {
            // si hay error en el intento de la conexion
            console.log("Hubo un error al intentar cargar los usuarios - " + e.message);
        }
    }

    // con el objeto
    // const createData = (data) => { // funcion para insertar los datos el id como fecha
        //data.id = Date.now(); // id como fecha
        // data.id = uuidv4(); //codigo uuid como id
        // data.createAt = new Date().toLocaleString(); //cuando se creo el registro
        // setDb([...db, data])
        // console.log(data.id);
        // console.log(data.createAt);
        // console.log(data);                         
    // };

// con axios ---- POST 
    // Se reemplaza la programacion por una peticion POST
const createData = async (data) => {
    data.id = uuidv4();
    data.createAt = new Date().toLocaleString();

    // intentar y capturar el error
    try {
        // agrego a usuarios el contenido de data (usuario y email desde el formulario)
        await axios.post("http://localhost:8080/usuarios", data);
        // muestro los datos
        getUsers();
    } catch (error) {
        console.log("Error al agregar un registro - " + error.message)
    }



    // let options = {
    //     method: "POST",
    //     headers: { "content-type": "application/json" },
    //     data: JSON.stringify(data)
    // };
    // await axios("http://localhost:8080/usuarios", options)

    // getUsers()
};

    //1:53:00
    
    
  // con el objeto
    // const updateData = (data) => { // funcion para editar los datos. Llega el dato y si coinciden
        // los IDs cargo el dato (name y constellation) en ese registro. Y si no carga el elelemto
        // tal cual esta en la DB.
        // let newData = db.map(el => el.id === data.id ? data : el)
        // setDb(newData); //la BD es newData y se carga al state Db
    //     setDataToEdit(null); // borro lo que contenga DataToEdit
// };
    
// con axios ---- PUT
// se reemplaza el updateData por una peticion PUT
const updateData = async (data) => {
    //let endpoint = `http://localhost:8080/usuarios/${data.id}`;


    // let options = {
    //     method: "PUT",
    //     headers: { "content-type": "application/json" },
    //     data: JSON.stringify(data)
    // };   //en la diapo (pag 30) se muestra una coma
    //     await axios(endpoint, options)
    // getUsers()

    // agrego un atributo nuevo que será la fecha de actualizacion del registro
    data.updatedAt = new Date().toLocaleTimeString();

    try {
        // actualizr el registro (metodo PUT)
        // direccion del servidor id del dato que eliminaré         todos los datos (que nos pasaron)
        await axios.put(`http://localhost:8080/usuarios/${data.id}`, data)

        // anulo el estado dataToEdit
        setDataToEdit(null);
    } catch(error) {
        console.log("Error al actualizar los usuarios - " + error.message);
    }


// const deleteData = (id) => {
//     // funcion para eliminar un dato
//     let isDelete = window.confirm(`¿Está seguro de eliminar el registro con el id ${id}?`);
//     if (isDelete) {
//         // en newData se guarda todos los registros del db a excepción del que coincida con id
//         // let newData = db.filter(el => el.id !== id);
//         // setDb(newData); // reemplazo en la base de datos con newData
//     } else {
//         return; // si no: no hace nada
//     }
    };
    
    const deleteData = async (id) => {
        let isDelete = window.confirm(`¿Estás seguro que deseas eliminar el registro "${id}"?`);

        if (isDelete) {
            // let endpoint = `http://localhost:8080/usuarios/${id}`;

            // let options = {
            //     method: "DELETE",
            //     headers: { "content-type": "application/json" },
            // }; await axios(endpoint, options)
            // getUsers()

            try {
                await axios.delete(`http://localhost:8080/usuarios/${id}`);
                // anulo el estado dataToEdit
                setDataToEdit(null);
                // actualizo el listado de usuarios en el DOM
                getUsers();
            } catch (error) {
                console.log("Se produjo un error al intentar elminar el registro! - " + error.message);
            }
        } else {
            return;
        }
    }
    
    return (
        <div className='container'>
            <h1 className='h1 text-center'>CRUD con React</h1>
            {/* userToEdit cuando cliquee en agregar usuario los textbox del usuario se pondran en null */}
            {/* <CrudForm addUsers={addUsers} userToEdit={userToEdit} setUserToEdit={setUserToEdit} /> */}
            {/* a table le envio el arreglo vacio mediante props */}
            {/* setUserToEdit lo paso como props para tener acceso al estado userToEdit */}
            {/* <CrudTable usersDB = {usersDB} setUserToEdit={setUserToEdit} /> */}
            {/* <div>CrudForm</div> */}
            
            {/* modificado para agregar la operatividad del crud */}
            {/* se pasa los estados y funciones como props a los componentes */}
            <CrudForm createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}    />
            {/* <CrudForm /> */}
            
             {/* se pasa los estados y funciones como props a los componentes */}
            
            {/* programar el condicional render del Loader */}
            {loading && <Loader />}
            {/* programo el renderizado condicional con axios */}
            {usersDB && <CrudTable data={usersDB}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData} />}
            
            {/* cuando la DB era un objeto */}
            {/* <CrudTable data={db}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData} /> */}
            
            {/* <div>CrudTable</div> */}
            {/* se le pasa el estado db (inicializado con todos los datos) */}
            {/* <CrudTable data={db} /> */}

        </div>
    );
}
export default Crud;
// 0:56:23