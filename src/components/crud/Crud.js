// componente principal del CRUD (Create, Read, Update, Delete - Crear, Leer, Actualizar, Borrar)

// En el componente principal estará el acceso a toda la tabla (objeto, fetch o axios)

// En el componente CrudForm podre manipular la tabla (CRUD)

// En el componente CrudTable mostraré el contenido de la tabla

import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
// import CrudForm from './CrudForm';
// import CrudTable from './CrudTable';


const Crud = () => {


    // base de datos inicial
    const initialDb = [
        {id: 1, name: 'Seiya', constellation: 'Pegaso',},
        {id: 2, name: 'Shiryu', constellation: 'Dragon',},
        {id: 3, name: 'Hyoga', constellation: 'Cisne',},
        {id: 4, name: 'Shun', constellation: 'Andromeda',},
        {id: 5, name: 'Ikki', constellation: 'Fenix',}
    ]

    // se prepara el estado para pasar la Db a la tabla
    const [db, setDb] = useState(initialDb);

    // estado que se ocupa de la edicion
    const [dataToEdit, setDataToEdit] = useState(null);


    // funciones insertar, editar y borrar
    const createData = (data) => {
        // funcion para insertar los datos
        // el id como fecha
        data.id = Date.now();
        setDb([...db, data])
    };


    const updateData = (data) => {
        // funcion para editar los datos
        let newData = db.map(el => el.id === data.id ? data : el)
        setDb(newData);
    };
    
    const deleteData = (id) => {
        // funcion para eliminar un dato
        let isDelete = window.confirm(`¿Está seguro de eliminar el registro con el id ${id}?`);

        if (isDelete) {
            // en newData se guarda (en newData) todo los elementos del db menos el que coincida con id
            let newData = db.filter(el => el.id !== id);
            // reemplazo en la base de datos con newData
            setDb(newData);
        } else {
            // si no: no hace nada
            return;
        }
    };
    

    // estado que contiene un arreglo para editar los registros
    //const [usersDB, setUsersDB] = useState([]);


    // usuario a editar
    //const [userToEdit, setUserToEdit] = useState(null);


    // funcion para crear un usuario
    //const addUsers = () => {
        
    //}
    
    // funcion para leer todos los usuarios
    //const updateUsers = () => { }
    
    // funcion para borrar un usuario
    //const deleteUsers = () => { }

    return (
        <div className='container'>
            <h1 className='h1'>CRUD con React</h1>
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
            <CrudTable data={db}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData} />
            
            {/* <div>CrudTable</div> */}
            {/* se le pasa el estado db (inicializado con todos los datos) */}
            {/* <CrudTable data={db} /> */}

        </div>
    );
}

export default Crud;
// 0:56:23