// componente principal del CRUD (Create, Read, Update, Delete - Crear, Leer, Actualizar, Borrar)

// En el componente principal estará el acceso a toda la tabla (objeto, fetch o axios)

// En el componente CrudForm podre manipular la tabla (CRUD)

// En el componente CrudTable mostraré el contenido de la tabla

import React from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const Crud = () => {
    return (
        <div>
            <CrudForm />
            <CrudTable />
        </div>
    );
}

export default Crud;
