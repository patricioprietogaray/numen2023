import React from 'react';

// desestructuro las props
const CrudTableRow = ({ caballero, setDataToEdit, deleteData }) => {
    

    // desestructuro las propiedades del caballero
    let { name, constellation, id } = caballero;

    return (
        // fila de la tabla
        <tr>
            {/* paso las propiedades de los caballeros al JSX */}
            <td>{name}</td>
            <td>{constellation}</td>
            <td>
                {/* paso las funciones como eventos (onClick) */}
                <button onClick={()=>setDataToEdit(caballero)}>Editar</button>
                <button onClick={()=>deleteData(id)}>Eliminar</button>
            </td>
        </tr>
    );
}

export default CrudTableRow;
