import React from 'react';

// desestructuro las props
const CrudTableRow = ({ caballero, setDataToEdit, deleteData }) => {
    

    // desestructuro las propiedades del caballero
    let { name, constellation, id } = caballero;

    return (
        // fila de la tabla unica (key={id})
        <tr key={id}>
            {/* paso las propiedades de los caballeros al JSX */}
            <td>{name}</td>
            <td>{constellation}</td>
            <td>
                {/* paso las funciones como eventos (onClick) */}
                {/* cuando se envia caballero o id se envian los datos que estan en la linea <tr> */}
                <button onClick={()=>setDataToEdit(caballero)}>Editar</button>
                <button onClick={()=>deleteData(id)}>Eliminar</button>
            </td>
        </tr>
    );
}

export default CrudTableRow;
